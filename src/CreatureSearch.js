import React, { Component } from 'react';


export default class CreatureSearch extends Component {

  state = {
    userSearch: '',
    sortField: ''
  }

  handleNameChange = ({ target }) => {
    this.setState({ userSearch: target.value });
  }

  handleSearchChange = ({ target }) => {
    this.setState({ sortField: target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('i am here');
    this.props.onSearch(this.state);
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState !== this.state) {
      this.props.onSearch(this.state);
    }

  }

  render() {

    const { userSearch, sortField } = this.state;
    console.log(userSearch, sortField);
    return (

      <form onSubmit={this.handleSubmit}>

        <input name="userSearch"
          value={userSearch}
          onChange={this.handleNameChange} />

        <select name="sortField"
          value={sortField}
          onChange={this.handleSearchChange}>

          <option value="">sort...</option>
          <option value="horns">by number of horns</option>
          <option value="title">by title</option>


        </select>


        <button>Search</button>

      </form>

    );
  }
}
