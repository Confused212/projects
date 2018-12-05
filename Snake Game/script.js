var snakeCanvas = document.querySelector('#snake-canvas').getContext('2d');

var snakeList, foodList, direction, eaten;
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

document.onkeydown = function(event) {

    if (event.keyCode == 37) {
        // if direction - 0 = left
        direction = 0;
    } else if (event.keyCode == 38) {
        // if direction - 1 = up
        direction = 1;
    } else if (event.keyCode == 39) {
        // if direction - 2 = right
        direction = 2;
    } else if (event.keyCode == 40) {
        // if direction - 3 = down
        direction = 3;
    }
};

function snake(sb, i) {
    snakeCanvas.save();
    if (i == 0)
        snakeCanvas.fillStyle = 'black';
    // add black head to body
    else
    // adds blocks tot the body
        snakeCanvas.fillStyle = snakeBody.color;
    snakeCanvas.fillRect(sb.x, sb.y, snakeBody.width, snakeBody.height);

    snakeCanvas.restore();


};

function foodCollect(rect1, rect2) {
    return ((rect1.x <= rect2.x + food.width) &&
        (rect2.x <= rect1.x + snakeBody.width) &&
        (rect1.y <= rect2.y + food.height) &&
        (rect2.y <= rect1.y + snakeBody.height));
};

function food(f, i) {
    snakeCanvas.save();
    snakeCanvas.fillStyle = snakeFood.color;
    snakeCanvas.fillRect(f.x, f.y, snakeFood.width, snakeFood.height);
    snakeCanvas.restore();
};

function updateSnakeList() {
    for (var i = snakeList.length - 1; i >= 0; i--) {
        // change the direction of the snake depending on what key you press
        if (direction == 0) {
            // left
            if (i == 0) {
                snakeList[i].x = snakeList[i].x - 5;
            } else {
                snakeList[i].x = snakeList[i - 1].x
                snakeList[i].y = snakeList[i - 1].y
            }

        } else if (direction == 1) {
            // up
            if (i == 0) {
                snakeList[i].y = snakeList[i].y - 5;
            } else {
                snakeList[i].x = snakeList[i - 1].x
                snakeList[i].y = snakeList[i - 1].y
            }

        } else if (direction == 2) {
            // right
            if (i == 0) {
                snakeList[i].x = snakeList[i].x + 5;
            } else {
                snakeList[i].x = snakeList[i - 1].x
                snakeList[i].y = snakeList[i - 1].y
            }

        } else if (direction == 3) {
            // down
            if (i == 0) {
                snakeList[i].y = snakeList[i].y + 5;
            } else {
                snakeList[i].x = snakeList[i - 1].x
                snakeList[i].y = snakeList[i - 1].y
            }
        }
    }
};

function checkSnakePosition() {
    if (snakeList[0].x > 500) {
        snakeList[0].x = 0;
    }
    if (snakeList[0].x < 0) {
        snakeList[0].x = 500;
    }
    if (snakeList[0].y > 500) {
        snakeList[0].y = 0;
    }
    if (snakeList[0].y < 0) {
        snakeList[0].y = 500;
    }
};

function updateSnakePosition() {
    snakeCanvas.clearRect(0, 0, WIDTH, HEIGHT);

    while (eaten) {
        var posx = Math.random() * 485 + 5;
        var posy = Math.random() * 485 + 5;
        foodList[0] = {
            x: posx,
            y: posy
        }
        eaten = false;
    }
    foodList.forEach(food);
    snakeList.forEach(snake);

    if (foodCollect(snakeList[0], foodList[0])) {
        foodList = [];
        eaten = true;
        var bodyx, bodyy;
        if (direction == 0) {
            bodyx = snakeList[0].x - 10;
            bodyy = snakeList[0].y;
        } else if (direction == 1) {
            bodyx = snakeList[0].x;
            bodyy = snakeList[0].y - 10;
        } else if (direction == 2) {
            bodyx = snakeList[0].x + 10;
            bodyy = snakeList[0].y;
        } else if (direction == 3) {
            bodyx = snakeList[0].x;
            bodyy = snakeList[0].y + 10;
        }
        snakeList.unshift({ x: bodyx, y: bodyy });
    }

    checkSnakePosition();
    updateSnakeList();
};

function startGame() {
    snakeList = [
        { x: 220, y: 200 },
        { x: 210, y: 200 },
        { x: 200, y: 200 }
    ];

    foodList = [];
    direction = 99;
    eaten = true;
    // controls the speed of the snake
    setInterval(updateSnakePosition, 20);

};

startGame();