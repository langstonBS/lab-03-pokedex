import React, { Component } from 'react';
import PokeItem from './PokeItem.js';

export default class PokeList extends Component {
    render() {
        return (
            <section className="poke-list">
                PokeList (children: PokeItem)
                {
                this.props.data.map((pokemon, index) => { 
                    return(
                    <PokeItem 
                        name={pokemon.pokemon}
                        image={pokemon.url_image}
                        typeOne={pokemon.type_1}
                        typeTwo={pokemon.type_2}
                        shape={pokemon.shape}
                        key={index}
                    />)})
                }
            </section>
        )
    }
}
