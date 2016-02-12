import React from 'react';
import Config from '../config';

import MapClass from '../game/map-class';
import Settings from './Settings';
import Map from './Map';

export default class Game extends React.Component {
    constructor() {
        super();

        this.state = {
            map: Object.create(MapClass),
            paused: false,
            speed: Config.defaultSpeed          // just the index
        };
        this.state.map.init();
        this.state.map.randomMap();

        this.state.interval = setInterval(this.tick.bind(this), Config.speeds[Config.defaultSpeed]);
    }

    setPausedState(isPaused) {
        clearInterval(this.state.interval);
        this.setState({
            paused: isPaused
        });

        if(!isPaused)
            this.setGameSpeed(this.state.speed);
    }

    clearMap() {
        console.log('clearing map');
        this.state.map.clearMap();
        this.forceUpdate();
    }

    setGameSpeed(newSpeed) {
        clearInterval(this.state.interval);
        this.setState({
            speed: newSpeed,
            interval: setInterval(this.tick.bind(this), Config.speeds[newSpeed])
        });
    }

    setMapSize(newMapSize) {
        if(!this.state.paused)
            return console.log('Game needs to be paused to update map size');

        this.state.map.init(newMapSize);
        this.forceUpdate();
    }

    switchCell(x, y) {
        console.log('switching cell', x, y);
        this.state.map.switchCell(x, y);
        this.forceUpdate();
    }

    tick() {
        this.state.map.tick();
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <Settings map={this.state.map} paused={this.state.paused} speed={this.state.speed}
                          pauseGame={this.setPausedState.bind(this, true)}
                          resumeGame={this.setPausedState.bind(this, false)}
                          clearMap={this.clearMap.bind(this)}
                          setSpeed={this.setGameSpeed.bind(this)}
                          setMapSize={this.setMapSize.bind(this)}
                          setGameSpeed={this.setGameSpeed.bind(this)}
                />

                <Map map={this.state.map}
                     switchCell={this.switchCell.bind(this)}
                />
            </div>
        );
    }
}