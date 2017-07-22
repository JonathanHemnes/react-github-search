import React, { Component } from 'react';
import './Repository.scss';

export default class Repository extends Component {

    render() {
        return (
            <div className="repository">
                <div>
                    <h2>Repo Name: {this.props.repo.name}</h2>
                    <h3>Primary Language: {this.props.repo.language || 'Unknown'}</h3>
                    <h4>Owned By: {this.props.repo.owner.login}</h4>
                </div>
                <div>
                    <h3>Forks: {this.props.repo.forks}</h3>
                    <h3>Open Issues: {this.props.repo.open_issues}</h3>
                </div>
                <div>
                    <img src={this.props.repo.owner.avatar_url} alt="" />
                </div>
            </div>
        )
    }
}