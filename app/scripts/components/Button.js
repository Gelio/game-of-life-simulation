import React from 'react';

export default class Settings extends React.Component {
    render() {
        return (
            <button role="button" class={"settings-button btn " + this.props.style} onClick={this.props.click}>{this.props.title}</button>
        );
    }
}