import { Component } from 'react';
import './App.css';
import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import CreatureList from './CreatureList.js';
import creatures from './Creatures.js';
import CreatureSearch from './CreatureSearch.js';

class App extends Component {

  state = {
    creaturesState: creatures
  }

  handleSearch = ({ userSearch, sortField }) => {
    const titleRegex = new RegExp(userSearch, 'i');

    const searchedData = creatures
      .filter(item => {
        return !userSearch || item.title.match(titleRegex);
      })
      .sort((a, b) => {
        if (a[sortField] < b[sortField]) return -1;
        if (a[sortField] > b[sortField]) return 1;
        return 0;
      });
    // console.log(searchedData);
    this.setState({ creaturesState: searchedData });
  }

  render() {
    const { creaturesState } = this.state;
    console.log(creaturesState);
    return (
      <div className="App" >

        <Header />

        <main>
          <CreatureSearch onSearch={this.handleSearch} />
          <CreatureList creatures={creaturesState} />
        </main>

        <Footer />


      </div >
    );
  }

}

export default App;
