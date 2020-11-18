import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Footer } from './layouts';
import { Container } from 'react-bootstrap';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:id" component={Profile} />
          </Switch>
        </Container>
        <Footer />
      </div>      
    </Router>    
  );
}
