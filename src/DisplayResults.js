import React, { Component } from 'react';
import ErrorMessage from './ErrorMessage.js';
import RepositoryList from './RepositoryList.js'
import Loading from './Loading.js';

export default class DisplayResults extends Component {

    render() {
        let displayResult;

        if (this.props.error) {
            displayResult = <ErrorMessage error={this.props.error} />
        } else if (this.props.result && this.props.result.length && !this.props.loading) {
            displayResult = <RepositoryList repositories={this.props.result} />
        } else if (this.props.loading) {
            displayResult = <Loading />
        }
        return (
            <div>
                {displayResult}
            </div>
        )
    }
}