var snakeCanvas = document.querySelector('#snake-canvas').getContext('2d');

var snakeList, foodList;
var width = 500;
var height = 500;
snakeCanvas.font = '20px Calibri';

var snakeBody = {
    width: 20,
    height: 20
};

var snakeFood = {
    width: 20,
    height: 20
};

var startGame = function() {
    snakeList = [
        { x: 220, y: 200 },
        { x: 210, y: 200 },
        { x: 200, y: 200 }
    ];

    foodList = [];
};