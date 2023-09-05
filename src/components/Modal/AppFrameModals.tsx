import type { AppSource } from '../../utils/types'
import AppFrameModal from './AppFrameModal'

export type Props = {
  sources: AppSource[]
  onAppClose: (app: AppSource) => void
}

export default function AppFrameModals({ sources, onAppClose }: Props) {
  return (
    <>
      {sources.map((source) => (
        <AppFrameModal
          key={source.id}
          app={source}
          onClose={onAppClose}
        />
      ))}
    </>
  )
}
