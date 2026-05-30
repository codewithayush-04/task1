const projects = [
  {
    title: 'TaskFlow',
    description:
      'A collaborative task manager with drag-and-drop boards, real-time sync, and team dashboards.',
    tags: ['React', 'Firebase', 'CSS Grid'],
    link: '#',
  },
  {
    title: 'WeatherLens',
    description:
      'Minimal weather app with location search, 7-day forecasts, and animated condition icons.',
    tags: ['JavaScript', 'OpenWeather API'],
    link: '#',
  },
  {
    title: 'DevBlog',
    description:
      'Static blog generator with markdown support, syntax highlighting, and RSS feeds.',
    tags: ['Node.js', 'Eleventy', 'Markdown'],
    link: '#',
  },
  {
    title: 'Palette Studio',
    description:
      'Color palette tool for designers — extract hues from images and export to CSS variables.',
    tags: ['React', 'Canvas API'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="section__header">
        <span className="section__label">Projects</span>
        <h2 className="section__title">Selected work</h2>
      </div>

      <div className="projects__grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-card__image" aria-hidden="true">
              <span>{project.title.charAt(0)}</span>
            </div>
            <div className="project-card__body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="project-card__tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <a href={project.link} className="project-card__link">
                View project →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
