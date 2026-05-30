export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="section__header">
        <span className="section__label">Contact</span>
        <h2 className="section__title">Let&apos;s work together</h2>
      </div>

      <div className="contact__wrapper">
        <p className="contact__intro">
          Have a project in mind or just want to say hello? Fill out the form
          below and I&apos;ll get back to you within 48 hours.
        </p>

        <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" required />
          </div>

          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="you@example.com" required />
          </div>

          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell me about your project..."
              required
            />
          </div>

          <button type="submit" className="btn btn--primary btn--full">
            Send Message
          </button>
        </form>

        <div className="contact__links">
          <a href="mailto:alex@example.com">ayush@example.com</a>
          <a href="https://github.com/codewithayush-04" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ayush-gupta-363a45325" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
