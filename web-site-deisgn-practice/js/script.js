var santaLogo = document.querySelector('.santa');
var checked = document.querySelector('#dropdown');
var navScroll = document.querySelector('.nav-bar');
var btnAdd = document.querySelector('#add');
var btnRemove = document.querySelector('#remove');
var mapShow = document.querySelector('iframe');
var formHide = document.querySelector('fieldset');
var btnChange = document.querySelector('#buttons');

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

// smooth scroll using JQuery instead of CSS

// $(document).on('click', 'a[href^="#"]', function(event) {
//     event.preventDefault();

//     $('html, body').animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 1000);
// });

//show map

btnAdd.addEventListener('click', function() {

    // hide the form
    formHide.classList.add('hide');

    // show the map
    mapShow.classList.remove('hide');

});

// fade in map
$(document).ready(function() {
    $("#add").click(function() {
        $("form").fadeOut()
    });
    $("#add").click(function() {
        $("#fade").fadeIn(700);
    });
});

// show fieldset
btnRemove.addEventListener('click', function() {

    // show the form
    formHide.classList.remove('hide');

    // hide the map
    mapShow.classList.add('hide');

});

// fade-in fieldset
$(document).ready(function() {
    $("#remove").click(function() {
        $("#fade").fadeOut()
    });
    $("#remove").click(function() {
        $("form").fadeIn(1000);
    });
});


// remove styling from show button 
btnAdd.addEventListener('mousedown', function() {

    document.querySelector('input[name=btn-show]').classList.remove('btn-up');
    document.querySelector('input[name=btn-show]').classList.add('btn-dwn');

});

btnAdd.addEventListener('mouseup', function() {

    document.querySelector('input[name=btn-show]').classList.add('btn-up');
    document.querySelector('input[name=btn-show]').classList.remove('btn-dwn');

});

// remove styling from hide button 

btnRemove.addEventListener('mousedown', function() {

    document.querySelector('input[name=btn-hide]').classList.remove('btn-up')
    document.querySelector('input[name=btn-hide]').classList.add('btn-dwn')
});

btnRemove.addEventListener('mouseup', function() {
    document.querySelector('input[name=btn-hide]').classList.add('btn-up')
    document.querySelector('input[name=btn-hide]').classList.remove('btn-dwn')
});

document.querySelector('input[name=btn-form]').addEventListener('mousedown', function() {
    document.querySelector('input[name=btn-form]').classList.add('btn-down');
    document.querySelector('input[name=btn-form]').classList.remove('btn-up');

});

document.querySelector('input[name=btn-form]').addEventListener('mouseup', function() {
    document.querySelector('input[name=btn-form]').classList.remove('btn-down');
    document.querySelector('input[name=btn-form]').classList.add('btn-up');

});