import React from 'react';

export default class Cell extends React.Component {
    getClass() {
        return 'cell' + (this.props.status ? ' active' : '');
    }

    render() {
        return (
            <div class={this.getClass()} onClick={this.props.switchCell} style={{width: this.props.width + "%"}}></div>
        );
    }
}