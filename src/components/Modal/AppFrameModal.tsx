import type {AppSource} from '../../utils/types'

import DraggableModal from './DraggableModal'
import AppViewLoading from "./AppViewLoading";
import AppViewError from "./AppViewError";

import './appFrameModal.css'

export type Props = {
  app: AppSource
  onClose: (app: AppSource) => void
}

export default function AppFrameModal({app, onClose}: Props) {
  return (
    <DraggableModal
      title={app.title}
      minSize={app.minSize}
      defaultSize={app.defaultSize}
      defaultPosition={app.defaultPosition}
      onClose={() => onClose(app)}
    >
      <iframe
        src={app.url}
        title={app.title}
        width="100%"
        height="100%"
        referrerPolicy="strict-origin-when-cross-origin"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts allow-downloads allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        allow="encrypted-media; fullscreen; sync-xhr;"
      />
      {!app.isLoaded && (
        <AppViewLoading type={app.title}/>
      )}
      {app.error && (
        <AppViewError error={app.error}/>
      )}
    </DraggableModal>
  )
}
