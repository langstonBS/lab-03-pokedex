import './App.css';
import React, { Component } from 'react';
import Header from './Header.js';
import Navbar from './Navbar.js';
import PokeList from './PokeList.js';
import Searchbar from './Searchbar.js';
import { pokemon } from './data/data.js';

export default class App extends Component {
  state = {
    searchBy: '',
    selectedCategory: ''
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

  render() {
    return (
      <>
      <header>
        <Header />
        <Navbar />
      </header>
      <main>
        <Searchbar 
          data={pokemon}
          handleCategorySelect={this.handleCategorySelect}
          handleSort={this.handleSort}
        />
        <PokeList 
          data={pokemon}
          selectedCategory={this.state.selectedCategory}
          selectedSort={this.state.selectedSort}
        />
      </main>
      </>
    )
  }
}
