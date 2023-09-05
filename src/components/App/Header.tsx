/* eslint-disable react/button-has-type */

import {type ChangeEvent} from "react"

export type Props = {
  onAddTimer: () => void
  onAddSpinner: () => void
  onDebug: (value: DebugValue) => void
}

export enum DebugValue {
  SpinnerAppReady = 'Spinner: AppReady',
  SpinnerAuthTimeout = 'Spinner: AuthTimeout',
  SpinnerAuthError = 'Spinner: AuthError',
  TimerAppReady = 'Timer: AppReady',
  TimerAuthTimeout = 'Timer: AuthTimeout',
  TimerAuthError = 'Timer: AuthError',
  SpinnerOpenNew = 'Spinner: OpenNew',
  TimerOpenNew = 'Timer: OpenNew',
  CloseAll = 'Close All'
}

export default function Header({onAddTimer, onAddSpinner, onDebug}: Props) {
  const handleDebug = (e: ChangeEvent<HTMLSelectElement>) => {
    onDebug(e.target.value as DebugValue)
  }

  return (
    <header>
      <div className="header">
        <button onClick={onAddTimer}>Add Timer</button>
        <button onClick={onAddSpinner}>Add Spinner</button>
        <select onChange={handleDebug} value={""} style={{float: 'right'}}>
          <option value="" disabled>Debug Options</option>
          <option value={DebugValue.SpinnerAppReady}>{DebugValue.SpinnerAppReady}</option>
          <option value={DebugValue.SpinnerAuthTimeout}>{DebugValue.SpinnerAuthTimeout}</option>
          <option value={DebugValue.SpinnerAuthError}>{DebugValue.SpinnerAuthError}</option>
          <option value={DebugValue.SpinnerOpenNew}>{DebugValue.SpinnerOpenNew}</option>
          <option value={DebugValue.TimerAppReady}>{DebugValue.TimerAppReady}</option>
          <option value={DebugValue.TimerAuthTimeout}>{DebugValue.TimerAuthTimeout}</option>
          <option value={DebugValue.TimerAuthError}>{DebugValue.TimerAuthError}</option>
          <option value={DebugValue.TimerOpenNew}>{DebugValue.TimerOpenNew}</option>
          <option value={DebugValue.CloseAll}>{DebugValue.CloseAll}</option>
        </select>
      </div>
    </header>
  )
}
