Crafty.scene('Loading', function(){
//Crafty.load([ "assets/teate.jpg", "assets/benton.jpg",  'assets/fail.png', "assets/rad.jpg", "assets/anne.jpg",'assets/player.png', "assets/altaii.jpg",
//'assets/explosion.jpg', 'assets/explosion.mp3', 'assets/gameover.mp3']
//, function(){


Crafty.sprite(16, "assets/teate.jpg", {
Teate: [0, 0, 5, 5]
});

Crafty.sprite(16, "assets/benton.jpg", {
Benton: [0, 0, 5, 5]
});

Crafty.sprite(16, "assets/rad.jpg", {
Radziwill: [0, 0, 5, 5]
});

Crafty.sprite(16, "assets/anne.jpg", {
Dr_H: [0, 0, 5, 5]
});

Crafty.sprite(16, "assets/altaii.jpg", {
Altaii: [0, 0, 5, 5]
});

Crafty.sprite(16, 'assets/explosion.jpg', {
spr_explosion: [0, 0, 5, 5]
});

Crafty.sprite(16, 'assets/fail.png', {
spr_fail: [0, 0, 2, 2]
});

Crafty.sprite(16, 'assets/gradeC.png', {
spr_c: [0, 0, 2, 2]
});

Crafty.sprite(16, 'assets/gradeA.png', {
spr_a: [0, 0, 3, 4]
});

Crafty.sprite(16, 'assets/player.png', {
spr_player: [0, 0, 5, 5]
});

Crafty.sprite(16, 'assets/bullet.png', {
spr_bullet: [0, 0, 1, 1]
});


Crafty.audio.add({

explosion: [ 'assets/explosion.mp3' ],

});

Crafty.background('url(assets/space.gif)');

var scoreBoard = Crafty.e('2D, DOM, Text, Persist')
.attr({ x: Crafty.viewport.width/2 - 40, y: Crafty.viewport.height - 20})
.textFont({size: '20px'})
.textColor("#FFCC33");

Crafty.bind("EnterFrame", function() {
scoreBoard.text("Score:" + Game.score);
});

Crafty.scene('GetReady');
});


Crafty.scene('Level1', function() {

Crafty.audio.play("background", -1);



var professor = Crafty.e('Prof')
.at(Crafty.viewport.width/2 - 40, 0);

professor.bind("EnterFrame", function(){
	
	this.displayHealth.text(Game.prof + ":" + professor.health);
	if (Math.random() < 0.1 * Game.frMultiplier && Game.pause == false) {
	
		if (professor.grade == "f")
		{
		Crafty.e('Grade, spr_fail')
		.at(professor._x, professor._y + 5);
		}
		else
		{
		Crafty.e('Grade, spr_c')
		.at(professor._x, professor._y + 5);
		}
	}
	
	if (this.health <= 0) {
	
	var explosion= Crafty.e('spr_explosion, Actor, Tween')
	.at(professor._x, professor._y)
	.attr({ w: Game.map_grid.tile.width * 5, h: Game.map_grid.tile.height * 5});
	
	Crafty.audio.stop("background");
	Crafty.audio.play('explosion');
	
	Crafty.e('A')
		.at(professor._x, professor._y + 5);
	this.destroy();
	
	explosion.tween({alpha: 0}, 1000); 
	
	Crafty.removeEvent(player, Crafty.stage.elem, "mousedown", player.shoot);
	if ( player.died == false)
	{
	Game.level = 2;
	Game.prof = "Radziwill";
	Game.healthMultiplier = 1.5;
	setTimeout(function() {  Crafty.scene("GetReady"); }, 5000);
	}
	}
	
	
});



var player= Crafty.e('Player')
.at(Crafty.viewport.width/2 - 40, Crafty.viewport.height - 80);
player.bind("EnterFrame", function(){
player.displayHealth.text("You:" + player.health);
	if (this.health <= 0)
	{
	player.died = true;
	var explosion= Crafty.e('spr_explosion, Actor, Tween')
	.at(player._x, player._y)
	.attr({ w: Game.map_grid.tile.width * 5, h: Game.map_grid.tile.height * 5});
	
	explosion.tween({alpha: 0}, 1000);
	
	this.destroy();
	setTimeout(function(){ Crafty.scene('GameOver')}, 5000);	
	}
})
.onHit("A", function(data) {
	Crafty.e('message')
	.text(player.message)
	.textColor('#FFCC33');
grade = data[0].obj;
grade.destroy();
});
player.died = false;
player.shoot = function() {

if (Game.shoot = true && Game.pause == false)
{
	Crafty.e("bullet")
	.at(player._x, player._y);
}
};

Crafty.addEvent(player, Crafty.stage.elem, "mousedown", player.shoot);


});

Crafty.scene('Level2', function() {


Crafty.audio.play("background", -1);
var professor = Crafty.e('Prof')
.at(Crafty.viewport.width/2 - 40, 0);
professor.bind("EnterFrame", function(){

	this.displayHealth.text(Game.prof + ":" + professor.health);

	if (Math.random() < 0.1 * Game.frMultiplier && Game.pause == false) {
	
	 if (professor.grade == "f")
		{
		Crafty.e('Grade, spr_fail')
		.at(professor._x, professor._y + 5);
		}
		else
		{
		Crafty.e('Grade, spr_c')
		.at(professor._x, professor._y + 5);
		}
	}
	
	if (this.health <= 0) {
	
	var explosion= Crafty.e('spr_explosion, Actor, Tween')
	.at(professor._x, professor._y)
	.attr({ w: Game.map_grid.tile.width * 5, h: Game.map_grid.tile.height * 5});
	
	Crafty.audio.stop("background");
	Crafty.audio.play('explosion');
	
	Crafty.e('A')
		.at(professor._x, professor._y + 5);
	this.destroy();
	
	explosion.tween({alpha: 0}, 1000); 
	
	Crafty.removeEvent(player, Crafty.stage.elem, "mousedown", player.shoot);
	if ( player.died == false)
	{
	Game.level = 3;
	Game.prof = "Teate";
	Game.speedMultiplier = 1.5;
	setTimeout(function() {  Crafty.scene("GetReady"); }, 5000);
	}
	}
});



var player= Crafty.e('Player')
.at(Crafty.viewport.width/2 - 40, Crafty.viewport.height - 80 )
.bind("EnterFrame", function(){
player.displayHealth.text("You:" + player.health);
	if (this.health <= 0)
	{
		player.died = true;
		var explosion= Crafty.e('spr_explosion, Actor, Tween')
	.at(player._x, player._y)
	.attr({ w: Game.map_grid.tile.width * 5, h: Game.map_grid.tile.height * 5});
	
	explosion.tween({alpha: 0}, 1000);
	
	this.destroy();
	setTimeout(function(){ Crafty.scene('GameOver')}, 5000);	
	}
})
.onHit("A", function(data) {
	Crafty.e('message')
	.text(player.message)
	.textColor('#FFCC33');
grade = data[0].obj;
grade.destroy();
});
player.died = false;
player.shoot = function() {
if (Game.shoot = true && Game.pause == false)
{
Crafty.e("bullet")
.at(player._x, player._y);
}
};

Crafty.addEvent(player, Crafty.stage.elem, "mousedown", player.shoot);


 

});

Crafty.scene('Level3', function() {



Crafty.audio.play("background", -1);
var professor = Crafty.e('Prof')
.at(Crafty.viewport.width/2 - 40, 0);
professor.bind("EnterFrame", function(){

	this.displayHealth.text(Game.prof + ":" + professor.health);
	

	if (Math.random() < 0.1 * Game.frMultiplier && Game.pause == false) {
	
	 if (professor.grade == "f")
		{
		Crafty.e('Grade, spr_fail')
		.at(professor._x, professor._y + 5);
		}
		else
		{
		Crafty.e('Grade, spr_c')
		.at(professor._x, professor._y + 5);
		}
	}
	
	if (this.health <= 0) {
	
	var explosion= Crafty.e('spr_explosion, Actor, Tween')
	.at(professor._x, professor._y)
	.attr({ w: Game.map_grid.tile.width * 5, h: Game.map_grid.tile.height * 5});
	
	Crafty.audio.stop("background");
	Crafty.audio.play('explosion');
	
	Crafty.removeEvent(player, Crafty.stage.elem, "mousedown", player.shoot);
	Crafty.e('A')
		.at(professor._x, professor._y + 5);
	this.destroy();
	
	explosion.tween({alpha: 0}, 1000); 
	
	Crafty.removeEvent(player, Crafty.stage.elem, "mousedown", player.shoot);
	if ( player.died == false)
	{
	Game.level = 4;
	Game.prof = "Altaii";
	setTimeout(function() {  Crafty.scene("GetReady"); }, 5000);
	}
	}
});



var player= Crafty.e('Player')
.at(Crafty.viewport.width/2 - 40, Crafty.viewport.height - 80)
.bind("EnterFrame", function(){
player.displayHealth.text("You:" + player.health);
	if (this.health <= 0)
	{
		player.died = true;
		var explosion= Crafty.e('spr_explosion, Actor, Tween')
	.at(player._x, player._y)
	.attr({ w: Game.map_grid.tile.width * 5, h: Game.map_grid.tile.height * 5});
	
	explosion.tween({alpha: 0}, 1000);
	
	this.destroy();
	setTimeout(function(){ Crafty.scene('GameOver')}, 5000);	
	}
})
.onHit("A", function(data) {
	Crafty.e('message')
	.text(player.message)
	.textColor('#FFCC33');
grade = data[0].obj;
grade.destroy();
});
player.died = false;
player.shoot = function() {
	if (Game.shoot == true && Game.pause == false )
	{

	Crafty.e("bullet")
	.at(player._x, player._y);

	}
}

Crafty.addEvent(player, Crafty.stage.elem, "mousedown", player.shoot);
})

Crafty.scene('Level4', function() {


Crafty.audio.play("background", -1);
var professor = Crafty.e('Prof')
.at(Crafty.viewport.width/2 - 40, 0);
professor.bind("EnterFrame", function(){

	this.displayHealth.text(Game.prof + ":" + professor.health);

	if (Math.random() < 0.1 * Game.frMultiplier && Game.pause == false) {
	
	 if (professor.grade == "f")
		{
		Crafty.e('Grade, spr_fail')
		.at(professor._x, professor._y + 5);
		}
		else
		{
		Crafty.e('Grade, spr_c')
		.at(professor._x, professor._y + 5);
		}
	}
	
	if (this.health <= 0) {
	
	var explosion= Crafty.e('spr_explosion, Actor, Tween')
	.at(professor._x, professor._y)
	.attr({ w: Game.map_grid.tile.width * 5, h: Game.map_grid.tile.height * 5});
	
	Crafty.audio.stop("background");
	Crafty.audio.play('explosion');
	
	Crafty.e('A')
		.at(professor._x, professor._y + 5);
	this.destroy();
	
	explosion.tween({alpha: 0}, 1000); 
	
	Crafty.removeEvent(player, Crafty.stage.elem, "mousedown", player.shoot);
	if ( player.died == false)
	{
	Game.level = 5;
	Game.prof = "Dr_H";
	Game.frMultipler = 1.2;
	setTimeout(function() {  Crafty.scene("GetReady"); }, 5000);
	}
	}
});



var player= Crafty.e('Player')
.at(Crafty.viewport.width/2 - 40, Crafty.viewport.height - 80 )
.bind("EnterFrame", function(){
player.displayHealth.text("You:" + player.health);
	if (this.health <= 0)
	{
		player.died = true;
		var explosion= Crafty.e('spr_explosion, Actor, Tween')
	.at(player._x, player._y)
	.attr({ w: Game.map_grid.tile.width * 5, h: Game.map_grid.tile.height * 5});
	
	explosion.tween({alpha: 0}, 1000);
	
	this.destroy();
	setTimeout(function(){ Crafty.scene('GameOver')}, 5000);	
	}
})
.onHit("A", function(data) {
	Crafty.e('message')
	.text(player.message)
	.textColor('#FFCC33');
grade = data[0].obj;
grade.destroy();
});
player.died = false;
player.shoot = function() {
if (Game.shoot = true && Game.pause == false)
{
Crafty.e("bullet")
.at(player._x, player._y);
}
};

Crafty.addEvent(player, Crafty.stage.elem, "mousedown", player.shoot);


 

});

Crafty.scene('Level5', function() {

var rand;
Crafty.audio.play("background", -1);
var professor = Crafty.e('Prof')
.at(Crafty.viewport.width/2 - 40, 0);
professor.bind("EnterFrame", function(){

	this.displayHealth.text(Game.prof);

	rand = Math.random();
	if ( rand < 0.1 * Game.frMultiplier && Game.pause == false) {
	
		if (rand < 0.06)
		{
		Crafty.e('Grade, spr_fail')
		.at(professor._x, professor._y + 5);
		}
		else
		{
		Crafty.e('Grade, spr_c')
		.at(professor._x, professor._y + 5);
		}
	}
	
});



var player= Crafty.e('Player')
.at(Crafty.viewport.width/2 - 40, Crafty.viewport.height - 80 )
.bind("EnterFrame", function(){
player.displayHealth.text("You:" + player.health);
	if (this.health <= 0)
	{
		var explosion= Crafty.e('spr_explosion, Actor, Tween')
	.at(player._x, player._y)
	.attr({ w: Game.map_grid.tile.width * 5, h: Game.map_grid.tile.height * 5});
	
	explosion.tween({alpha: 0}, 1000);
	
	this.destroy();
	setTimeout(function(){ Crafty.scene('GameOver')}, 5000);
	}
})
.onHit("A", function() {
	Crafty.e('message')
	.text(player.message)
	.textColor('#FFCC33');
})
player.shoot = function() {
if (Game.shoot = true && Game.pause == false)
{
Crafty.e("bullet")
.at(player._x, player._y);
}
};

Crafty.addEvent(player, Crafty.stage.elem, "mousedown", player.shoot);


 

});

Crafty.scene("GetReady", function ()
{
var message= Crafty.e('message')
		.text('Level' + ' ' + Game.level )
		.textColor('#FFCC33');
Crafty.e('displayProf')
.at(Game.width()/2 - 40, message.y + 40);
		
setTimeout(function(){Crafty.scene("Level"+ Game.level)}, 3000);

})

Crafty.scene("GameOver", function ()
{

var message = Crafty.e('message')
		.textColor('#FF0000');
var delay = true;
setTimeout(function() { delay = false; }, 2000);

if (window.score < Game.score)
{
	message.text('You flunked out! <br>' + 'New High Score = ' + Game.score + '<br>Press any key submit your score');

		this.bind('KeyDown', function() {
		newHighScore();
		});
	
}
else	
{
	message.text('You flunked out! <br>' + 'Your Score was: ' + Game.score + '<br>Press any key to play again')
	this.bind('KeyDown', function() {
		if (!delay){
		Game.score = 0;
		Game.healthMultiplier = 1;
		Game.frMultiplier = 1;
		Game.speedMultiplier = 1;
		Game.healthBoost = 1;
		Game.speedBoost = 1;
		Game.prof = "Benton";
		Crafty.scene('Level1');
		}
	});
}
},
function() {
this.unbind('KeyDown');
})






