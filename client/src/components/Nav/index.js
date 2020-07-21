import React from "react";
import { Link } from 'react-router-dom'
import './style.css'
import Testimonials from "../Testimonials";
import HeroBanner from '../HeroBanner';
import Contact from '../Contact'

function Nav() {
  const renderHome = () => {
    return <HeroBanner />
  }

  const renderTest = () => {
    return <Testimonials />
  }

  const renderContact = () => {
    return <Contact />
  }
  return (
    <nav>
      <div className="nav-wrapper color lighten-4">
        <img src='https://i.imgur.com/637qk5Y.png' rel='logo' className='image' />

        <Link to="/" className='links' onClick={renderHome} >
          Home</Link>
        <Link className='links' to="/testimonials" onClick={renderTest}>
          Testimonial
  </Link>
        <Link className='links' to="/contact" onClick={renderContact}>
          Contact
  </Link>




      </div>
    </nav>
  );
}

export default Nav;
