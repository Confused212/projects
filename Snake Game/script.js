var snakeCanvas = document.querySelector('#snake-canvas').getContext('2d');

var snakeList, foodList;
var WIDTH = 500;
var HEIGHT = 500;
snakeCanvas.font = '20px Ariel';

var snakeBody = {
    width: 20,
    height: 20,
    color: 'green'
};

var snakeFood = {
    width: 20,
    height: 20,
    color: 'blue'
};

function snake(sb, i) {
    snakeCanvas.save();
    if (i == 0) {
        snakeCanvas.fillStyle = 'black';
    } else {
        snakeCanvas.fillStyle = snakeBody.color;
        snakeCanvas.fillRect(sb.x, sb.y, snakeBody.width, snakeBody.height);

        snakeCanvas.restore();

    }
};

function food(f, i) {
    snakeCanvas.save();
    snakeCanvas.fillStyle = snakeFood.color;
    snakeCanvas.fillRect(f.x, f.y, snakeFood.width, snakeFood.height);
    snakeCanvas.restore();
};

function startGame() {
    snakeList = [
        { x: 220, y: 200 },
        { x: 210, y: 200 },
        { x: 200, y: 200 }
    ];

    foodList = [];

    snakeList.forEach(snake);
};

startGame();