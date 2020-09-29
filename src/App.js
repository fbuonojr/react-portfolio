import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Wrapper>
          
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
