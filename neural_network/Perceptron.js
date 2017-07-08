function Perceptron(input_count) {
    this.input_count = input_count; // the number of inputs going into this perceptron
    this.weights = new Array(input_count);
    for (var i = 0; i < this.input_count; i++) {
        // generate a random number between -1 and 1
        this.weights[i] = Math.random * (2) - 1;
    }

    this.guess = function (inputs) {
        return this.activationFunction(this.sum(inputs));
    }

    this.activationFunction = function (sum) {
        if (sum >= 0) {
            return 1;
        } else {
            return -1;
        }
    }

    this.sum = function (inputs) {
        sum = 0;
        for (var i = 0; i < this.inputs.length; i++) {
            sum += inputs[i] * this.weights[i];
        }
        return sum;
    }
}

function Point(x, y) {
    this.x = x;
    this.y = y;
    this.label;

    if (this.x > this.y) {
        this.label = 1;
    } else {
        this.label = -1;
    }

    this.show = function () {
        stroke(0);
        if (this.label == 1) {
            fill(255);
        } else {
            fill(0);
        }
        ellipse(this.x, this.y, 8, 8);
    }
}





















