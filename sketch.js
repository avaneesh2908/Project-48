var bg,bg2,form,system,code,security;
var score = 0;
var gameState = "start";
var state;
var playAgain;
var star1, star2, star3;
var oneStar, twoStar, threeStar;
var star, noStar;
var hint = 0;

function preload() {
  bg= loadImage("prison.png");
  bg2 = loadImage("freeprison.png");
  noStar = loadImage("nostar.png");
  oneStar = loadImage("onestar.png");
  twoStar = loadImage("twostar.png");
  threeStar = loadImage("threestar.png");
}

function setup() {
  createCanvas(1200,500);
  security = new Security();
  system = new System();
}

function draw() {
  if(gameState == "start") {
    background(bg);
    clues();
    security.display();
    textSize(20);
    fill("white");
    text("Score: " + score, 50, 50);
    fill("red");
    text("Esacpe Prison - Riddles",450,50);
  }

  if(score >= 30 && state == 1) { 
    background(bg2);
    fill("black");
    textSize(40);
    text("You have escaped the prison",250, 200);
    stars = createSprite(200, 400, 10, 10);
    if(score == 30 || 35) {
      stars.addImage(oneStar);
      stars.scale = 0.5;
    }
    if(score == 40 || 45) {
      stars.addImage(twoStar);
      stars.scale = 0.5;
    }
    if(score == 50) {
      stars.addImage(threeStar);
      stars.scale = 0.5;
    }
  }
  else if(score <= 25 && state == 1) {
    textSize(28);
    fill("blue");
    text("You are still stuck in the prison",450, 230);
    star = createSprite(200, 400, 10, 10);
    star.addImage(noStar);
    star.scale = 0.5;
  }
  drawSprites();
}