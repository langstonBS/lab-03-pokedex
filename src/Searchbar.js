import React, { Component } from 'react';
import Sort from './Sort.js';

export default class Searchbar extends Component {
    render() {
        return (
            <section className="searchbar">
                Searchbar (children: Sort)
                <Sort />
            </section>
        )
    }
}
