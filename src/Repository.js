import React, { Component } from 'react';
import './Repository.css';

export default class Repository extends Component {

    render() {
        return (
            <div className="repository">
                <h2>{this.props.repo.name}</h2>
                <img src={this.props.repo.owner.avatar_url} alt="" />
            </div>
        )
    }
}