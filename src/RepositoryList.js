import React, { Component } from 'react';
import Repository from './Repository';

export default class RepositoryList extends Component {

    render() {
        return (
            <div>
               {this.props.repositories.map(repo => <Repository key={repo.id} repo={repo} />)}
            </div>
        )
    }
}