import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Testimonials from './components/Testimonials'
import HeroBanner from './components/HeroBanner'
import API from "./utils/API";
import './style.css'

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
        <HeroBanner />
        {/* <Testimonials author={author} testimony={testimony} /> */}
        {/* <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch> */}
      </div>
    </Router>
  );
}

export default App;
