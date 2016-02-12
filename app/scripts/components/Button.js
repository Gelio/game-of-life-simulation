import React from 'react';

export default class Settings extends React.Component {
    isDisabled() {
        return (this.props.disabled === true) ? 'disabled' : '';
    }

    render() {
        return (
            <button role="button" class={"settings-button btn " + this.props.style} disabled={this.isDisabled()} onClick={this.props.click}>{this.props.title}</button>
        );
    }
}