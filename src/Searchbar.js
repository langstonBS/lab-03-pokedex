import React, { Component } from 'react';
import Sort from './Sort.js';

export default class Searchbar extends Component {
    render() {
        return (
            <section className="searchbar">
                <Sort 
                    data={this.props.data}
                    handleCategorySelect={this.props.handleCategorySelect}
                    handleSort={this.props.handleSort}
                />
            </section>
        )
    }
}
