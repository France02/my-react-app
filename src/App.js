import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import About from './components/About';
import Menu from './pages/Menu'; // Importa dalla cartella pages
import Reservations from './pages/Reservations';
import OrderOnline from './pages/OrderOnline';
import Login from './pages/Login';
import ConfirmedBooking from './pages/ConfirmedBooking';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
});

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/confirmed" element={<ConfirmedBooking />} />
          <Route path="/orderonline" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;