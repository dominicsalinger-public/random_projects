
var num_points = 100;
var p = new Perceptron(3);
var points = new Array(num_points);
var x_min = 0;
var x_max = 500;
var y_min = 0
var y_max = 500;

function setup() {
    createCanvas(x_max, y_max);
    for (var i = 0; i < num_points; i++) {
        points[i] = new Point(random(x_min, x_max), random(y_min, y_max));
    }
}

function draw() {
    background(255);
    for (var i = 0; i < points.length; i++) {
        points[i].show();
    }
}











