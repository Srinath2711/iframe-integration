import {useEffect} from 'react'
import type {AppSource, AppMessage} from './types'

/**
 * Custom hook to listen to messages from other apps.
 * i.e. window.addEventListener('message', handleMessage)
 *
 * Created to be used in the App component for demo purposes.
 *
 * @param appSources
 * @param onAppMessage
 */
export default function useMessages(
  appSources: AppSource[],
  onAppMessage: (app: AppSource, message: AppMessage) => void
) {
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      console.log(event);
      // Find the app source that sent the message (event.data.url)
      const appTarget = appSources.find((s) => s.url === event.data.url)

      if (appTarget) {
        onAppMessage(appTarget, event.data)
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [appSources, onAppMessage])
}
