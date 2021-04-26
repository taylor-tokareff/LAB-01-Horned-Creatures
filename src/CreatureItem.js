import React, { Component } from 'react';

export default class CreatureItem extends Component {
  render() {

    const creature = this.props.creature;

    return (
      <div>
        <h1>{creature.title}</h1>
        <img src={creature.url} alt={creature.title} />
        <p>{creature.description}</p>
        <p>Number of horns: {creature.horns}</p>



      </div>
    );
  }
}
