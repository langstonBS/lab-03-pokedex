import React, { Component } from 'react';
import request from 'superagent';
import PokeList from './PokeList.js';
import Searchbar from './Searchbar.js';

export default class Main extends Component {
  state = {
    searchBy: '',
    selectedCategory: '',
    selectedSort: '',
    inputVal: '',
    pokedex: [],
    pokemonName: ''
  }

  handleCategorySelect = (e) => {
    this.setState({
      selectedCategory: e.target.value
    })
  }

  handleSort = (e) => {
    this.setState({
      selectedSort: e.target.value
    });
  }

  handleSearch = (e) => {
    this.setState({
      inputVal: e.target.value,
      pokemonName: e.target.value
    });
    console.log("pokemonName: ", this.state.pokemonName);
    console.log("pokedex: ", this.state.pokedex);
  }

  handleFormSubmit = async (e) => {
    e.preventDefault();
    // this.setState({      
    //   pokemonName: e.target.value    
    // });
    // add searchparams
    await this.fetchPokemonAPI();
  }

  componentDidMount = async () => {
    await this.fetchPokemonAPI();
  }
  
  fetchPokemonAPI = async () => {
    if (!this.state.pokemonName === '') {
      const res = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.pokemonName}`);      
      return this.setState({ pokedex: res.body.results });
    } else {
      const res = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/`);
      return this.setState({ pokedex: res.body.results });
    }
  }

  render() {
    return (
      <>
      <main>
        <Searchbar 
          data={this.state.pokedex}
          handleFormSubmit={this.handleFormSubmit}
          handleCategorySelect={this.handleCategorySelect}
          handleSort={this.handleSort}
          handleSearch={this.handleSearch}
          inputVal={this.state.inputVal}
          pokemonName={this.state.pokemonName}
        />
        <PokeList 
          data={this.state.pokedex}
          selectedCategory={this.state.selectedCategory}
          selectedSort={this.state.selectedSort}
          inputVal={this.state.inputVal}
        />
      </main>
      </>
    )
  }
}
