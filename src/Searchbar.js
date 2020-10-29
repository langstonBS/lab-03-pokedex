import React, { Component } from 'react';
import Sort from './Sort.js';

export default class Searchbar extends Component {
    render() {
        return (
            <section  className="searchbar">
                {/* <div>{this.props.inputVal}</div> */}
                <input 
                    placeholder=" search by name ..."
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
