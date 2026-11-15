export function HudOverlay({ name, coords }) {
  if (!name && !coords) return null

  return (
    <div className="hud">
      <div>
        <span className="dot" aria-hidden="true" />
        {name}
      </div>
      {coords && <small>{coords}</small>}
    </div>
  )
}
