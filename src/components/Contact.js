import '../sass/_contact.scss';

function Contact() {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Getting in touch is easy!</span>

      <div className="contact__container container grid">
        <div>
          <div className="contact__information">
            <i className="uil uil-envelope contact__icon" />
            <div>
              <h3 className="contact__title">Email</h3>
              <span className="contact__subtitle">
                <a
                  href="mailto: jongwoo.ha98@gmail.com"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  jongwoo.ha98@gmail.com
                </a>
              </span>
            </div>
          </div>
          <div className="contact__information">
            <i className="uil uil-linkedin contact__icon" />
            <div>
              <h3 className="contact__title">LinkedIn</h3>
              <span className="contact__subtitle">
                <a
                  href="https://www.linkedin.com/in/jongwooha"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  www.linkedin.com/in/jongwooha
                </a>
              </span>
            </div>
          </div>
        </div>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="contact__form grid"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label htmlFor="name" className="contact__label">
                Name
              </label>
              <input
                name="name"
                type="text"
                id="name"
                className="contact__input"
                required
              />
            </div>
            <div className="contact__content">
              <label htmlFor="email" className="contact__label">
                Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                className="contact__input"
                required
              />
            </div>
          </div>
          <div className="contact__content">
            <label htmlFor="subject" className="contact__label">
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              className="contact__input"
              required
            ></input>
          </div>
          <div className="contact__content">
            <label htmlFor="message" className="contact__label">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="0"
              rows="7"
              className="contact__input"
              required
            ></textarea>
          </div>
          <div>
            <button type="submit" className="button button--flex submit-button">
              Send Message <i className="uil uil-message button__icon" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
