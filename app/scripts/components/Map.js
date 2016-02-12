import React from 'react';

import Cell from './Cell';

export default class Map extends React.Component {
    componentWillMount() {
        // Create cells
        var gameMap = this.props.map.gameMap,
            index = 0,
            cells = [];

        gameMap.forEach((row, y) => {
            cells.push([]);
            row.forEach((cell, x) => {
                cells[cells.length-1].push(
                    <Cell key={index} status={this.props.map.getCellStatus(x, y)} />
                );
                index++;
            });
        });

        this.setState({
            cells: cells,
            mapSize: this.props.map.mapSize
        });

        console.log('mouinting');
    }

    shouldComponentUpdate() {
        if(this.state.mapSize !== this.props.map.mapSize)
            this.componentWillMount();

        return true;
    }

    render() {
        return (
            <div class="col-md-8 col-md-push-2 m-t-2">
                {this.state.cells.map((row, i) => {
                    return (
                        <div key={i}>{row}</div>
                    );
                })}
            </div>
        );
    }
}