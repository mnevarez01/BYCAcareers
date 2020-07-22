import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Testimonials from './components/Testimonials';
import About from './components/About'
import HeroBanner from './components/HeroBanner';
import Contact from './components/Contact';
import API from "./utils/API";
// import './style.css'

function App() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    API.getTestimonies()
      .then((res) => setInfo(res.data))
      .catch((err) => console.log(err))
  }, [])


  return (
    <Router>
      <div className="background">
        <Nav />
        {/* <About /> */}
        <Switch>
          <Route exact path='/'>
            <HeroBanner />
            {/* <About /> */}
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/testimonials'>
            <Testimonials info={info} />
          </Route>

          <Route exact path='/contact'>
            <Contact />
          </Route>


        </Switch>
      </div>
    </Router>
  );
}

export default App;
