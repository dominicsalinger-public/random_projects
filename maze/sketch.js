
// globals
var cols, rows;
var w = 40;
var grid = [];
var current; //currently visited cell
var stack = [];

// this function gets called once on first initialization
function setup () {
    var canvas = createCanvas(400, 400);
    canvas.parent("maze");
    cols = floor(width/w);
    rows = floor(height/w);
    frameRate(60);

    for (var j = 0; j < rows; j++) {
        for (var i = 0; i < cols; i++) {
            var cell = new Cell(i, j);
            grid.push(cell);
        }
    } 
    for (var cell = 0; cell < grid.length; cell++) {
        grid[cell].init();
    }
    current = grid[0];
}

// this function gets called framerate times per second
function draw () {
    background(51);
    for (var i = 0; i < grid.length; i++) {
        grid[i].show();
    }

    current.visited = true;
    current.highlight();
    var next = current.checkNeighbors();
    if (next) {
        next.visited = true;
        stack.push(current);
        removeWalls(current, next);
        current = next;
    } else if (stack.length > 0) {
        current = stack.pop();
    }
}

// takes two neighboring cells and removes the walls between them
function removeWalls (a, b) {
    var x_difference = b.x - a.x;
    if (x_difference == 1) {
        a.removeWall("right");
        b.removeWall("left");
    } else if (x_difference == -1) {
        a.removeWall("left");
        b.removeWall("right");
    }

    var y_difference = b.y - a.y;
    if (y_difference == 1) {
        a.removeWall("bottom");
        b.removeWall("top");
    } else if (y_difference == -1) {
        a.removeWall("top");
        b.removeWall("bottom");
    }
}

// translate 2d coordinates to 1d coordinate
function index (i, j) {
    if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1 ) {
        return -1;
    }
    return i + j * cols;
}
