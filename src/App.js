import { Component } from 'react';
import logo from './react-logo.svg';
import './App.css';
import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

class App extends Component {

  render() {
    return (
      <div className="App">

        <Header />

        <main></main>

        <Footer />


      </div>
    );
  }

}

export default App;
