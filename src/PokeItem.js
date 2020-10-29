import React, { Component } from 'react';

export default class PokeItem extends Component {
    render() {
        const TitleCase = this.props.name.replace( /(^|-)(\w)/g, (input) => {
            return input.toUpperCase();
        });
        return (
            <div className="poke-item">
                <div className="poke-name">{TitleCase}</div>
                <img className="poke-img" src={this.props.image} alt={this.props.name}/>
                <div className="typeone-label">Primary Type: </div>
                <div className="poke-typeone">{this.props.typeOne}</div>
                <div className="typetwo-label">Secondary Type: </div>
                <div className="poke-typetwo r-col">{this.props.typeTwo}</div>
                {/* <div className="pokedex-entry">{this.props.pokedexEntry}</div> */}
                <div className="pokemon-shape">shape: {this.props.shape}</div>
            </div>
        )
    }
}