import React from 'react';

import Map from '../game/map-class';
import Settings from './Settings';

export default class Game extends React.Component {
    constructor() {
        super();

        // Set it to running
        this.state = {
            map: Object.create(Map)
        };
        this.state.map.init();
        this.state.map.randomMap();

        this.state.paused = false;
    }

    setPausedState(isPaused) {
        this.setState({
            paused: isPaused
        });
    }

    clearMap(newSize) {
        this.state.map.init(newSize);
        this.forceUpdate();
    }

    render() {
        return (
            // Settings panel
            // Game map
            <div>
                <Settings map={this.state.map} paused={this.state.paused}
                          pauseGame={this.setPausedState.bind(this, true)}
                          resumeGame={this.setPausedState.bind(this, false)}
                          clearMap={this.clearMap.bind(this)}
                />
            </div>
        );
    }
}