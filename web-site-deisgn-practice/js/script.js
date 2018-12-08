var santaLogo = document.querySelector('.santa');
var checked = document.querySelector('#dropdown');
var navScroll = document.querySelector('.nav-bar')

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


// sticky nav bar on scroll
(function() {
    "use strict"

    // Get the navigation element

    var offset = navScroll.offsetTop
    var rect = navScroll.getBoundingClientRect()


    // Create a virtual element
    var virtualElement = document.createElement('div')
        // Style it by giving it the height of the header
    virtualElement.style.height = parseInt(rect.height) + 'px'


    // Create the function to be called on scroll
    var stick = function() {

        // Get the scroll
        var scroll = window.scrollY

        // check if the body element alreadyhas the stick class
        var isSticked = document.body.classList.contains('stick')

        // We do the operation if only the body element doesn't have the stick class
        // otherwise the scroll event consumes a lot of resourses
        if (scroll >= offset && !isSticked) {

            document.body.classList.add('stick')
            navScroll.style.width = parseInt(rect.width) + 'px'

            // We add a padding-top to compensiate the header's space
            // document.body.style.paddingTop = parseInt(rect.height) + 'px'

            // Using virtual element to replace of floating object
            navScroll.parentNode.insertBefore(virtualElement, navScroll)
        } else if (scroll <= offset && isSticked) {
            document.body.classList.remove('stick')
            navScroll.style.width = 'auto'

            // reset the padding if we added it
            // document.body.style.paddingTop = '0px'

            // Removing the virtual element
            var formerFirstChild = document.body.removeChild(virtualElement);
        }
    }

    // listen to the scroll
    window.addEventListener('scroll', stick)
})()

// smooth scroll