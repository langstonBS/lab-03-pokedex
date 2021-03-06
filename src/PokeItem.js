import React, { Component } from "react";

export default class PokeItem extends Component {
  render() {
    const titleCase = this.props.name.replace(/(^|-)(\w)/g, (input) => {
      return input.toUpperCase();
    });
    const cursor = { cursor: "pointer" };

    return (
      <div className="poke-item" style={cursor}>
        <div className="poke-name">{titleCase}</div>
        <img
          className="poke-img"
          src={this.props.image}
          alt={this.props.name}
        />
        <div className="typeone-label">Primary Type: </div>
        <div className="poke-typeone">{this.props.typeOne}</div>
        {validateType(this.props.typeTwo)}
        <div className="ability-label">Abilities: </div>
        <div className="abilityone">{this.props.abilityOne}</div>
        {validateAbility(this.props.abilityTwo)}
        <div className="pokemon-shape">shape: {this.props.shape}</div>
      </div>
    );
  }
}

const validateType = (props) => {
  if (props === "NA") {
    return (
      <>
        <div className="typetwo-label"></div>
        <div className="poke-typetwo"></div>
      </>
    );
  } else {
    return (
      <>
        <div className="typetwo-label">Secondary Type: </div>
        <div className="poke-typetwo">{props}</div>
      </>
    );
  }
};

const validateAbility = (props) => {
  if (props === "NA") {
    return (
      <>
        <div className="abilitytwo"></div>
      </>
    );
  } else {
    return (
      <>
        <div className="abilitytwo">{props}</div>
      </>
    );
  }
};
