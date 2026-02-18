/*******************************************************/
// P5.play: t20_load_images
// load & display images
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function preload() {

  imgBG   = loadImage('../assets/images/space.png');

  imgFace = loadImage('../assets/images/face.png');

}

function setup() {
	console.log("setup: ");
	cnv = new Canvas(1000, 1000);
	wallLH  = new Sprite(0, height/2, 8, height, 'k');
	wallLH.color = 'black';
	wallRH  = new Sprite(1000, 500, 100, 1000, 'k');
	wallTop = new Sprite(500, 0, 1000, 100, 'k');
	wallBot = new Sprite(500, 1000, 1000, 100, 'k');
	world.gravity.y = 10;
	alienGroup = new Group();



	Circle1 = new Sprite(width/2, height/2, 50, 'd');
	Circle1.bounciness = 1;
	Circle1.friction   = 0;
	Circle1.image = (imgFace);
	imgFace.resize(50, 50);


		
 
    for (i = 0; i < 100; i++) {
    alien = new Sprite(width / 2, height / 2, 50, 50, 'd');
    alien.vel.x = random();
    alien.vel.y = random();
    alien.bounciness = 1;
    alien.friction = 0;
    const VELARRAY = [-1, 1];
    randNum = random(4, 7) * random(VELARRAY);
	alienGroup.add(alien);
	
}
     
}	
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background(imgBG); 
	alienGroup.collides(Circle1, func2Call);
    function func2Call(_ssss,_Circle1) {
    _ssss.remove();

    }
	if (mouse.presses()) {
        
        Circle1.moveTo(random(0, 1000), 0, 5);

    }
}

/*******************************************************/
//  END OF APP
/*******************************************************/