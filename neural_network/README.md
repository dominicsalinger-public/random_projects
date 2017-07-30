NOTES:

Perceptron:
Inputs go into the perceptron. They get multiplied by their weights.  That sum
gets passed into an activation function, which translates to the number to 
something that is useful (should the neuron fire or not fire).
1) Perceptron sums inputs and weights
    - (x_0*w_0) + (x_1*w_1) + ... + (x_n*w_n)
2) Activation function
    - Configures output in range.  Maybe you only want +1 and -1 to outputted by perceptron
        - Activation function would be < | > 0

Supervised learning (high level):
1) Provide perceptron with inputs for which there is a known answer
2) Ask the perceptron to guess an answer
3) Compute the error (did it get the answer right or wrong)
4) Adjust the weights according to the error
5) Repeat from step 1

Adjusting weights:
∆weight = error * input * learning_rate
new weight = weight + error + input