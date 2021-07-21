import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Qualification from './components/Qualification';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.scss';

function App() {
  return (
    <>
      <header className="header" id="header">
        <Nav />
      </header>
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Portfolio />
        <Contact />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
