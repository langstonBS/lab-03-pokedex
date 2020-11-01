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
          <div className="det-eggtwo">{this.props.eggGroupTwo}</div>
          {/* egg group two can be NA */}
          <div className="det-typeone">{this.props.typeOne}</div>
          <div className="det-typetwo">{this.props.typeTwo}</div>
          {/* type two can be NA */}
          <div className="det-abilities">Abilities:</div>
          <div className="det-abilityone">{this.props.abilityOne}</div>
          <div className="det-abilitytwo">{this.props.abilityTwo}</div>
          {/* ability two can be NA */}
          <div className="det-abilityhidden">{this.props.abilityHidden}</div>
          {/* ability hidden can be NA */}
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
          <div className="det-generation">{this.props.generation_id}</div>
          <div className="det-baseexp">
            BASE EXP {this.props.base_experience}
          </div>
          <div className="det-pokebasetxt">Pokebase: </div>
          <div className="det-pokebase">{titleCase(this.props.pokebase)}</div>
          {/* <div className="det-pokedex">{this.props.pokedex}</div> */}
        </div>
      </div>
    );
  }
}

// const validateType = (props) => {
//   if (props === "NA") {
//     return (
//       <>
//         <div className="typetwo-label"></div>
//         <div className="poke-typetwo"></div>
//       </>
//     );
//   } else {
//     return (
//       <>
//         <div className="typetwo-label">Secondary Type: </div>
//         <div className="poke-typetwo">{props}</div>
//       </>
//     );
//   }
// };

// const validateAbility = (props) => {
//   if (props === "NA") {
//     return (
//       <>
//         <div className="abilitytwo"></div>
//       </>
//     );
//   } else {
//     return (
//       <>
//         <div className="abilitytwo">{props}</div>
//       </>
//     );
//   }
// };
