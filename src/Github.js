import React, { Component } from 'react';
import Repository from './Repository';
import GithubSearch from './services/githubSearch.js';

export default class Github extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            results: [],
            value: '',
            loading: false
        }
        this._githubSearch = new GithubSearch();
    }

    componentDidMount() {

    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        this.getRepositories();
        event.preventDefault();
    }

    getRepositories = () => {
        this.setState({ loading: true })
        this._githubSearch.query(this.state.term, this.state.sort, this.state.order).then(data => {
            this.setState({ results: data.items, loading: false })
        }).catch(error => {
            this.setState({ error: error.message, loading: false })
        })
    }

    render() {
        let displayResult;

        if (this.state.error) {
            displayResult = <h1>Severe Failure Has Ocurred! {this.state.error}</h1>
        } else if (this.state.results.length && !this.state.loading) {
            displayResult = <div>
                {this.state.results.map(repo => <Repository key={repo.id} repo={repo} />)}
            </div>
        } else if (this.state.loading) {
            displayResult = <h1>Loading...</h1>
        }

        const sortValues = ['stars', 'forks', 'updated'];
        const sortOptions = sortValues.map((value, i) => {
            return <option key={i} value={value}>{value}</option>
        })

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
          <input type="text" name="term" onChange={this.handleChange} />
                    </label>
                    <label>Sort:
                        <select name="sort" onChange={this.handleChange}>
                            {sortOptions}
                        </select>
                    </label>
                    <label>Direction:
                        <select name="order" onChange={this.handleChange}>
                            <option value="asc">asc</option>
                            <option value="desc">desc</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit" disabled={!this.state.term} />
                </form>
                {displayResult}
            </div>
        )
    }
}