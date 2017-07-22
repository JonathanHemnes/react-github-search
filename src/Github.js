import React, { Component } from 'react';
import Repository from './Repository';
import SearchForm from './SearchForm.js'
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

        return (
            <div>
                <SearchForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} canSubmit={this.state.term} />
                {displayResult}
            </div>
        )
    }
}