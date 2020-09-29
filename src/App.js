import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import AboutMe from './pages/AboutMe';
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Wrapper>
        <Route exact path="/react-portfolio" component={AboutMe} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
