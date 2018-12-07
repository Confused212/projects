var santaLogo = document.querySelector('.santa');

santaLogo.addEventListener('mousedown', function() {

    // creat random number to cycle through pictures
    var randomPic = Math.floor(Math.random() * 4);

    // get santa to go to random position upon mouse down
    santaLogo.src = "imgs/santa-" + randomPic + ".png";

});

santaLogo.addEventListener('mouseup', function() {

    // santa to back to normal position on mouse up
    santaLogo.src = "imgs/santa-0.png";

});