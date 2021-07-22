import '../sass/_about.scss';
import placeholder from '../assets/images/portrait.jpeg';

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle"></span>

      <div className="about__container container grid">
        <img src={placeholder} alt="" className="about__img" />
        <div className="about__data">
          <p className="about__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem.
          </p>
          <div className="about__info">
            <div>
              <span className="about__info-title">08+</span>
              <span className="about__info-name">
                Years <br /> experience
              </span>
            </div>
            <div>
              <span className="about__info-title">20+</span>
              <span className="about__info-name">
                Completed <br /> projects
              </span>
            </div>
            <div>
              <span className="about__info-title">03+</span>
              <span className="about__info-name">
                Companies <br /> worked
              </span>
            </div>
          </div>
          <div className="about__buttons">
            <a download="" href="" className="button button--flex">
              Download Resume
              <i className="uil uil-download-alt button__icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
