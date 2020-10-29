import React, { Component } from 'react';
import Sort from './Sort.js';

export default class Searchbar extends Component {
    render() {
        return (
            <section className="searchbar">
                <div>search: {this.props.inputVal}</div>
                <input 
                    className="searchbar-input"
                    onChange={this.props.handleSearch}
                />
                <Sort 
                    data={this.props.data}
                    handleCategorySelect={this.props.handleCategorySelect}
                    handleSort={this.props.handleSort}
                />
            </section>
        )
    }
}
