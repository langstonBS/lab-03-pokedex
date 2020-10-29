import React, { Component } from 'react';
import PokeItem from './PokeItem.js';

export default class PokeList extends Component {
    render() {

        const filtered = filterData(this.props.data, this.props.selectedCategory);
        const sorted = sortData(filtered, this.props.selectedSort);
        console.log("sorted", sorted);
        const validated = searchValidation(sorted, this.props.inputVal);
        console.log("validated", validated);

        return (
            <section className="poke-list">
                {
                validated.map((pokemon, index) => { 
                    return(
                    <PokeItem 
                        name={pokemon.pokemon}
                        image={pokemon.url_image}
                        typeOne={pokemon.type_1}
                        typeTwo={pokemon.type_2}
                        pokedexEntry={pokemon.pokedex_entry}
                        shape={pokemon.shape}
                        key={index}
                    />)})
                }
            </section>
        )
    }
}

const filterData = (data, filterCategory) => {
    return data
    .filter((pokemon) => !filterCategory || (pokemon.type_1 === filterCategory));
}

const sortData = (data, selectedSort) => {
    if (selectedSort === '') {
        return data;
    }
    if (selectedSort === 'descending') {
        return data.sort((a, b) => a.pokemon.localeCompare(b.pokemon));
    }
    if (selectedSort === 'ascending') {
        return data.sort((a, b) => b.pokemon.localeCompare(a.pokemon));
    }
}

const searchValidation = (data, input) => {
    if (input) {
        return data.filter(pokemon => pokemon.pokemon.toLowerCase().includes(input));
    } else {
        return data;
    }
}