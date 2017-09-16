
var hexagons = [];
// gets called on page load
function setup() {
    var radius = 20;
    var spacing = radius*2;
    createCanvas(800, 800);
    // 0-63
    var count = 0;
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            hexagons.push(new Hexagon(spacing * i + radius, spacing * j + radius, radius, count));
            count++;
        }
    }
    // i + j
    var offset = 16 * radius;
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            hexagons.push(new Hexagon(offset + spacing * i + radius, offset+ spacing * j + radius, radius, i+j));
        }
    }

    // i * j
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            hexagons.push(new Hexagon(offset + spacing * i + radius, spacing * j + radius, radius, i*j));
        }
    }
    // (i+j)*2
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            hexagons.push(new Hexagon(spacing * i + radius, offset + spacing * j + radius, radius, (i+j)*2));
        }
    }
}

// gets called once per frame
function draw() {
    // set the background color to white
    background(1000);

    for (var i = 0; i < hexagons.length; i++) {
        hexagons[i].drawOutline();
        hexagons[i].drawValue(hexagons[i].val);

    }
}
