import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';

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
      </main>
    </>
  );
}

export default App;
