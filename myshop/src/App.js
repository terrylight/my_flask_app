import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';  // Make sure this is correct
import Shop from './components/Shop';  // The shop page for your store
import About from './components/About';  // About Us page
import Contact from './components/Contact';  // Contact page

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} /> {/* Home page route */}
        <Route path="/shop" component={Shop} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
};

export default App;
