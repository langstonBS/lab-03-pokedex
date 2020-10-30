import React, { Component } from "react";
import Pagination from "react-js-pagination";
import request from "superagent";
import PokeList from "./PokeList.js";
import Searchbar from "./Searchbar.js";

export default class Main extends Component {
  state = {
    searchBy: "",
    selectedCategory: "",
    selectedSort: "",
    inputVal: "",
    pokedex: [],
    loading: true,
    activePage: 1,
  };

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({
      activePage: pageNumber,
    });
  }

  handleCategorySelect = (e) => {
    this.setState({
      selectedCategory: e.target.value,
    });
  };

  handleSort = (e) => {
    this.setState({
      selectedSort: e.target.value,
    });
  };

  handleSearch = async (e) => {
    this.setState({
      inputVal: e.target.value,
    });
    await this.fetchPokemonAPI();
  };

  handleFormSubmit = async (e) => {
    e.preventDefault();

    await this.fetchPokemonAPI();
  };

  componentDidMount = async () => {
    await this.fetchPokemonAPI();
  };

  fetchPokemonAPI = async () => {
    if (this.state.inputVal.length > 0) {
      const res = await request.get(
        `https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.inputVal}`
      );
      return this.setState({
        pokedex: res.body.results,
        loading: false,
      });
    } else {
      const res = await request.get(
        `https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage="801"`
      );
      return this.setState({
        pokedex: res.body.results,
        loading: false,
      });
    }
  };

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
          <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={20}
            totalItemsCount={801}
            pageRangeDisplayed={5}
            onChange={this.handlePageChange.bind(this)}
            firstPageText="first"
            lastPageText="last"
            prevPageText="prev"
            nextPageText="next"
          />
          <PokeList
            data={this.state.pokedex}
            loading={this.state.loading}
            selectedCategory={this.state.selectedCategory}
            selectedSort={this.state.selectedSort}
            inputVal={this.state.inputVal}
          />
        </main>
      </>
    );
  }
}
