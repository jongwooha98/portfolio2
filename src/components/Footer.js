import '../sass/footer.scss';

function Footer() {
  return (
    <div className="footer__bg">
      <div className="footer__container container grid">
        <div>
          <h1 className="footer__title">JongWoo</h1>
          <span className="footer__subtitle">Frontend developer</span>
        </div>

        <ul className="footer__links">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer__socials">
          <a
            href="https://www.linkedin.com/in/jongwooha"
            target="_blank"
            rel="noreferrer"
            className="footer__social"
          >
            <i class="uil uil-linkedin-alt"></i>
          </a>
          <a
            href="https://github.com/jongwooha98"
            target="_blank"
            rel="noreferrer"
            className="footer__social"
          >
            <i class="uil uil-github-alt"></i>
          </a>
        </div>
      </div>
      <p className="footer__copyright">JongWoo Ha &#169; 2021</p>
    </div>
  );
}

export default Footer;