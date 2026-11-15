export function ChapterCard({ chapter, index, isActive, onOpenPhoto }) {
  const {
    id = `chapter-${index}`,
    name = 'Unnamed Mission',
    place,
    status,
    image,
    caption,
    text,
    facts = [],
    timeline = [],
    coords,
    sources = [],
  } = chapter

  return (
    <article
      id={`chapter-${index}`}
      data-i={index}
      className={`chapter${isActive ? ' active' : ''}`}
    >
      {place && <p className="meta">{place}</p>}
      <h2>{name}</h2>
      {status && <p className="status">{status}</p>}

      {image && (
        <figure onClick={() => onOpenPhoto(chapter)} tabIndex={0} role="button" aria-label={`View full image for ${name}`}>
          <img src={image} alt={name} loading="lazy" />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      )}

      {text && <p>{text}</p>}

      {facts.length > 0 && (
        <>
          <h3>Mission facts</h3>
          <dl>
            {facts.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </>
      )}

      {timeline.length > 0 && (
        <>
          <h3>Timeline</h3>
          <ol className="tl">
            {timeline.map(([d, t]) => (
              <li key={d}>
                <b>{d}</b>
                <span>{t}</span>
              </li>
            ))}
          </ol>
        </>
      )}

      {coords && (
        <>
          <h3>Landing site</h3>
          <p className="coords">{coords}</p>
        </>
      )}

      {sources.length > 0 && (
        <>
          <h3>Sources</h3>
          <ul className="src">
            {sources.map(([n, u]) => (
              <li key={u}>
                <a href={u} target="_blank" rel="noreferrer">
                  {n}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </article>
  )
}
