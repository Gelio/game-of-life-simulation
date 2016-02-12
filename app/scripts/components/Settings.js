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

    setMapSize(newMapSize) {
        this.setState({
            selectedMapSize: newMapSize
        });

        this.props.setMapSize(newMapSize);
    }

    setGameSpeed(newGameSpeed) {
        this.props.setGameSpeed(newGameSpeed);
    }

    getButtons() {
        var buttons = [];

        // First row - pause/resume + clear
        if(this.props.paused)
            buttons.push(<Button title="Resume" style="btn-primary" click={this.props.resumeGame} key="0" />);
        else
            buttons.push(<Button title="Pause" style="btn-primary" click={this.props.pauseGame} key="0" />);

        buttons.push(<Button title="Clear" style="btn-secondary" click={this.clearMap.bind(this)} key="1" />);

        // Second row - map sizes
        Config.mapSizes.forEach((mapSize, i) => {
            buttons.push(<Button title={mapSize[0] + 'x' + mapSize[1]} style="btn-secondary" click={this.setMapSize.bind(this, i)} key={buttons.length} />);
        });

        // Third row - game speeds
        Config.speeds.forEach((speed, i) => {
            buttons.push(<Button title={Config.speedLabels[i]} style="btn-secondary" click={this.setGameSpeed.bind(this, i)} key={buttons.length} />);
        });

        return buttons;
    }

    render() {
        var buttons = this.getButtons();

        return (
            <div class="col-md-8 col-md-push-2 text-xs-center clearfix">
                <div>{buttons.slice(0, 2)}</div>
                <div>{buttons.slice(2, 2+Config.mapSizes.length)}</div>
                <div>{buttons.slice(2+Config.mapSizes.length, 2+Config.mapSizes.length+Config.speeds.length)}</div>

                <div>Generations: {this.props.map.generations}</div>
            </div>
        );
    }
}