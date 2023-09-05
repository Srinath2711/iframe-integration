import { useMemo, useState } from 'react'

import { type AppSource } from './types'

const TIMER_TYPE = 'timer'
const SPINNER_TYPE = 'spinner'

/**
 * The base url for the timer and spinner apps.
 * check the .env file for the actual values.
 */
const baseTimerUrl: string = import.meta.env.VITE_TIMER_URL
const baseSpinnerUrl: string = import.meta.env.VITE_SPINNER_URL

/**
 * Adds a new app source to the list of sources.
 * The new source will have a unique id, a type, a url, and default sizes and positions.
 * The url will be based on the type and the total number of sources of that type.
 *
 * @param currentSources
 * @param newType
 */
function addSource(currentSources: AppSource[], newType: string): AppSource[] {
  const total = currentSources.length
  const offset = total * 40

  const filteredSources = currentSources.filter((s) => s.title === newType)
  const totalOfType = filteredSources.length
  const newTypeId = `${newType}-${totalOfType + 1}`

  const newBaseUrl = newType === 'timer' ? baseTimerUrl : baseSpinnerUrl
  const newUrl = `${newBaseUrl}${totalOfType + 1}`

  const newSource: AppSource = {
    id: newTypeId,
    title: newType,
    url: newUrl,
    isLoaded: false,
    error: '',
    minSize: {width: 300, height: 300},
    defaultSize: {width: 400, height: 525},
    defaultPosition: {x: offset, y: offset}
  }

  return [...currentSources, newSource]
}

/**
 * Removes an app source from the list of sources.
 *
 * @param currentSources
 * @param id
 */
function removeSource(currentSources: AppSource[], id: string): AppSource[] {
  return currentSources.filter((s) => s.id !== id)
}

/**
 * Sets the loaded flag of an app source to true.
 *
 * @param currentSources
 * @param id
 */
function setAppLoaded(currentSources: AppSource[], id: string): AppSource[] {
  return currentSources.map((s) => {
    if (s.id === id) {
      return {...s, isLoaded: true, error: ''}
    }
    return s
  })
}

/**
 * Sets the error of an app source.
 * The error will be displayed in the app frame.
 *
 * @param currentSources
 * @param id
 * @param error
 */
function setAppError(currentSources: AppSource[], id: string, error?: string): AppSource[] {
  return currentSources.map((s) => {
    if (s.id === id) {
      return {...s, error: error || 'Unknown error' }
    }
    return s
  })
}

/**
 * Custom hook to manage a list of app sources.
 * Created to be used in the App component for demo purposes.
 *
 * @returns {Object} An object with the list of sources and actions to manage them.
 */
export default function useSources() {
  const [sources, setSources] = useState<AppSource[]>([])
  const timerDisabled = useMemo(() => {
    return sources.filter((s) => s.title === TIMER_TYPE).length >= 4
  }, [sources])

  const spinnerDisabled = useMemo(() => {
    return sources.filter((s) => s.title === SPINNER_TYPE).length >= 4
  }, [sources])

  const actions = useMemo(() => {
    return {
      addTimerApp: () => setSources(addSource(sources, TIMER_TYPE)),
      addSpinnerApp: () => setSources(addSource(sources, SPINNER_TYPE)),
      setAppLoaded: (id: string) => setSources(setAppLoaded(sources, id)),
      setAppError: (id: string, error?: string) => setSources(setAppError(sources, id, error)),
      removeApp: (id: string) => setSources(removeSource(sources, id)),
      removeAllApps: () => setSources([])
    }
  }, [sources])

  return { sources, timerDisabled, spinnerDisabled, actions }
}
