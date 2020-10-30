import React, { Component } from "react";
import PokeList from "./PokeList.js";
import Searchbar from "./Searchbar.js";

export default class Main extends Component {
  render() {
    return (
      <>
        <main>
          <Searchbar
            data={this.props.data}
            handleFormSubmit={this.props.handleFormSubmit}
            handleCategorySelect={this.props.handleCategorySelect}
            handleSort={this.props.handleSort}
            handleSearch={this.props.handleSearch}
            inputVal={this.props.inputVal}
            pokemonName={this.props.pokemonName}
          />
          <PokeList
            data={this.props.data}
            loading={this.props.loading}
            selectedCategory={this.props.selectedCategory}
            selectedSort={this.props.selectedSort}
            inputVal={this.props.inputVal}
          />
        </main>
      </>
    );
  }
}
