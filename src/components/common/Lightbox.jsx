import { useEffect } from 'react'

export function Lightbox({ photo, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!photo) return null

  return (
    <div
      className="lightbox"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Photo of ${photo.name || 'mission'}`}
    >
      <div className="lightbox-content">
        <img src={photo.image} alt={photo.name || 'Mission image'} />
        {photo.caption && <p>{photo.caption}</p>}
        <span className="lightbox-close-hint">Press Esc or click anywhere to close</span>
      </div>
    </div>
  )
}
