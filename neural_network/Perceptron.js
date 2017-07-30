function Perceptron(input_count, learning_rate) {
    this.input_count   = input_count; // the number of inputs going into this perceptron
    this.weights       = new Array(input_count);
    this.learning_rate = learning_rate; // a good start is 0.1
    // initialize random weights between -1 and 1 
    for (var i = 0; i < this.input_count; i++) {
        this.weights[i] = (Math.random() * 2) - 1;
    }

    // inputs are the features of the datapoints
    // checks to see if the weigted features cross the activation function threshold
    this.guess = function (inputs) {
        return this.activationFunction(this.sum(inputs));
    }

    // defining the activation function for this perceptron
    this.activationFunction = function (sum) {
        if (sum >= 0) {
            return 1;
        } else {
            return -1;
        }
    }

    // inputs are the features of the datapoints
    // returns the sum (w_1*f_1) + (w_2*f_2) + ... + (w_n*f_n)
    this.sum = function (inputs) {
        sum = 0;
        for (var i = 0; i < inputs.length; i++) {
            sum += inputs[i] * this.weights[i];
        }
        return sum;
    }

    // inputs are the features of a datapoint, the target is the true value
    // error will be -2 (wrong -1 - 1), 0 (right), or 2 (1 - -1)
    this.train = function (inputs, target) {
        var guess = this.guess(inputs);
        var error = target - guess;

        // tune all the weights
        for (var i = 0; i < this.weights.length; i++) {
            this.weights[i] += error * inputs[i] * this.learning_rate;
        } 
    }
}

// dummy class to play with
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
        ellipse(this.x, this.y, 16, 16);
    }
}





















