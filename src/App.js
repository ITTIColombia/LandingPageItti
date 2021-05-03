import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from "react-router-dom";
import Banner from './components/Banner';
import Filosofia from './components/Filosofia';
import RegalosLanding from './components/RegalosLanding';
import ProductosLanding from './components/ProductosLanding';
import Marcas from './components/MarcasLanding';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import ReactGA from "react-ga";
import {useEffect} from "react";


function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    return () => {
      ReactGA.initialize('UA-196167690-1');
      ReactGA.pageview('/');
    };
  }, []);


  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Banner/>
        <Filosofia/>
        <RegalosLanding/>
        <ProductosLanding/>
        <Marcas/>
        <Contacto/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
