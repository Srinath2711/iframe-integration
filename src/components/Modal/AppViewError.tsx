export interface Props {
  error?: string
}

export default function AppViewError({error}: Props) {
  return (
    <div className="app-frame-splash error-splash">
      <div className="error-text">
        {error}
      </div>
    </div>
  )
}
