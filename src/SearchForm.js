import React, { Component } from 'react';
import './SearchForm.scss';

export default class SearchForm extends Component {

    render() {

        const sortValues = ['stars', 'forks', 'updated'];
        const sortOptions = sortValues.map((value, i) => {
            return <option key={i} value={value}>{value}</option>
        })

        return (
            <div className="search-form">
                <form onSubmit={this.props.handleSubmit}>
                    <label>
                        Search Term:
          <input type="text" name="term" onChange={this.props.handleChange} />
                    </label>
                    <label>Sort By:
                        <select name="sort" onChange={this.props.handleChange}>
                            {sortOptions}
                        </select>
                    </label>
                    <label>Direction:
                        <select name="order" onChange={this.props.handleChange}>
                            <option value="asc">asc</option>
                            <option value="desc">desc</option>
                        </select>
                    </label>
                    <button type="submit"disabled={!this.props.canSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}