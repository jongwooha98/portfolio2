import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Qualification from './components/Qualification';
import Portfolio from './components/Portfolio';
import Projects from './components/projects/Projects.js';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.scss';

// import { useEffect } from 'react';

function App() {
  function scrollHeader() {
    const nav = document.getElementById('header');
    this.scrollY >= 80
      ? nav.classList.add('scroll-header')
      : nav.classList.remove('scroll-header');
  }

  window.addEventListener('scroll', scrollHeader);

  function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 560
      ? scrollUp.classList.add('show-scroll')
      : scrollUp.classList.remove('show-scroll');
  }
  window.addEventListener('scroll', scrollUp);

  // const body = document.body;

  // const themeButton = document.getElementById('theme-button');
  // const darkTheme = 'dark-theme';
  // const iconTheme = 'uil-sun';

  // const selectedTheme = localStorage.getItem('selected-theme');
  // const selectedIcon = localStorage.getItem('selected-icon');

  // const getCurrntTheme = () =>
  //   body.classList.contains(darkTheme) ? 'dark' : 'light';
  // const getCurrentIcon = () =>
  //   themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

  // if (selectedTheme) {
  //   body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  //   themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](
  //     iconTheme
  //   );
  // }

  // themeButton.addEventListener('click', () => {
  //   document.body.classList.toggle(darkTheme);
  //   themeButton.classList.toggle(iconTheme);

  //   localStorage.setItem('selected-theme', getCurrntTheme());
  //   localStorage.setItem('selected-icon', getCurrentIcon());
  // });
  // console.log(selectedTheme);

  return (
    <>
      <Router>
        <header className="header" id="header">
          <Nav />
        </header>
        <Switch>
          <main className="main">
            <Route exact path="/" component={Home}>
              <Home />
              <About />
              <Skills />
              <Qualification />
              <Portfolio />
              <Contact />
            </Route>
            <Route exact path="/projects" component={Projects} />
          </main>
        </Switch>
        <Link to="#" className="scroll-up" id="scroll-up">
          <i className="uil uil-arrow-up scroll-up__icon" />
        </Link>
        <footer className="footer">
          <Footer />
        </footer>
      </Router>
    </>
  );
}

export default App;
