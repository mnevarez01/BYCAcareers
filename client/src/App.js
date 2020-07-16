import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import HeroBanner from './components/HeroBanner'
import './style.css'

function App() {
  return (
    <Router>
      <div className="background">
        <Nav />
        <HeroBanner />
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
