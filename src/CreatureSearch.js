import React, { Component } from 'react';


export default class CreatureSearch extends Component {

  state = {
    titleSearch: '',
    sortField: ''
  }

  handleNameChange = ({ target }) => {
    this.setState({ titleSearch: target.value });
  }

  handleSearchChange = ({ target }) => {
    this.setState({ sortField: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }

  render() {



    return (

      <form>

        <input></input>
        <select input></select>


        <button>Search</button>

      </form>

    );
  }
}
