export default function Home() {
  return (
    <section id="home" className="home">
      <div className="home__content">
        <p className="home__eyebrow">Frontend Developer</p>
        <h1 className="home__title">
          Hi, I&apos;m <span className="home__name">Alex Morgan</span>
        </h1>
        <p className="home__subtitle">
          I craft responsive, accessible web experiences with clean code and
          thoughtful design.
        </p>
        <div className="home__actions">
          <a href="#projects" className="btn btn--primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn--secondary">
            Get in Touch
          </a>
        </div>
      </div>

      <div className="home__visual" aria-hidden="true">
        <div className="home__avatar">
          <span>AM</span>
        </div>
        <div className="home__orbit home__orbit--1" />
        <div className="home__orbit home__orbit--2" />
      </div>
    </section>
  )
}
