var hypnoticBall, database;
var position;


function setup() {
  console.log(database);
  createCanvas(500, 500);

  hypnoticBall = createSprite(250, 250, 10, 10);
  hypnoticBall.shapeColor = "red";

}

function draw() {
  background("white");

  if (keyDown(LEFT_ARROW)) {
    writePosition(-1, 0);
  }
  else if (keyDown(RIGHT_ARROW)) {
    writePosition(1, 0);
  }
  else if (keyDown(UP_ARROW)) {
    writePosition(0, -1);
  }
  else if (keyDown(DOWN_ARROW)) {
    writePosition(0, +1);
  }
  drawSprites();

}

function writePosition(x, y) {
  hypnoticBall.x = hypnoticBall.x + x;
  hypnoticBall.y = hypnoticBall.y + y;
}

function readPosition(data) {

}

function showError() {
  console.log("Error al escribir en la base de datos");
}
