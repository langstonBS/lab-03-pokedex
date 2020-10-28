import './App.css';
import React, { Component } from 'react';
import Header from './Header.js';
import Navbar from './Navbar.js';
import PokeList from './PokeList.js';
import Searchbar from './Searchbar.js';
import { pokemon } from './data/data.js';

export default class App extends Component {
  render() {
    return (
      <>
      <header>
        <Header />
        <Navbar />
      </header>
      <main>
        <Searchbar data={pokemon}/>
        <PokeList data={pokemon}/>
      </main>
      </>
    )
  }
}
