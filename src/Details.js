import React, { Component } from "react";
import request from "superagent";
import PokemonDetails from "./PokemonDetails.js";

export default class Details extends Component {
  state = {
    loading: true,
    pokemon: [],
  };

  componentDidMount = async () => {
    const res = await request.get(
      `https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokename}`
    );
    this.setState({
      pokemon: res.body.results[0],
      loading: false,
    });
    console.log("this.state.pokemon: ", this.state.pokemon);
  };

  render() {
    console.log("this.state: ", this.state);

    return (
      <>
        <div>{this.props.match.params.pokename} page </div>
        {this.state.loading ? (
          <div className="loading">
            <img
              className="loading-gif"
              src="https://icon-library.com/images/loading-icon-transparent-background/loading-icon-transparent-background-12.jpg"
              alt="loading"
            />
          </div>
        ) : (
          <PokemonDetails
            name={this.state.pokemon.pokemon}
            image={this.state.pokemon.url_image}
            typeOne={this.state.pokemon.type_1}
            typeTwo={this.state.pokemon.type_2}
            abilityOne={this.state.pokemon.ability_1}
            abilityTwo={this.state.pokemon.ability_2}
            shape={this.state.pokemon.shape}
          />
        )}
      </>
    );
  }
}
