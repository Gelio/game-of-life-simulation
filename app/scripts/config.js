export default {
    mapSizes: [
        [50, 30],
        [70, 50],
        [100, 80]
    ],
    defaultMapSize: 1,       // index of the element in mapSizes array
    randomElements: 0.3,
    speeds: [       // delays between ticks in miliseconds from slowest to fastest
        800,
        350,
        100,
        50
    ],
    speedLabels: ['Slow', 'Normal', 'Fast', 'Ultra'],
    defaultSpeed: 0     // index of the element in speeds array
}