import React from 'react';

export default class Cell extends React.Component {
    componentWillMount() {
        this.state = {
            status: this.props.status
        };
    }

    shouldComponentUpdate() {
        return this.state.status !== this.props.status;
    }

    render() {
        return (
            <span>{this.state.status}</span>
        );
    }
}