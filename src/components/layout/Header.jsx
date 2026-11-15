export function Header({ chapters = [], activeIndex = 0, onSelectChapter }) {
  return (
    <header className="bar">
      <strong>Abandoned, But Never Forgotten</strong>
      <nav aria-label="Missions navigation">
        {chapters.map((x, i) => {
          const shortName = x.name ? x.name.split(' ')[0] : `Mission ${i + 1}`
          return (
            <button
              key={x.id || i}
              type="button"
              className={i === activeIndex ? 'on' : ''}
              onClick={() => onSelectChapter(i)}
            >
              {shortName}
            </button>
          )
        })}
      </nav>
      <span className="tag">NASA Space Apps 2026</span>
    </header>
  )
}
