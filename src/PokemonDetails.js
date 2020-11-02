import React, { Component } from "react";

export default class PokemonDetails extends Component {
  render() {
    const titleCase = (name) =>
      name.replace(/(^|-)(\w)/g, (input) => {
        return input.toUpperCase();
      });

    return (
      <div className="poke-details">
        <div className="pokedex-img">
          <div className="det-name">{titleCase(this.props.name)}</div>
          <img
            className="det-img"
            src={this.props.image}
            alt={this.props.name}
          />
          <div className="det-egggroups">Egg Groups:</div>
          <div className="det-eggone">{this.props.eggGroupOne}</div>
          {validateEgg(this.props.eggGroupTwo)}
          <div className="det-typeone">{this.props.typeOne}</div>
          {validateType(this.props.typeTwo)}
          <div className="det-abilities">Abilities:</div>
          <div className="det-abilityone">{this.props.abilityOne}</div>
          {validateAbilities(this.props.abilityTwo, this.props.abilityHidden)}
          <div className="det-attack">ATK {this.props.attack}</div>
          <div className="det-defense">DEF {this.props.defense}</div>
          <div className="det-specattack">
            SP ATK {this.props.special_attack}
          </div>
          <div className="det-specdefense">
            SP DEF {this.props.special_defense}
          </div>
          <div className="det-hp">HP {this.props.hp}</div>
          <div className="det-speed">SPD {this.props.speed}</div>
          <div className="det-height">{this.props.height} ft</div>
          <div className="det-weight">{this.props.weight} lbs</div>
          {validateGeneration(this.props.generation_id)}
          <div className="det-pokebasetxt">Pokebase: </div>
          <div className="det-pokebase">{titleCase(this.props.pokebase)}</div>
          <div>
            <a target="_blank" rel="noreferrer" href={this.props.pokedex}>
              <img
                className="det-pokedexlogo"
                src="https://webstockreview.net/images/pokeball-clipart-ball-pokemon-9.png"
                alt="pokeball"
              ></img>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const validateEgg = (props) => {
  if (props === "NA") {
    return (
      <>
        <div className="det-eggtwo"></div>
      </>
    );
  } else {
    return <div className="det-eggtwo">{props}</div>;
  }
};

const validateType = (props) => {
  if (props === "NA") {
    return (
      <>
        <div className="det-typetwo">---</div>
      </>
    );
  } else {
    return (
      <>
        <div className="det-typetwo">{props}</div>
      </>
    );
  }
};

const validateAbilities = (typetwo, typehidden) => {
  if (typetwo === "NA" && typehidden !== "NA") {
    return (
      <>
        <div className="det-abilitytwo">{typehidden}</div>
      </>
    );
  }
  if (typetwo === "NA" && typehidden === "NA") {
    return (
      <>
        <div></div>
      </>
    );
  }
  if (typetwo !== "NA" && typehidden !== "NA") {
    return (
      <>
        <div className="det-abilitytwo">{typetwo}</div>
        <div className="det-abilityhidden">{typehidden}</div>
      </>
    );
  }
};

const validateGeneration = (props) => {
  if (props === "NA") {
    return (
      <>
        <div className="det-generation genopacity">X</div>
      </>
    );
  } else {
    return (
      <>
        <div className="det-generation">{props}</div>
      </>
    );
  }
};
