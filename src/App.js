import { Component } from 'react';
import './App.css';
import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import CreatureList from './CreatureList.js';
import images from './Creatures.js';
import CreatureSearch from './CreatureSearch.js';

class App extends Component {

  render() {
    return (
      <div className="App">

        <Header />

        <main>
          <CreatureSearch />
          <CreatureList creatures={images} />
        </main>

        <Footer />


      </div>
    );
  }

}

export default App;
