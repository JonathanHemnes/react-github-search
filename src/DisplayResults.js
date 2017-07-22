import React, { Component } from 'react';
import Repository from './Repository';

export default class DisplayResults extends Component {

    render() {
        let displayResult;

        if (this.props.error) {
            displayResult = <h1>Severe Failure Has Ocurred! {this.props.error}</h1>
        } else if (this.props.result && this.props.result.length && !this.props.loading) {
            displayResult = <div>
                {this.props.result.map(repo => <Repository key={repo.id} repo={repo} />)}
            </div>
        } else if (this.props.loading) {
            displayResult = <h1>Loading...</h1>
        }
        return (
            <div>
                {displayResult}
            </div>
        )
    }
}