
// globals
var num_points = 100;
var perceptron = new Perceptron(2, 0.1);
var points = new Array(num_points);
var x_min = 0;
var x_max = 500;
var y_min = 0
var y_max = 500;

// p5 function that gets called once on page load
function setup() {
    createCanvas(x_max, y_max);
    for (var i = 0; i < num_points; i++) {
        points[i] = new Point(random(x_min, x_max), random(y_min, y_max));
    }
}

// p5 function thta gets called once per frame
function draw() {
    background(255);
    stroke(0);
    line(x_min, y_min, x_max, y_max);
    showPoints();
    colorPoints();
}

// display the points on the canvas
function showPoints() {
    for (var i = 0; i < points.length; i++) {
        points[i].show();
    }
}

// color each point red if perceptron guess is incorrect, green if correct
function colorPoints() {
    for (var i = 0; i < points.length; i++) {
        var inputs = [points[i].x, points[i].y];
        var guess  = perceptron.guess(inputs);
        var target = points[i].label;
        if (guess == target) {
            fill(0, 255, 0);
        } else {
            fill(255, 0, 0);
        }
        noStroke();
        ellipse(points[i].x, points[i].y, 8, 8);
    }
}

// train every point once per mouse click
function mousePressed() {
    for (var i = 0; i < points.length; i++) {
        var inputs = [points[i].x, points[i].y];
        perceptron.train(inputs, points[i].label);
    }
}













