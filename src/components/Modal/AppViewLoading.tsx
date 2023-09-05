import timerIcon from '../../assets/icon-timer-color.svg'
import spinnerIcon from '../../assets/icon-spinner-color.svg'
import loadingIcon from '../../assets/icon-loading.svg'

export interface Props {
  type?: string
}

export default function AppViewLoading({type = 'timer'}: Props) {
  return (
    <div className="app-frame-splash loading-splash">
      <div className="app-icon">
        {type === 'timer' ? (
          <img src={timerIcon} alt="Timer icon"/>
        ) : (
          <img src={spinnerIcon} alt="Spinner icon"/>
        )}
      </div>
      <div className="loading-icon">
        <img src={loadingIcon} alt="Loading icon"/>
      </div>
    </div>
  )
}
