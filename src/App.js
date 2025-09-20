import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import React, { useState, useReducer } from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Hero from './Hero';
import Highlight from './Highlight';
import Testimonial from './Testimonial';
import BookingPage from './Booking';
import ConfirmedBooking from './confirmedBooking';
import About from './About';

function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

function timesReducer(state, action) {
  switch (action.type) {
    case "update_time":
      return fetchAPI(new Date(action.date));
    default:
      return state;
  }
}

function App() {
  const [formData, setFormData] = useState({
    date: "",
    time: "17:00",
    guests: 1,
    occasion: "Birthday",
  });

  const [availableTimes, updateTimes] = useReducer(timesReducer, [], initializeTimes);

  const navigate = useNavigate();

  function handleChange(e) {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: id === "guests" ? Number(value) : value,
    }));

    if (id === "date") {
      updateTimes({ type: "update_time", date: value });
    }
  }

  function submitForm(e) {
    e.preventDefault();
    const success = submitAPI(formData);
    if (success) {
      console.log("Successfully submitted.");
      navigate("/confirmedBooking");
    } else {
      console.error("Form submission failed.");
    }
  }

  return (
    <section className="container">
      <header className="header">
        <Header />
        <nav className="nav" aria-label="Main navigation">
          <Nav />
        </nav>
      </header>

      <main className="main" aria-label="Main content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Highlight />
                <Testimonial />
                <About />
              </>
            }
          />
          <Route path="/hero" element={<Hero />} />
          <Route path="/highlight" element={<Highlight />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/reservations"
            element={
              <BookingPage
                formData={formData}
                availableTimes={availableTimes}
                handleChange={handleChange}
                handleSubmit={submitForm}
                updateTimes={updateTimes}
              />
            }
          />
          <Route path="/confirmedBooking" element={<ConfirmedBooking />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>

      <footer className="footer" aria-label="Footer">
        <Footer />
      </footer>
    </section>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
