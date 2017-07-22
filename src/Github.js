import React, { Component } from 'react';
import SearchForm from './SearchForm.js';
import DisplayResults from './DisplayResults.js';
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
    
        return (
            <div>
                <SearchForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} canSubmit={this.state.term} />
                <DisplayResults error={this.state.error} result={this.state.results} loading={this.state.loading}/>
            </div>
        )
    }
}