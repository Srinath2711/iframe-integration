/* eslint-disable object-shorthand */
import {useRef, useState, type ReactNode, type PointerEvent, useMemo} from 'react'

import {Resizable} from 're-resizable'
import Draggable from 'react-draggable'

import closeIcon from '../../assets/icon-close.svg'
import handleIcon from '../../assets/icon-grab-handle.svg'
import expandIcon from '../../assets/icon-expand.svg'
import contractIcon from '../../assets/icon-contract.svg'
import timerIcon from '../../assets/icon-timer.svg'
import spinnerIcon from '../../assets/icon-spinner.svg'

type Props = {
  defaultSize?: { width: number; height: number }
  collapsedSize?: { width: number; height: number }
  defaultPosition?: { x: number; y: number }
  minSize?: { width: number; height: number }
  bounds?: { top: number; left: number; right: number; bottom: number }
  title?: string
  onClose: () => void
  children: ReactNode
}

export default function DraggableModal({
 children,
 title,
 onClose,
 collapsedSize = { width: 250, height: 40 },
 defaultSize = { width: 500, height: 600 },
 defaultPosition = { x: 0, y: 0 },
 minSize = { width: 250, height: 250 },
 bounds = { top: 60, left: 0, right: 0, bottom: 0 }
}: Props) {
  const handleRef = useRef<HTMLDivElement>(null)

  // Controlled size of the modal (defaultSize is the initial size)
  const [fullSize, setFullSize] = useState(defaultSize)

  // Controls if the modal is expanded or collapsed
  const [expanded, setExpanded] = useState(true)

  // Controlled position of the modal (defaultPosition + bounds is the initial position)
  const [position, setPosition] = useState({
    x: defaultPosition.x + bounds.left,
    y: defaultPosition.y + bounds.top
  })

  // Size of the modal that respects the expanded/collapsed state without losing the size
  const currentSize = useMemo(() => ({
    width: expanded ? fullSize.width : collapsedSize.width,
    height: expanded ? fullSize.height : collapsedSize.height
  }), [expanded, fullSize, collapsedSize])

  // Bounds of the modal that respects the expanded/collapsed state and window size
  const currentBounds = useMemo(() => ({
    top: bounds.top,
    left: bounds.left,
    right: window.innerWidth - currentSize.width - bounds.right,
    bottom: window.innerHeight - currentSize.height - bounds.bottom
  }), [bounds, currentSize, expanded])

  const onHandlePointerDown = (e: PointerEvent) => {
    // iFrames can prevent event propagation, so we need to lock the pointer to our handle during drag
    handleRef.current?.setPointerCapture(e.pointerId)
  }

  const onHandlePointerUp = (e: PointerEvent) => {
    // Release the pointer after drag is complete
    handleRef.current?.releasePointerCapture(e.pointerId)
  }

  const onExpandCollapse = () => {
    const maxRight = window.innerWidth - bounds.right - fullSize.width
    const maxBottom = window.innerHeight - bounds.bottom - fullSize.height

    // Make sure modal won't be offscreen when expanded
    if (position.x > maxRight || position.y > maxBottom) {
      setPosition({
        x: Math.min(position.x, maxRight),
        y: Math.min(position.y, maxBottom)
      })
    }

    // Toggle expanded state
    setExpanded(!expanded)
  }

  const appIcon = title === 'timer' ? timerIcon : spinnerIcon

  return (
    <div className="draggable-modal-overlay">
      <Draggable
        handle=".header-background"
        position={position}
        bounds={currentBounds}
        onStop={(_e, data) => {
          setPosition({x: data.x, y: data.y})
        }}
      >
        <Resizable
          size={fullSize}
          minWidth={expanded ? minSize.width : collapsedSize.width}
          minHeight={expanded ? minSize.height : collapsedSize.height}
          maxWidth={expanded ? undefined : collapsedSize.width}
          maxHeight={expanded ? undefined : collapsedSize.height}
          className={`draggable-modal ${expanded ? 'expanded' : 'collapsed'}`}
          enable={{right: expanded, bottom: expanded, bottomRight: expanded}}
          onResizeStop={(_e, _d, _r, d) => {
            setFullSize({width: fullSize.width + d.width, height: fullSize.height + d.height})
          }}
        >
          <div className="draggable-header">
            <div
              ref={handleRef}
              className="header-background"
              onPointerDown={onHandlePointerDown}
              onPointerUp={onHandlePointerUp}
            />

            <button
              type="button"
              className="btn handle"
            >
              <img
                src={expanded ? handleIcon : appIcon}
                alt="Drag handle"
              />
            </button>

            <div className="header-title">
              {title}
            </div>

            <button
              type="button"
              className="btn collapse"
              onClick={onExpandCollapse}
            >
              <img
                src={expanded ? contractIcon : expandIcon}
                alt={expanded ? 'Collapse' : 'Expand'}
              />
            </button>

            <button
              type="button"
              className="btn close"
              onClick={() => onClose()}
            >
              <img
                src={closeIcon}
                alt="Close modal"
              />
            </button>
          </div>

          <div
            className="draggable-content"
            children={children}
          />
        </Resizable>
      </Draggable>
    </div>
  )
}
