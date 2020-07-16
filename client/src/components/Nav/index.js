import React from "react";
import './style.css'

function Nav() {
  return (
    <nav>
      <div className="nav-wrapper color lighten-4">
        <img src='https://i.imgur.com/637qk5Y.png' rel='logo' className='image' />
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="sass.html">Services</a></li>
          <li><a href="badges.html">Testimonials</a></li>
          <li><a href="collapsible.html">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
