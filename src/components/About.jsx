const skills = [
  'JavaScript',
  'React',
  'CSS / Sass',
  'TypeScript',
  'Node.js',
  'Figma',
  'Git',
  'Responsive Design',
]

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="section__header">
        <span className="section__label">About</span>
        <h2 className="section__title">Building things for the web</h2>
      </div>

      <div className="about__grid">
        <div className="about__text">
          <p>
            I&apos;m a frontend developer with a passion for turning ideas into
            polished digital products. I focus on performance, accessibility, and
            pixel-perfect UI across every screen size.
          </p>
          <p>
            When I&apos;m not coding, you&apos;ll find me exploring new design
            trends, contributing to open source, or hiking with my camera.
          </p>
        </div>

        <div className="about__skills">
          <h3>Skills &amp; Tools</h3>
          <ul className="skills-list">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
