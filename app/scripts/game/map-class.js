import Config from '../config';

var Map = {
    init: init,
    randomMap: randomMap,
    getCellStatus: getCellStatus,
    tick: tick
};

export default Map;

function init(sizeIndex) {
    if(!sizeIndex || sizeIndex < 0 || sizeIndex >= Config.mapSizes.length)
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
    console.log('Map tick');
}