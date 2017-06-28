


var snake;
function setup() {
	createCanvas(600, 600);
	frameRate(10);
	snake = new Snake();
}

function draw() {
	background(51);
	fill(255, 0, 100);
	snake.show();
}

function Snake() {
	this.x = 10;
	this.y = 10;
	this.direction;

	this.show = function() {
		fill(255);
		rect(this.x, this.y, 10, 10)
	}
}
