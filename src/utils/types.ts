/**
 * A model for an app source that can be rendered in a frame.
 *
 * @typedef {Object} AppSource
 * @property {string} id
 * @property {string} url
 * @property {string} [title]
 * @property {{width: number, height: number}} [minSize]
 * @property {{width: number, height: number}} [defaultSize]
 * @property {{x: number, y: number}} [defaultPosition]
 */
export type AppSource = {
  id: string
  url: string
  title?: string
  isLoaded?: boolean
  error?: string
  minSize?: { width: number; height: number }
  defaultSize?: { width: number; height: number }
  defaultPosition?: { x: number; y: number }
}

/**
 * Message types that can be sent to the parent frame.
 * @enum {string}
 */
export enum AppMessageType {
  AppReady = 'prom.v1.appLoaded',     // App is loaded and ready to be exposed to user
  AuthTimeout = 'prom.v1.authTimout', // Auth token has expired, needs to be refreshed
  AuthError = 'prom.v1.authError',    // Auth was rejected, needs to handled
  OpenNew = 'prom.v1.openNew',        // Open a new app of the same type
}

/**
 * A model for an event that can be sent to the parent frame.
 * Using
 */
export interface AppMessage {
  type: AppMessageType
  message?: string
}
