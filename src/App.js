import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Routes>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
