import React from 'react';

export default class Settings extends React.Component {
    render() {
        return (
            <button role="button" class={"btn " + this.props.style} onClick={this.props.click}>{this.props.title}</button>
        );
    }
}