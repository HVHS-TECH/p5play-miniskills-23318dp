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
	ball_1 = new Sprite(width/2, height/2, 50, 'd');
	ball_1.color = 'cyan';
	ball_1.vel.x = 2;
	ball_1.bounciness = 100;
	ball_1.friction = 10;
	ball_1.drag = 10;
	

	goatmilk = new Sprite(100, 100, 100, 100, 'd');
	blue.color = 'blue';
	circle = new Sprite(100, 100, 100, 'd');
	circle.color = 'cyan';
	circle.vel.x = 2;
    circle.bounciness = 100;
	circle.friction = 10;
	circle.drag = 10;
	green.color = 'green';
	goatmilk.rotationSpeed = 2;
	goatmilk.vel.x = 2;
	world.gravity.y = 10;
	for (i = 0; i < 100; i++) {

		randNum = random(6, 8);
  alien = new Sprite(ranNum(100,50),ranNum(100,500),ranNum(50,50));

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