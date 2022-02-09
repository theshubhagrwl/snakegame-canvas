var snakeBoard = document.getElementById("canvas");
var snakeBoardCtx = snakeBoard.getContext("2d");

const board_border = "black";
const board_background = "white";
const snake_col = "lightblue";
const snake_border = "darkblue";

let dx = 10;
let dy = 0;

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
  setTimeout(() => {
    clearCanvas();
    drawSnake();
    moveSnake();
    main();
  }, 100);
  // clearCanvas();
  // drawSnake();
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

function moveSnake(dx, dy) {
  if (
    snake[0].x + dx < snakeBoard.width &&
    snake[0].y + dy < snakeBoard.height
  ) {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);
    snake.pop();
  }
}

function changeDirection(e) {
  const goingUp = dy === -10;
  const goingDown = dy === 10;
  const goingRight = dx === 10;
  const goingLeft = dx === -10;

  if (e.keyCode == "38" && !goingDown) {
    // up arrow
    dx = 0;
    dy = -10;
  } else if (e.keyCode == "40" && !goingUp) {
    // down arrow
    dx = 0;
    dy = 10;
  } else if (e.keyCode == "37" && !goingRight) {
    // left arrow
    dx = -10;
    dy = 0;
  } else if (e.keyCode == "39" && !goingLeft) {
    // right arrow
    dx = 10;
    dy = 0;
  }
}

window.addEventListener("keydown", changeDirection);
