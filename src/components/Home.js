import '../sass/_home.scss';
import { HashLink as Link } from 'react-router-hash-link';

import portrait from '../assets/images/portrait.png';
function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <a
              href="https://www.linkedin.com/in/jongwooha"
              target="_blank"
              rel="noreferrer"
              className="home__social-icon"
            >
              <i className="uil uil-linkedin-alt" />
            </a>
            <a
              href="https://github.com/jongwooha98"
              target="_blank"
              rel="noreferrer"
              className="home__social-icon"
            >
              <i className="uil uil-github-alt" />
            </a>
          </div>
          <div className="home__img">
            <svg
              className="home__blob"
              viewBox="40 20 150 150"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <mask id="mask0" mask-type="alpha">
                <path
                  d="M64.2,-36.4C73.4,-21.1,64.3,5.4,50.5,23C36.8,40.7,18.4,49.6,3.7,47.5C-11,45.4,-22,32.2,-29.5,18.2C-36.9,4.1,-40.8,-10.8,-35.3,-23.9C-29.8,-37,-14.9,-48.2,6.3,-51.9C27.5,-55.5,55,-51.6,64.2,-36.4Z"
                  transform="translate(100 100)"
                />
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M64.2,-36.4C73.4,-21.1,64.3,5.4,50.5,23C36.8,40.7,18.4,49.6,3.7,47.5C-11,45.4,-22,32.2,-29.5,18.2C-36.9,4.1,-40.8,-10.8,-35.3,-23.9C-29.8,-37,-14.9,-48.2,6.3,-51.9C27.5,-55.5,55,-51.6,64.2,-36.4Z"
                  transform="translate(100 100)"
                />
                <image
                  className="home__blob-img"
                  x="20"
                  y="-30"
                  xlinkHref={portrait}
                />
              </g>
            </svg>
          </div>
          <div className="home__data">
            <h1 className="home__title">JongWoo Ha</h1>
            <h3 className="home__subtitle">Frontend Developer</h3>
            <p className="home__description">
              A self-taught frontend developer who constantly seeks for
              improvements to produce quality work.
            </p>
            <div className="home__links">
              <Link to="/#contact" className="button button--flex">
                Contact Me <i className="uil uil-message button__icon" />
              </Link>
              <Link to="/projects" className="button button--flex">
                Explore Projects
                <i className="uil uil-plane-fly button__icon" />
              </Link>
            </div>
          </div>
        </div>
        <div className="home__scroll">
          <Link to="/#about" className="home__scroll-button button--flex">
            <i className="uil uil-angle-double-down home__scroll-arrow" />
            <span className="home__scroll-name">scroll down</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Home;
