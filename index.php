<!DOCTYPE html>
<?php
header("Accept-Ranges: none");

?>
<html>
<head>
<script src="lib/crafty-min.js"></script>
<script src="src/game.js"></script>
<script src="src/components.js"></script>
<script src="src/scenes.js"></script>
<script>
window.score = <?php echo getScore(); ?>;
	
function onClick(prof)
{
	var table = document.getElementById('table');
	var div = document.getElementById('div');
	document.body.removeChild(table);
	document.body.removeChild(div);
	Crafty.audio.stop("background");
	
	Game.start();
}
function playMusic()
{	
		Crafty.audio.add({
		background: [ 'assets/finalD.mp3']
		})
		Crafty.audio.play('background', -1);
}

function newHighScore()
{
	var form = document.getElementById('submit');
	form.score.value = Game.score;
	form.submit();
}

window.addEventListener('load', playMusic());
</script>
</head>
<body>
<?php
function getScore() {
if(isset($_POST ['score']))
{
$score = $_POST ['score'];
$f = fopen("HighScore.txt", "w");

fwrite( $f, $score );
fclose($f);
return $score;
}


else
{
$f = fopen("HighScore.txt", "r");
$score = (int)fgets($f); 
fclose($f);
return $score;
}
}
?>
<div id= 'div' align= 'center'>
<img src= "assets/Aced.png">
</div>
<table id= "table" align= "center">
<tr>
<td id ="highscore" colspan = 5 align = 'center'>High Score: <?php echo getScore(); ?></td>
</tr>
<tr>
<td><button value = "assets/benton.jpg" onclick= "onClick(this)"><img src = "assets/benton.jpg"></button></td>
<td><button value = "assets/rad.jpg" onclick= "onClick(this)"><img src = "assets/rad.jpg"></button></td>
<td><button value = "assets/teate.jpg" onclick= "onClick(this)"><img src = "assets/teate.jpg"></button></td>
<td><button value = "assets/altaii.jpg" onclick= "onClick(this)"><img src = "assets/altaii.jpg"></button></td>
<td><button value = "assets/anne.jpg" onclick= "onClick(this)"><img src = "assets/anne.jpg"></button></td>
</tr>
<tr>
<td colspan = 5 align = 'center'>Click a Professor to Start</td>
</tr>
<tr>
<td colspan = 5 align = 'center'>Move with the Arrow Keys. Shoot with the Mouse Button.</td>
</tr>
<tr>
<td colspan = 5 align = 'center'>Get the 'A' at the End of Each Level! </td>
</tr>
</table>
<form id= "submit" method= "post" action= "index.php">
<input type="hidden" name= "score" value = "" >
</form>

</body>
</html>