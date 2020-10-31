import React, { Component } from "react";

export default class PokemonDetails extends Component {
  render() {
    const titleCase = this.props.name.replace(/(^|-)(\w)/g, (input) => {
      return input.toUpperCase();
    });

    return (
      <div className="poke-item">
        <div className="poke-name">{titleCase}</div>
        <img
          className="poke-img"
          src={this.props.image}
          alt={this.props.name}
        />
        <div className="typeone-label">Primary Type: </div>
        <div className="poke-typeone">{this.props.typeOne}</div>
        {this.props.typeTwo}
        <div className="ability-label">Abilities: </div>
        <div className="abilityone">{this.props.abilityOne}</div>
        {this.props.abilityTwo}
        <div className="pokemon-shape">shape: {this.props.shape}</div>
      </div>
    );
  }
}
