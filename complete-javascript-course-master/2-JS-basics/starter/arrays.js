var names = ['kate', 'james', 'frank', 'allan', 'edward', 'peter'];
var mixed = [true, 1990, 35, false, [26, 17, 29, 41, 19, 59], 'confused'];

// console.log(mixed);
// console.log('-------------------');
// console.log(names);
// an array is 0 index based


/////////////////// ARRAY METHODS /////////////////////

// push, pop, shift, unshift, slice, length, indexof, splice

// adds items to the ends of an array
names.push('steven');
names.push('wendy');
// console.log(names.length);
// console.log(names);
// array now has to more names on the end of it


// removes items from the end of an array
names.pop();
names.pop();
// console.log(names.length);
// console.log(names);
// array back to only six names.


// removes item to the start of an array
mixed.shift();
mixed.shift();
// console.log(mixed);

// adds item to the start of an array 
// you need to add the item into the parentheses in order to add to the array
mixed.unshift(true);
mixed.unshift(1990);
// console.log(mixed);

// finds the location of an item with in an array and returns the location
// console.log(mixed.indexOf(35)); // 2
// console.log(mixed.indexOf('confused')); // 5 

// returns a selection of the array depending on you start and finish locations

// console.log(names.slice(0, 3)); // returns ['kate', 'james','frank'];
// console.log(names.slice(2, 5)); // ['frank', 'allan', 'edward'];
// console.log(names.slice(3)); // ['allan', 'edward', 'peter'];

// var names = ['kate', 'james', 'frank', 'allan', 'edward', 'peter'];
// var mixed = [true, 1990, 35, false, [26, 17, 29, 41, 19, 59], 'confused'];
// push, pop, shift, unshift, slice, length, indexof, splice


// add items into the middle of an array
// console.log(names);
// console.log('----------Splice method-----------')
// names.splice(2, 0, 'greg', 'andrew');
// console.log(names);

// copy a selection of an array and make a new array out of them

// var modified = mixed.slice(1, 4); // does not change the original array
// console.log(mixed);
// console.log(modified);


// function reverse(arr) {
//     for (var i = arr.length - 1; i >= 0; i--) {
//         // console.log(arr[i]);
//     }
// };

// reverse([1, 3, 5, 7, 4]);

// function isUniform(arr) {
//     var check = arr[0];
//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i] !== check) {
//             return false;
//         }
//     }
//     return true;
// };

// console.log(isUniform([1, 1, 2, 1]));

// function add(arr) {
//     var sum = 0;
//     arr.forEach(function(el) {
//         sum += el;
//     });
//     return sum;
// };

// console.log(add([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// function findMax(arr) {
//     var max = arr[0];
//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// console.log(findMax([2, 3, 30, 2, 10, 2]));

/**
 * print array in reverse on single line
 * is uniform returns true when all items match and false if not
 * sum of the array so add all together and get the total
 * find the max number of an array
 * create a star triangle
 * print fizz buzz or fizznbuzz depending on the number
 * chess board
 */

// print array in reverse on single line
function rev(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        // console.log(arr[i]);
    }
};
rev([1, 2, 3, 4, 5]);


// is uniform returns true when all items match and false if not
function uniform(arr) {
    var match = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== match) {
            return false;
        }
    }
    return true;
}
// console.log(uniform([1, 2, 1]));

// sum of the array so add all together and get the total
// for each loop
// function add(arr) {
//     var sum = 0;
//     arr.forEach(function(el) {
//         sum += el;
//     })
//     return sum;
// }
// console.log(add([1, 2, 3, 4, 5, 6]));

// for loop 

function add(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
// console.log(add([1, 2, 3, 4, 5, 6]));




//find the max number of an array
function max(arr) {
    var biggest = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > biggest) {
            biggest = arr[i];
        }
    }
    return biggest;
}
// console.log(max([1, 2, 3, 4, 5, 1]));


// create a star triangle

var tri = '';

for (var i = 0; i < 8; i++) {
    // console.log(tri += '^');
}


// print fizz buzz or fizznbuzz depending on the number

// chess board

/**
 * create an array of movies
 * each movie should have:
 * 1, a title rating
 * 2, haswatched properties
 * 3, star ratings
 * itterate through the array and print out a string
 */