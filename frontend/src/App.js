import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Gallery from './components/Pages/Gallery';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/gallery' element={<Gallery/>} />
      <Route path='/services' element={<Services/>} />

    </Routes>
    <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
