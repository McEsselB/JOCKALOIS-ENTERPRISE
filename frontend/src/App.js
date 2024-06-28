import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import './sign-in'
import SignInSide from './sign-in';
import header from './header';
import SignUp from './signup';


function App() {
  return (
    <Router>
    <div className="App">
      <header />
      <SignUp />
      <br></br>
      <SignInSide />      
    </div>
    </Router>
  );
}

export default App;
