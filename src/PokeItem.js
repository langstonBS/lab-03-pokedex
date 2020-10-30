import React, { Component } from "react";

export default class PokeItem extends Component {
  render() {
    const TitleCase = this.props.name.replace(/(^|-)(\w)/g, (input) => {
      return input.toUpperCase();
    });
    const validate = (props) => {
      if (props === "NA") {
        return "n/a";
      } else {
        return props;
      }
    };
    return (
      <div className="poke-item">
        <div className="poke-name">{TitleCase}</div>
        <img
          className="poke-img"
          src={this.props.image}
          alt={this.props.name}
        />
        <div className="typeone-label">Primary Type: </div>
        <div className="poke-typeone">{this.props.typeOne}</div>
        <div className="typetwo-label">Secondary Type: </div>
        <div className="poke-typetwo">{validate(this.props.typeTwo)}</div>
        <div className="ability-label">Abilities: </div>
        <div className="abilityone">{this.props.abilityOne}</div>
        <div className="abilitytwo">{validate(this.props.abilityTwo)}</div>
        <div className="pokemon-shape">shape: {validate(this.props.shape)}</div>
      </div>
    );
  }
}
