import Config from '../config';

var Map = {
    init: init,
    randomMap: randomMap,
    getCellStatus: getCellStatus,
    tick: tick,
    countActiveCellsAround: countActiveCellsAround,
    clearMap: clearMap,
    switchCell: switchCell
};

export default Map;

function init(sizeIndex) {
    if(sizeIndex === undefined || sizeIndex < 0 || sizeIndex >= Config.mapSizes.length)
        sizeIndex = Config.defaultMapSize;

    this.mapSize = Config.mapSizes[sizeIndex];

    this.gameMap = [];

    for(var i=0; i < this.mapSize[1]; i++) {
        this.gameMap.push([]);
        for(var j=0; j < this.mapSize[0]; j++)
            this.gameMap[i].push(0);        // 0 indicates that the cell is dead
    }

    return this.mapSize;
}

function randomMap(elements) {
    if(!elements)
        elements = Config.randomElements;

    if(!this.gameMap) {
        throw new Error('Map needs to be initialized first');
    }


    for(var i=0; i < elements; i++) {
        var position = [randomNumber(this.gameMap[0].length), randomNumber(this.gameMap.length)];
        this.gameMap[position[1]][position[0]] = 1;
    }

    return true;
}

function randomNumber(max) {
    return Math.floor(Math.random()*max);
}

function getCellStatus(x, y) {
    return this.gameMap[y][x];
}

function tick() {
    // Play the game, make a tick
    var newMap = this.gameMap.slice(0);

    this.gameMap.forEach((row, columnIndex) => {
        row.forEach((cell, rowIndex) => {
            var aliveNeighbours = this.countActiveCellsAround(rowIndex, columnIndex),
                isActive = cell;

            if(isActive && (aliveNeighbours < 2 || aliveNeighbours > 3))
                isActive = 0;
            else if(!isActive && aliveNeighbours == 3)
                isActive = 1;

            newMap[columnIndex][rowIndex] = isActive;
        });
    });

    this.gameMap = newMap;
}

function countActiveCellsAround(x, y) {
    var count = 0,
        minX = -1, minY = -1,
        maxX = 1, maxY = 1;

    if(x == 0)
        minX = 0;
    if(x == this.mapSize[0]-1)
        maxX = 0;

    if(y == 0)
        minY = 0;
    if(y == this.mapSize[1]-1)
        maxY = 0;

    if(x == 1 && y == 1) debugger;

    for(var i=minX; i <= maxX; i++)
        for(var j=minY; j <= maxY; j++) {
            if(i == 0 && j == 0) continue;

            if(this.gameMap[y+j][x+i])
                count++;
        }

    return count;
}

function clearMap() {
    this.gameMap.forEach((row, columnIndex) => {
        row.forEach((cell, rowIndex) => {
            this.gameMap[columnIndex][rowIndex] = 0;
        });
    });

    return true;
}

function switchCell(x, y) {
    if(this.gameMap[y][x])
        this.gameMap[y][x] = 0;
    else
        this.gameMap[y][x] = 1;
}