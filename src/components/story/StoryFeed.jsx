import { Intro } from './Intro'
import { ChapterCard } from './ChapterCard'
import { Footer } from '../layout/Footer'

export function StoryFeed({ chapters = [], activeIndex = 0, onOpenPhoto }) {
  return (
    <div className="story">
      <Intro />
      {chapters.map((chapter, i) => (
        <ChapterCard
          key={chapter.id || i}
          chapter={chapter}
          index={i}
          isActive={i === activeIndex}
          onOpenPhoto={onOpenPhoto}
        />
      ))}
      <Footer />
    </div>
  )
}
