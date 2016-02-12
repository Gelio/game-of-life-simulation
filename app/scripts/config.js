export default {
    mapSizes: [
        [50, 30],
        [80, 50],
        [100, 70]
    ],
    defaultMapSize: 1,       // index of the element in mapSizes array
    randomElements: 0.4,
    speeds: [       // delays between ticks in miliseconds from slowest to fastest
        800,
        350,
        100,
        50
    ],
    speedLabels: ['Slow', 'Normal', 'Fast', 'Ultra'],
    defaultSpeed: 0     // index of the element in speeds array
}