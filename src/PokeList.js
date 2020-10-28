import React, { Component } from 'react';
import PokeItem from './PokeItem.js';


const filterData = (data, filterCategory) => {
    return data
    .filter((pokemon) => !filterCategory || (pokemon.type_1 === filterCategory));
}

const sortData = (data, selectedSort) => {
    if (selectedSort === undefined) {
        return data;
    }
    if (selectedSort === 'descending') {
        return data.sort((a, b) => a.pokemon.localeCompare(b.pokemon));
    }
    else if (selectedSort === 'ascending') {
        return data.sort((a, b) => b.pokemon.localeCompare(a.pokemon));
    }
}


// take in this.props.selectedSort and use it to filter data?

export default class PokeList extends Component {
    render() {

    const filtered = filterData(this.props.data, this.props.selectedCategory);
    const sorted = sortData(filtered, this.props.selectedSort);

        return (
            <section className="poke-list">
                {
                sorted.map((pokemon, index) => { 
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
