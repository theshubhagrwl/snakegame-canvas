var snakeBoard = document.getElementById("canvas");
var snakeBoardCtx = snakeBoard.getContext("2d");

const board_border = "black";
const board_background = "white";
const snake_col = "lightblue";
const snake_border = "darkblue";

//snake
let snake = [
  { x: 200, y: 200 },
  { x: 190, y: 200 },
  { x: 180, y: 200 },
  { x: 170, y: 200 },
  { x: 160, y: 200 },
];

main();

function main() {
  clearCanvas();
  drawSnake();
}

function clearCanvas() {
  snakeBoardCtx.fillStyle = board_background;
  snakeBoardCtx.strokeStyle = board_border;
  snakeBoardCtx.fillRect(0, 0, snakeBoard.width, snakeBoard.height);
  snakeBoardCtx.strokeRect(0, 0, snakeBoard.width, snakeBoard.height);
}

function drawSnakePart(snakePart) {
  snakeBoardCtx.fillStyle = "lightblue";
  snakeBoardCtx.strokeStyle = "darkblue";
  snakeBoardCtx.fillRect(snakePart.x, snakePart.y, 10, 10);
  snakeBoardCtx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function drawSnake() {
  snake.forEach((snakePart) => drawSnakePart(snakePart));
  // snake.forEach(drawSnakePart);
}
