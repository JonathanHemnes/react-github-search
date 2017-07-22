import React, { Component } from 'react';

export default class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }

    render() {

        const sortValues = ['stars', 'forks', 'updated'];
        const sortOptions = sortValues.map((value, i) => {
            return <option key={i} value={value}>{value}</option>
        })

        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <label>
                        Name:
          <input type="text" name="term" onChange={this.props.handleChange} />
                    </label>
                    <label>Sort:
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
                    <input type="submit" value="Submit" disabled={!this.props.canSubmit} />
                </form>
            </div>
        )
    }
}