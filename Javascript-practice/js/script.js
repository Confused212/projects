var santaLogo = document.querySelector('.santa');
var checked = document.querySelector('#dropdown');

// santa logo to spin when clicked
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

// select check box menu and change font as per select item

document.getElementById('font').addEventListener('change', function() {
    // select the all P elements
    var elems = document.querySelectorAll('p');

    // loop through all P elements to update font
    for (var i = 0; i < elems.length; i++) {
        // update font
        elems[i].style.fontFamily = this.value;
    }
}, false);