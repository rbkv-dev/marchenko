let field = {
  fieldSize: parseInt(localStorage.fieldSize) ? parseInt(localStorage.fieldSize) : 10,  
  minFieldSize: 7, 
  maxFieldSize: 20
}
localStorage.setItem('fieldSize', field.fieldSize);
let snake, food, score, level, snakeSpeed, changeSpeed, KEY_CODE, keyPressed, intervalID;

function startGame() {
  modal.style.display = 'none';
  snake = [{x: 3, y: 1},{x: 2, y: 1},{x: 1, y: 1}]; food = [];
  score = 0; level = 1;
  snakeSpeed = 500; changeSpeed = 30;
  KEY_CODE = 68; keyPressed = false;
  window.clearInterval(intervalID);  intervalID = null; 
  createPanel();
  createFood();
  drawField();
  gameLoop();
}

function pauseGame() {
  if (intervalID) {
    window.clearInterval(intervalID);
    intervalID = null;
  } else {
    gameLoop();
  }
}

function finishGame() {
	window.clearInterval(intervalID);  intervalID = null; 
  modal.style.display = 'flex';
  modal.innerHTML = `
  <div class="content">
    <div>You died!</div>
    <div>Score: ${score}</div>
    <button onclick="startGame()">Restart game</button>
  </div>
  `;
}

function createField(size) {
  root.innerHTML = '';
  root.style.gridTemplateRows = `repeat(${size}, 26px)`;
  root.style.gridTemplateColumns = `repeat(${size}, 26px)`;
  for (let i = 0; i < size*size; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    root.appendChild(cell);
  }
  let x = 0, y = 0; 
  document.querySelectorAll('.cell').forEach((cell) => {
    cell.setAttribute('col', x++ % size);
    cell.setAttribute('row', ~~(y++ / size));
  });
  startGame();
};
createField(field.fieldSize);

function randPosition() {return Math.round(Math.random() * (field.fieldSize - 1))};

function createFood() {
  let foodX = randPosition(); foodY = randPosition();
  if (
    !snake.some(e => e.x === foodX && e.y === foodY) &
    !food.some(e => e.x === foodX && e.y === foodY)
  ) {
    food.unshift({x: foodX, y: foodY});
  } else return createFood();
  if (food.length < 5) return createFood();
}

function drawField() {
  document.querySelectorAll('.cell').forEach((e) => {
    e.classList.remove('snake-head', 'snake-body', 'food');
    snake.forEach(e => {document.querySelector(`[col = "${e.x}"][row = "${e.y}"]`).classList.add('snake-body')});
    document.querySelector(`[col = "${snake[0].x}"][row = "${snake[0].y}"]`).classList.remove('snake-body');
    document.querySelector(`[col = "${snake[0].x}"][row = "${snake[0].y}"]`).classList.add('snake-head');
    food.forEach(e => {document.querySelector(`[col = "${e.x}"][row = "${e.y}"]`).classList.add('food')});   
  });
}

function snakeMove(x, y) {
  let foodItem = null;
  food = food.filter(e => {
    if (e.x === x && e.y === y) {
      foodItem = e;
      return false;
    } else return true;
  });
  if (snake.some(e => e.x === x && e.y === y) && !(snake.every(e => e.x === x) || snake.every(e => e.y === y))) {
    finishGame();
  }
  else if (foodItem) {
    snake.unshift(foodItem);
    score++;
    if (score % 10 === 0) {
      level >= 10 ? level : level++;
      snakeSpeed -= changeSpeed;
      window.clearInterval(intervalID);
      intervalID = null;
      gameLoop();
    }
    createPanel();
    createFood();
  } else {
    snake[snake.length - 1].x = x;
    snake[snake.length - 1].y = y;
    snake.unshift(snake.pop());
  }
  drawField();
  keyPressed = false;
}

function gameLoop() {
  intervalID = window.setInterval(() => { 
    window.onkeydown = event => { 
      if (event.keyCode === 27) startGame();
      if (event.keyCode === 32) pauseGame();
      if ([37, 38, 39, 40, 65, 87, 68, 83].includes(event.keyCode) && intervalID){
        if (KEY_CODE === 87 && event.keyCode === 83) return;
        if (KEY_CODE === 65 && event.keyCode === 68) return;
        if (KEY_CODE === 83 && event.keyCode === 87) return;
        if (KEY_CODE === 68 && event.keyCode === 65) return;
        if (KEY_CODE === 38 && event.keyCode === 40) return;
        if (KEY_CODE === 37 && event.keyCode === 39) return;
        if (KEY_CODE === 40 && event.keyCode === 38) return;
        if (KEY_CODE === 39 && event.keyCode === 37) return;
        if (!keyPressed) KEY_CODE = event.keyCode; 
        keyPressed = true;
      }
    }
    let x = snake[0].x; y = snake[0].y;
    switch (KEY_CODE) {
      case 87: case 38: snakeMove(x, y = y-1 < 0 ? field.fieldSize-1 : y-1); break; // up
      case 65: case 37: snakeMove(x = x-1 < 0 ? field.fieldSize-1 : x-1, y); break; // left
      case 83: case 40: snakeMove(x, y+1 >= field.fieldSize ? 0 : y+1); break; // down
      case 68: case 39: snakeMove(x+1 >= field.fieldSize ? 0 : x+1, y); break; // right
      default: break;
    }
  }, snakeSpeed);  
}

function createPanel() {
  panel.innerHTML = `
  <div class="game-info">
    <div class="score">Score: ${score}</div>
    <div class="lvl">Level: ${level}</div>
  </div>
  <div class="field-size">
    <button onclick="changeFieldSize(-1)">-</button>
    Field Size: ${field.fieldSize}
    <button onclick="changeFieldSize(1)">+</button>
  </div>
  `;
}

function changeFieldSize(change) {
  localStorage.fieldSize = parseInt(localStorage.fieldSize) + change;
  field.fieldSize = localStorage.fieldSize;
  if ((field.fieldSize > field.maxFieldSize) || (field.fieldSize < field.minFieldSize)) {
    localStorage.fieldSize = parseInt(localStorage.fieldSize) - change;
    field.fieldSize = localStorage.fieldSize;
  }
  createPanel();
  createField(field.fieldSize);
}

function alertFromJSFile() {
  alert( 'This function was called from JS file' );
}