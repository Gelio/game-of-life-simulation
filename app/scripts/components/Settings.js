import React from 'react';
import Config from '../config';

import Button from './Button';

export default class Settings extends React.Component {
    constructor() {
        super();

        this.state = {
            selectedMapSize: Config.defaultMapSize
        };
    }

    clearMap() {
        this.props.clearMap(this.state.selectedMapSize);
    }

    getButtons() {
        var buttons = [];
        if(this.props.paused)
            buttons.push(<Button title="Resume" style="btn-primary" click={this.props.resumeGame} key="0" />);
        else
            buttons.push(<Button title="Pause" style="btn-primary" click={this.props.pauseGame} key="0" />);

        buttons.push(<Button title="Clear" style="btn-secondary" click={this.clearMap.bind(this)} key="1" />);

        return buttons;
    }

    render() {
        return (
            <div class="col-md-8 col-md-push-2 text-xs-center">
                {this.getButtons()}
            </div>
        );
    }
}