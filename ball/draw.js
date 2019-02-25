console.log("check")

// setup canvas

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

// function to generate random number

function random(min,max) {
  var num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}

// Ball object
function Ball(x, y, velX, velY, color, size){
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
}

// Draw the ball
Ball.prototype.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
}

var testBall = new Ball(50, 100, 4, 4, 'blue', 10);

// Update the ball's data
Ball.prototype.update = function(){
    if((this.x + this.size) >= width){
        this.velX = -(this.velX)
    }
    if((this.x - this.size) <= 0){
        this.velX = -(this.velX)
    }
    if((this.y + this.size) >= height){
        this.velY = -(this.velY)
    }
    if((this.y - this.size) <= 0){
        this.velY = -(this.velY)
    }
    this.x += this.velX;
    this.y +=this.velY
}

// animation
var balls = [];
function loop(){
    ctx.fillStyle = 'rgba(0,0,0,0.25)'
    ctx.fillRect(0,0,width,height)
}