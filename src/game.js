Game = {
// This defines our grid's size and the size of each of its tiles
map_grid: {
width: 48,
height: 32,
tile: {
width: 16,
height: 16
}
},
 
// The total width of the game screen. Since our grid takes up the entire screen
// this is just the width of a tile times the width of the grid
width: function() {
return this.map_grid.width * this.map_grid.tile.width;
},
 
// The total height of the game screen. Since our grid takes up the entire screen
// this is just the height of a tile times the height of the grid
height: function() {
return this.map_grid.height * this.map_grid.tile.height;
},
score: 0,
prof: "Benton",
healthBoost: 1, //for player
speedBoost: 1,
healthMultiplier: 1, //for professor
speedMultiplier: 1,
frMultiplier: 1,
shoot: true,
pause: false,
level: 1, 

// Initialize and start our game
start: function() {

// Start crafty 
Crafty.init(Game.width(), Game.height());

//Crafty.timer.FPS(100);

 // Simply start the "Loading" scene to get things going
Crafty.scene('Loading' );


}
}

$text_css = { 'size': '40px', 'family': 'Arial'};
