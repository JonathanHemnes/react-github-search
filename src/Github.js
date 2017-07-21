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
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {
        this.getRepositories();
        event.preventDefault();
    }

    getRepositories = () => {
        this.setState({ loading: true })
        this._githubSearch.query(this.state.value).then(data => {
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

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" disabled={!this.state.value} />
                </form>
                {displayResult}
            </div>
        )
    }
}