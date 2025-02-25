var multiArray = [
    [1, 2, 3, 18, 21, 45],
    [4, 5, 6, 10, 12, 30],
    [7, 8, 9, 17, 42, 34]
];

// printing items from multi-dimensional array
for (var r = 0; r < multiArray.length; r++) {
    subArray = multiArray[r]
    for (var k = 0; k < subArray.length; k++) {
        console.log(subArray[k])
    }
}