import React, { Component } from 'react';

const getUniqueCategories = (data) => {
    const arr = data.map(pokemon => pokemon.type_1);
    return Array.from(new Set(arr));
}

export default class Sort extends Component {
    render() {
        return (
            <div>
            <select className="updown-dropdown" defaultValue={this.props.selectedSort} onChange={this.props.handleSort}>
                <option value=''>sort by...</option>
                <option value='ascending'>ascending (z-a)</option>
                <option value='descending'>descending (a-z)</option>
            </select>
            <select className="category-dropdown" defaultValue={this.props.selectedCategory} onChange={this.props.handleCategorySelect}>
                <option value=''>all categories</option>
                {getUniqueCategories(this.props.data).map((category, index) => 
                    <option value={category} key={index}>{category}</option>)}
            </select>
            </div>
        )
    }
}
