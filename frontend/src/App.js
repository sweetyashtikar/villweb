import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Gallery from './components/Pages/Gallery';
import Services from './components/Pages/Services';
import Footer from './components/Footer/Footer'
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
