import {AppMessageType} from "../../utils/types"

import AppFrameModals from '../Modal/AppFrameModals'
import Header, {DebugValue} from './Header'

import useMessages from '../../utils/useMessages'
import useSources from '../../utils/useSources'

import './app.css'

export default function App() {
  /**
   * Get the list of app sources and actions to manage them.
   */
  const {sources, actions} = useSources()

  /**
   * Listen to messages from iframe apps.
   */
  useMessages(sources, (app, message) => {
    switch (message.type) {
      case AppMessageType.AppReady:
        actions.setAppLoaded(app.id)
        break
      case AppMessageType.AuthTimeout:
        actions.setAppError(app.id, 'Authentication Timeout')
        break
      case AppMessageType.AuthError:
        actions.setAppError(app.id, 'Authentication Error')
        break
      case AppMessageType.OpenNew:
        if (app.title === 'timer') {
          actions.addTimerApp()
        } else {
          actions.addSpinnerApp()
        }
    }
  })

  /**
   * Post a mock message simulating message from an iframe app.
   * @param app
   * @param type
   * @param message
   */
  const postMockMessage = (app: string, type: AppMessageType, message?: string) => {
    const url = sources.findLast((s) => s.title === app)?.url
    window.postMessage({type, message, url})
  }

  /**
   * Handle debug actions from the header select.
   * @param type
   */
  const handleDebug = (type: DebugValue) => {
    switch (type) {
      case DebugValue.SpinnerAppReady:
        return postMockMessage('spinner', AppMessageType.AppReady)
      case DebugValue.SpinnerAuthTimeout:
        return postMockMessage('spinner', AppMessageType.AuthTimeout)
      case DebugValue.SpinnerAuthError:
        return postMockMessage('spinner', AppMessageType.AuthError)
      case DebugValue.SpinnerOpenNew:
        return postMockMessage('spinner', AppMessageType.OpenNew)
      case DebugValue.TimerAppReady:
        return postMockMessage('timer', AppMessageType.AppReady)
      case DebugValue.TimerAuthTimeout:
        return postMockMessage('timer', AppMessageType.AuthTimeout)
      case DebugValue.TimerAuthError:
        return postMockMessage('timer', AppMessageType.AuthError)
      case DebugValue.TimerOpenNew:
        return postMockMessage('timer', AppMessageType.OpenNew)
      case DebugValue.CloseAll:
        return actions.removeAllApps()
    }
  }

  return (
    <div className="app">
      <Header
        onAddTimer={() => actions.addTimerApp()}
        onAddSpinner={() => actions.addSpinnerApp()}
        onDebug={handleDebug}
      />
      <AppFrameModals
        sources={sources}
        onAppClose={(app) => actions.removeApp(app.id)}
      />
    </div>
  )
}
