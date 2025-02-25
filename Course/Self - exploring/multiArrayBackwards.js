// nested array(multi)
var names = [
    ["Gragas", "Johnny", "Levy", "Ann"],
    ["Thaatchai"],
    ["Skibidi", "Wiegert", "Olaf"]
];


// Printing items backwards from multi array
for (var r = names.length - 1; r >= 0; r--) { 
    var sub = names[r];
    for (var k = sub.length - 1; k >= 0; k--) {
        console.log(sub[k]);  
    }
}