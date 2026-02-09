/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
/// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(1000, 1000);
	wallLH  = new Sprite(0, height/2, 8, height, 'k');
	wallLH.color = 'black';
	wallRH  = new Sprite(1000, 500, 100, 1000, 'k');
	wallTop = new Sprite(500, 0, 1000, 100, 'k');
	wallBot = new Sprite(500, 1000, 1000, 100, 'k');
	randNum = random(6, 8);
	world.gravity.y = 10;
	for (i = 0; i < 100; i++) {

		
  alien = new Sprite(random(6,8),random(6,8),random(6,8));

  alien.vel.x = 3;

  alien.vel.y = 4;

  alien.bounciness = 1;

  alien.friction = 0;

}
	
	
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('black');
}

/*******************************************************/
//  END OF APP
/*******************************************************/