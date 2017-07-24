var snake;
var food;
var max_height = 300;
var max_width = 400;
var score = 0;
var tail;

function setup() {
    createCanvas(max_width, max_height);
    frameRate(10);
    snake = tail = new Snake(10, 10);
    food = new Food();
}

function draw() {
    background(51);
    fill(255, 0, 100);

    if (snake.y > max_height || snake.y < 0 || snake.x > max_width || snake.x < 0) {
        game_over();
    }
    if (snake.child) {
        var cell = snake;
        while (cell.child) {
            if (cell.child.x == snake.x && cell.child.y == snake.y) {
                game_over();
            }
            cell = cell.child;
        }
    }
    if (snake.x == food.x && snake.y == food.y) {
        tail.child = new Snake(tail.x, tail.y);
        tail = tail.child;
        food = new Food();
        score++;
    }

    // every frame, update the coordinates of the snake
    if (!snake.pause) {
        snake.update(false, false);
    }
    food.show();
    text(score, 10, 10);
}

function Food() {
    this.x = floor(random(0, max_width) / 10) * 10;
    this.y = floor(random(0, max_height) / 10) * 10;

    this.show = function () {
        fill(255);
        rect(this.x, this.y, 10, 10);
    }
}

function Snake(x, y) {
    this.x = x;
    this.y = y;
    this.direction = "RIGHT";
    this.pause = false;
    this.previous_x = false;
    this.previous_y = false;
    this.child = false;

    this.update = function (x, y) {
        this.previous_x = this.x;
        this.previous_y = this.y;
        
        if (x == false && y == false) {
            this.compute_position();
        } else {
            this.x = x;
            this.y = y;
        }
        if (this.child) {
            this.child.update(this.previous_x, this.previous_y);
        }   
        this.show();
    }

    this.compute_position = function () {
        if (this.direction == "RIGHT") {
            this.x += 10;
        } else if (this.direction == "LEFT") {
            this.x -= 10;
        } else if (this.direction == "UP") {
            this.y -= 10;
        } else if (this.direction == "DOWN") {
            this.y += 10;
        }
    }

    this.show = function () {
        fill(70, 255, 0);
        rect(this.x, this.y, 10, 10)
    }
}

function game_over() {
    snake = tail = new Snake(10, 10);
    food = new Food();
    score = 0;
}

function keyPressed() {
    if (keyCode == LEFT_ARROW && snake.direction != "RIGHT") {
        snake.direction = "LEFT";
    } else if (keyCode == RIGHT_ARROW && snake.direction != "LEFT") {
        snake.direction = "RIGHT";
    } else if (keyCode == DOWN_ARROW && snake.direction != "UP") {
        snake.direction = "DOWN";
    } else if (keyCode == UP_ARROW && snake.direction != "DOWN") {
        snake.direction = "UP";
    } else if (keyCode == 32) {
        snake.pause = !snake.pause;
    }
}
