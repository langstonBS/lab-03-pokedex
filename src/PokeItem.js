import React, { Component } from 'react';

export default class PokeItem extends Component {
    render() {
        return (
            <div className="poke-item">
                <div className="poke-name">{this.props.name}</div>
                <img className="poke-img" src={this.props.image} alt={this.props.name}/>
                <div className="poke-typeone">{this.props.typeOne}</div>
                <div className="poke-typetwo">{this.props.typeTwo}</div>
                <div className="poke-shape">{this.props.shape}</div>
            </div>
        )
    }
}
