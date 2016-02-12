import React from 'react';

import Map from '../game/map-class';

export default class Game extends React.Component {
    constructor() {
        super();

        // Set it to running
        this.state = {
            map: Object.create(Map)
        };
        this.state.map.init();
        this.state.map.randomMap();

        this.setState({
            paused: false
        });
    }

    render() {
        return (
            // Settings panel
            // Game map
            <p>Game</p>
        );
    }
}