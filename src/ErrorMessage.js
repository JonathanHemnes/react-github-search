import React, { Component } from 'react';
import './ErrorMessage.scss';

export default class ErrorMessage extends Component {

    render() {
        return (
            <h1 className="error-message">Severe Problem Encountered! {this.props.error}</h1>
        )
    }
}