import '../sass/_about.scss';
import placeholder from '../assets/images/portrait.jpeg';

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">Hello, World!</span>

      <div className="about__container container grid">
        <img src={placeholder} alt="" className="about__img" />
        <div className="about__data">
          <p className="about__description">
            JongWoo Ha is a self-taught frontend developer. He holds Bachelor of
            Science in Electrical Engineering from the Pennsylvania State
            University.
            <br />
            <br />
            His passion and love in web development started from wanting to
            present his own website instead of a typical resume when applying
            for jobs. Since 2020, he taught himself including, but not limited
            to, JavaScript, React, and SASS. Despite receiving job offers in
            electrical engineering after graduating, he decided to pursue a
            career as a Frontend Developer. He chose to follow what keeps him
            interested and focused while doing it. And most importantly, he is
            having fun when coding!
            <br />
            <br />
            He has leadership experience in both leading the team of less than
            10 members as well as developing a positive and inclusive community
            of more than 300 people. His time management and organizational
            skills had excelled. And intercultural and interpersonal
            communication skills stood out throughout these experience.
          </p>
          <div className="about__info">
            <div>
              <span className="about__info-title">06+</span>
              <span className="about__info-name">
                Frontend <br /> skills
              </span>
            </div>
            <div>
              <span className="about__info-title">10+</span>
              <span className="about__info-name">
                Projects <br /> completed
              </span>
            </div>
            <div>
              <span className="about__info-title">02+</span>
              <span className="about__info-name">
                Leadership <br /> experience
              </span>
            </div>
          </div>
          {/* <div className="about__buttons">
            <a download="" href="" className="button button--flex">
              Download Resume
              <i className="uil uil-download-alt button__icon" />
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default About;
