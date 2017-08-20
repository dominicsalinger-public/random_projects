// Cell object that the grid is made of
function Cell (i, j) {
	this.x       = i;
	this.y       = j;
	this.visited = false;

	// initializes some variables
	this.init = function () {
		this.top_neighbor    = grid[index(this.x, this.y - 1)];
		this.right_neighbor  = grid[index(this.x + 1, this.y)];
		this.bottom_neighbor = grid[index(this.x, this.y + 1)];
		this.left_neighbor   = grid[index(this.x - 1, this.y)];
		this.right_wall      = true;
		this.top_wall        = true;
		this.bottom_wall     = true;
		this.left_wall       = true;
	}

	// removes a specified wall for this cell
	this.removeWall = function (wall) {
		if (wall == "right") {
			this.right_wall = false;
		} else if (wall == "top") {
			this.top_wall = false;
		} else if (wall == "bottom") {
			this.bottom_wall = false;
		} else {
			this.left_wall = false;
		}
	}

	// draws this cell
	this.show = function () {
		var x = this.x * w;
		var y = this.y * w;
		stroke(255);

		// draw the walls of the cell
		if (this.top_wall) {
			// top line
			line(x, y, x + w, y);
		}
		if (this.right_wall) {
			// right line
			line(x + w, y, x + w, y + w);
		}
		if (this.bottom_wall) {
			// bottom line
			line(x , y + w, x + w, y + w);
		}
		if (this.left_wall) {
			// left line
			line(x, y , x, y + w);
		}

		if (this.visited) {
			noStroke();
			this.updateColor(255, 0, 255, 100);
			rect(x, y, w, w);
		}
	}

	this.updateColor = function (a, b, c, d) {
		fill(a, b, c, d);
	}

	// checks whether the neighbors of this cell have been visited
	// returns a random non-visited neighbor cell or undefined
	this.checkNeighbors = function () {
		var neighbors = [];

		// check to see which neighbors can be visited
		if (this.top_neighbor && !this.top_neighbor.visited) {
			neighbors.push(this.top_neighbor);
		}
		if (this.right_neighbor && !this.right_neighbor.visited) {
			neighbors.push(this.right_neighbor);
		}
		if (this.bottom_neighbor && !this.bottom_neighbor.visited) {
			neighbors.push(this.bottom_neighbor);
		}
		if (this.left_neighbor && !this.left_neighbor.visited) {
			neighbors.push(this.left_neighbor);
		}

		if (neighbors.length  > 0) {
			var r = floor(random(0, neighbors.length));
			return neighbors[r];
		} else {
			return undefined;
		}
	}

	// highlights the current cell a different color
	this.highlight = function () {
		var x = this.x*w;
		var y = this.y*w;
		noStroke();
		this.updateColor(0, 0, 255, 100);
		rect(x, y, w, w);
	}
}



