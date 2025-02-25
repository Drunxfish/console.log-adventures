// Land
var landArray = [
    ["Land", "Water", "Land", "Water", "Land"],
    ["Land", "Water", "Land", "Water", "Land"],
    ["Land", "Water", "Land", "Water", "Land"],
    ["Land", "Water", "Land", "Water", "Land"],
    ["Land", "Water", "Land", "Water", "Land"]
];


// editing multi-dimensional array (visualising)
for (var r = 0; r < landArray.length; r++) {

    var subArray = landArray[r];
    for (var k = 0; k < subArray.length; k++) {

        if (subArray[k] === 'Land') {
            subArray[k] = 'Woud';
        } else if (subArray[k] === 'Water') {
            subArray[k] = 'Zee';
        }
    }
}


console.log(landArray);
