import '../sass/nav.scss';

function Nav() {
  const handleOpen = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.add('show-menu');
  };
  const handleClose = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
  };

  return (
    <nav className="nav container">
      <a href="#" className="nav__logo">
        Jong
      </a>

      <div className="nav__menu" id="nav-menu">
        <ul className="nav__list grid">
          <li className="nav__item">
            <a href="#home" className="nav__link" onClick={handleClose}>
              <i className="uil uil-estate nav__icon" /> Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link" onClick={handleClose}>
              <i className="uil uil-user nav__icon" /> About
            </a>
          </li>
          <li className="nav__item">
            <a href="#skills" className="nav__link" onClick={handleClose}>
              <i className="uil uil-file-alt nav__icon" /> Skills
            </a>
          </li>
          <li className="nav__item">
            <a href="#services" className="nav__link" onClick={handleClose}>
              <i className="uil uil-briefcase-alt nav__icon" /> Services
            </a>
          </li>
          <li className="nav__item">
            <a href="#projects" className="nav__link" onClick={handleClose}>
              <i className="uil uil-scenery nav__icon" /> Projects
            </a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link" onClick={handleClose}>
              <i className="uil uil-message nav__icon" /> Contact
            </a>
          </li>
        </ul>
        <i
          className="uil uil-times nav__close"
          id="#nav-close"
          onClick={handleClose}
        />
      </div>
      <div className="nav__btns">
        <div className="nav__toggle" id="nav-toggle" onClick={handleOpen}>
          <i className="uil uil-apps" />
        </div>
      </div>
    </nav>
  );
}
export default Nav;
