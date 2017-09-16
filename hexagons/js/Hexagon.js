






function Hexagon (x, y, radius, val) {
    this.x      = x;
    this.y      = y;
    this.radius = radius;
    this.val    = val;
    this.origin = [this.x, this.y];
    this.p1     = [this.x - this.radius, this.y];
    this.p2     = [this.x - this.radius + this.radius*cos(TWO_PI/6), this.y - this.radius*sin(TWO_PI/6)];
    this.p3     = [this.x - this.radius + this.radius*cos(TWO_PI/6) + this.radius, this.y - this.radius*sin(TWO_PI/6)];
    this.p4     = [this.x + this.radius, this.y];
    this.p5     = [this.x - this.radius + this.radius*cos(TWO_PI/6) + this.radius, this.y + this.radius*sin(TWO_PI/6)];
    this.p6     = [this.x - this.radius + this.radius*cos(TWO_PI/6), this.y + this.radius*sin(TWO_PI/6)];
    this.points = [this.p1, this.p2, this.p3, this.p4, this.p5, this.p6];

    // draws the outline of this hexagon
    this.drawOutline = function () {
        // these lines are going to be light blue
        stroke(201, 216, 242);
        for (var i = 0; i < 5; i++) {
            line(this.points[i][0], this.points[i][1], this.points[i+1][0], this.points[i+1][1]);
        }
        // draw the last line from point 6 back to point 1
        line(this.p6[0], this.p6[1], this.p1[0], this.p1[1]);
    }

    // draws the hexagonal represantation of this numerical value
    this.drawValue = function (value) {
        // these lines are going to be black
        stroke(0, 0, 0);
        if (value >= 32) {
            this.draw32();
            value -= 32;
        }
        if (value >= 16) {
            this.draw16();
            value -= 16;
        }
        if (value >= 8) {
            this.draw8();
            value -= 8;
        }
        if (value >= 4) {
            this.draw4();
            value -= 4;
        }
        if (value >= 2) {
            this.draw2();
            value -= 2; 
        }
        if (value >= 1) {
            this.draw1();
            value -= 1; 
        }
    }

    this.draw1 = function () {
        line(this.origin[0], this.origin[1], this.p2[0], this.p2[1]);
    }

    this.draw2 = function () {
        line(this.origin[0], this.origin[1], this.p3[0], this.p3[1]);
    }

    this.draw4 = function () {
        line(this.origin[0], this.origin[1], this.p4[0], this.p4[1]);
    }

    this.draw8 = function () {
        line(this.origin[0], this.origin[1], this.p5[0], this.p5[1]);
    }

    this.draw16 = function () {
        line(this.origin[0], this.origin[1], this.p6[0], this.p6[1]);
    }

    this.draw32 = function () {
        line(this.origin[0], this.origin[1], this.p1[0], this.p1[1]);
    }

}