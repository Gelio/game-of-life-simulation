import React from 'react';

import Cell from './Cell';

export default class Map extends React.Component {
    switchCell(x, y) {
        this.props.switchCell(x, y);
    }

    getCells() {
        // Create cells
        var gameMap = this.props.map.gameMap,
            index = 0,
            cells = [];

        gameMap.forEach((row, y) => {
            cells.push([]);
            row.forEach((cell, x) => {
                cells[cells.length-1].push(
                    <Cell key={index} status={this.props.map.getCellStatus(x, y)} switchCell={this.switchCell.bind(this, x, y)} width={100/this.props.map.mapSize[0]} />
                );
                index++;
            });
        });

        return cells;
    }

    /*shouldComponentUpdate() {
        if(this.state.mapSize !== this.props.map.mapSize)
            this.componentWillMount();

        return true;
    }*/

    render() {
        return (
            <div class="col-md-8 col-md-push-2 m-t-2">
                <div class="game-map">
                    {this.getCells().map((row, i) => {
                        return (
                            <div key={i} class="clearfix">{row}</div>
                        );
                    })}
                </div>
            </div>
        );
    }
}