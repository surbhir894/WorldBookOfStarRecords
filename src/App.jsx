import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar/Navbar';
import Awards from './components/awards/Awards';
import Carousel from './components/carousel/Carousel';
import ContactForm from './components/contact/ContactForm';
import FAQ from './components/faq/FAQ';
import Footer from './components/footer/Footer';
import Register from './components/registeration/Register';
import Testimonials from "./components/testimonials/Testimonials";
import About from "./components/about/About";
import Event from "./components/event/Event";




function App() {
  return (
    <Router>
      <>
        <Navbar />
      
        <Routes>
          <Route path="/" element={<Carousel />}/>
          <Route path="/home" element={<Carousel />}/>
          <Route path="/awards" element={<Awards />} />
          <Route path="/records" element={<h1>Records Page</h1>} />
          <Route path="/media" element={<h1>Media Page</h1>} />
          <Route path="/gallery" element={<h1>Gallery Page</h1>} />
          <Route path="/events" element={<Event/>} />
          <Route path="/testimonials" element={<Testimonials/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
