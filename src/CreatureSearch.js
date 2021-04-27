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

    const { titleSearch, sortField } = this.state;

    return (

      <form>

        <input name="titleSearch"
          value={titleSearch}
          onChange={this.handleNameChange} />

        <select name="sortField"
          value={sortField}
          onChange={this.handleSearchChange}>

          <option value="">sort...</option>
          <option value="title">by title</option>
          <option value="horns">by number of horns</option>

        </select>


        <button>Search</button>

      </form>

    );
  }
}
