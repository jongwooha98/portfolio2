import { HashLink as Link } from 'react-router-hash-link';

import '../sass/_nav.scss';

function Nav() {
  const handleOpen = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.add('show-menu');
  };
  const handleClose = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
  };

  function scrollActive() {
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(current => {
      const scrollY = window.pageYOffset;
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      let sectionId = current.getAttribute('id');
      let link = document.querySelector(
        '.nav__item a[href*=' + sectionId + ']',
      );

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link.classList.add('active-link');
      } else {
        link.classList.remove('active-link');
      }
    });
  }
  window.addEventListener('scroll', scrollActive);

  //
  // function darkModeToggle() {
  //   const element = document.body;
  //   element.classList.toggle('dark-mode');
  // }
  //
  return (
    <nav className="nav container">
      <Link to="/#" className="nav__logo">
        JongWoo
      </Link>

      <div className="nav__menu" id="nav-menu">
        <ul className="nav__list grid">
          <li className="nav__item">
            <Link
              to="/#home"
              className="nav__link active-link"
              onClick={handleClose}
            >
              <i className="uil uil-estate nav__icon" /> Home
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/#about" className="nav__link" onClick={handleClose}>
              <i className="uil uil-user nav__icon" /> About
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/#skills" className="nav__link" onClick={handleClose}>
              <i className="uil uil-file-alt nav__icon" /> Skills
            </Link>
          </li>
          <li className="nav__item">
            <Link
              to="/#qualification"
              className="nav__link"
              onClick={handleClose}
            >
              <i className="uil uil-briefcase-alt nav__icon" /> Qualification
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/#portfolio" className="nav__link" onClick={handleClose}>
              <i className="uil uil-scenery nav__icon" /> Portfolio
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/projects" className="nav__link" onClick={handleClose}>
              <i className="uil uil-scenery nav__icon" /> Projects
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/#contact" className="nav__link" onClick={handleClose}>
              <i className="uil uil-message nav__icon" /> Contact
            </Link>
          </li>
        </ul>
        <i
          className="uil uil-times nav__close"
          id="#nav-close"
          onClick={handleClose}
        />
      </div>
      <div className="nav__btns">
        {/* Dark mode */}
        <i className="uil uil-moon change-theme btn-toggle" id="theme-button" />

        <div className="nav__toggle" id="nav-toggle" onClick={handleOpen}>
          <i className="uil uil-apps" />
        </div>
      </div>
    </nav>
  );
}
export default Nav;
