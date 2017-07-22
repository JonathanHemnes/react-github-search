import React, { Component } from 'react';
import './Repository.scss';
import moment from 'moment'

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
                    <h3>Stars: {this.props.repo.stargazers_count}</h3>
                    <h3>Open Issues: {this.props.repo.open_issues}</h3>
                </div>
                <div>
                    <img src={this.props.repo.owner.avatar_url} alt="" />
                    <h3>Last Update: {moment(this.props.repo.updated_at).format('MMMM Do YYYY, h:mm:ss a')}</h3>
                </div>
            </div>
        )
    }
}