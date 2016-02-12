export default {
    mapSizes: [
        [50, 30],
        [5, 3],
        [80, 50],
        [100, 70]
    ],
    defaultMapSize: 1,       // index of the element in mapSizes array
    randomElements: 0,
    speeds: [       // delays between ticks in miliseconds from slowest to fastest
        1000,
        500,
        200
    ],
    speedLabels: ['Slow', 'Normal', 'Fast'],
    defaultSpeed: 1     // index of the element in speeds array
}