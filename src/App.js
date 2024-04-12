import './App.css';
import About from './components/about/About';
import Contacts from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
