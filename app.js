// Enemies 
var Enemy = function(x,y,speed) {
	"use strict";
	this.x=x;
	this.y=y;
	this.speed = Math.floor((Math.random()*100)+50);; //function bulit in javascript
    this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype.update = function(dt) {
	this.x +=this.speed*dt;
	if(this.x >= 505){//xis width in canvas of the secrean
			this.x=0;
		}
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//player 
var player = function (x,y,speed){
	this.x = x;
	this.y = y;
	this.speed = speed;
	this.sprite = 'images/char-horn-girl.png';
}

//update of player
player.prototype.update = function(dt){

}
//render function
player.prototype.render = function(){ 
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);}
//handlerinput function
player.prototype.handlerInput = function(onkeypress){
	if(onkeypress == 'left')
		{player.x = player.x - player.speed;}
	if(onkeypress == 'up')
		{player.y = player.y-player.speed -30;}
	if(onkeypress == 'right')
		{player.x = player.x + player.speed;}
	if(onkeypress == 'down')
		{player.x = player.x +player.speed -30;}
	
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];
for(var i=0; i<4; i++)
{var enemy = allEnemies.push(new Enemy);
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
