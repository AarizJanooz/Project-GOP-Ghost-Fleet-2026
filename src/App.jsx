import { useEffect, useState, useCallback } from 'react'
import { Header } from './components/layout/Header'
import { StoryFeed } from './components/story/StoryFeed'
import { SceneCanvas } from './components/scene/SceneCanvas'
import { Lightbox } from './components/common/Lightbox'
import { CHAPTERS } from './data'

export default function App() {
  const [active, setActive] = useState(0)
  const [photo, setPhoto] = useState(null)

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.dataset.i !== undefined) {
            setActive(Number(entry.target.dataset.i))
          }
        })
      },
      { rootMargin: '-35% 0px -45% 0px' }
    )

    const elements = document.querySelectorAll('[data-i]')
    elements.forEach((el) => io.observe(el))

    return () => io.disconnect()
  }, [])

  const handleSelectChapter = useCallback((index) => {
    setActive(index)
    const target = document.querySelector(`[data-i="${index}"]`)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  const currentChapter = CHAPTERS[active] || CHAPTERS[0] || {}

  return (
    <>
      <Header
        chapters={CHAPTERS}
        activeIndex={active}
        onSelectChapter={handleSelectChapter}
      />
      <main className="layout">
        <StoryFeed
          chapters={CHAPTERS}
          activeIndex={active}
          onOpenPhoto={setPhoto}
        />
        <SceneCanvas chapter={currentChapter} />
      </main>
      <Lightbox photo={photo} onClose={() => setPhoto(null)} />
    </>
  )
}
