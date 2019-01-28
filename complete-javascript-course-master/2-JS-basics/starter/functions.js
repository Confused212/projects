// functions - function name(parameters){statement}

// function declaration

// number functions  
// function add(a, b) {
//     // this is a function statement
//     return (a + b) / a;
// }

// // functions can be called multiple times with different parameters
// var small = add(20, 19);
// var medium = add(34, 1876);
// var large = add(24, 68);

// console.log(small);
// console.log(medium.toFixed(2));
// console.log(large.toFixed(2));


// // string functions
// function nameAge(name, age) {
//     // this is a string to return the parameters
//     return 'my name is ' + name + ' and my age is ' + age + '.'
// }

// console.log(nameAge('Dave', 38));
// console.log(nameAge('Mark', 34));
// console.log(nameAge('Mary', 14));


// // function expression

// var infor = function(nam) {
//     return 'this is a function expression ' + nam;
// }

// console.log(infor('control'));

// var develop = function(houses) {
//     return houses <= 100 ?
//         'we are behind on this project' :
//         'we are on target for this build';
//     // if (houses <= 100) {
//     //     return 'we are behind on this project';
//     // } else {
//     //     return ' we are on target for this build';
//     // }
// }

// console.log(develop(46));
// console.log(develop(288));
// console.log(develop(199));




// var markWeight = 79;
// var markHeight = 189;
// var johnWeight = 70;
// var johnHeight = 183;

// var markBmi = markWeight / (markHeight * markHeight);
// var johnBmi = johnWeight / (johnHeight * johnHeight);
// var greaterBmi = markBmi > johnBmi;
// console.log('is Marks Bmi greater than Johns? ' + greaterBmi);

// function BMI(weight, height) {
//     return weight / (height * height)
// }

// var mark = BMI(58, 189);
// var john = BMI(79, 188);

// var average = mark < john;

// console.log(mark, john, average);

// functions returning other functions

// function housesBuilt(num) {
//     return 1200 - num;
// };

// function leftToBuild(left, month) {
//     var houses = housesBuilt(left);
//     var amountLeft = (houses / month);

//     return amountLeft;
// }

// console.log(leftToBuild(199, 5));

//////////////////////////////////////////////////////////////////////////////




// function declaration
// function space() {
//     console.log('this is a function declaration')
// };

// space();

// function expression
// var time = function() {
//     console.log('this is a function expression');
// };

// time();

// function using return

// function go(name, age) {
//     return 'my name is ' + name + ' and my age is ' + age + '.';
// }

// console.log(go('Dave', 37));
// console.log(go('Mike', 28));
// console.log(go('Terry', 48));
// console.log(go('John', 49));

// function returning another function

// function go(weight) {
//     return 200 - weight;
// };

// function totalWeight(lift) {
//     var deadLift = go(lift);
//     var benchPress = deadLift - 50;

//     return benchPress;
// };

// console.log(totalWeight(140));

// var names = function(name, place) {
//     return name + ' from ' + place;
// };

// var travel = function(name, place, month) {
//     var places = names(name, place);

//     return 'This is a new year and a new month of ' + month + ' and I am ' + places + '.';
// };

// console.log(travel('Dave', 'Scotland', 'January'));

// function using if/else statements and prompt 

// var question = prompt('please give a number below 200!!');
// var answer = Number(question);

// function add(num) {
//     if (num < 100) {
//         return 100 + num;
//     } else if (num <= 200) {
//         return 200 + num;
//     } else {
//         return 'please enter a number below 200';
//     }
// }
// this adds the numbers as a string if number conversion is not used
// console.log(add(question)); 

// this gives the answer when the prompt is converted to a number
// console.log(add(answer));

// shows what kind of value types are used
// console.log(typeof question);
// console.log(typeof add(answer));

// is even, snake kabab, make * onto a triangle //

////////////////////////////// CLOSURES ///////////////////////////////

// function makeAdder(x) {
//     // parameter 'x' is an inner variable

//     // inner function 'add()' uses 'x', so 
//     // it has a 'closure; over it

//     function add(y) {
//         return y + x;
//     };
//     return add;
// }

// // 'plusOne' gets a reference to the inner 'add()'
// // function with closure over the 'x' parameter of 
// // the outer 'makeAdder(...)'

// var plusOne = makeAdder(1);

// // 'plusTen' gets a reference to the inner 'add(..)'
// // function with closure over the 'x' parameter of 
// // the outer 'makeAdder(...)'

// var plusTen = makeAdder(10);

// console.log(plusOne(3));
// console.log(plusOne(41));
// console.log(plusTen(13));

////////////////////////////// IFFEs ///////////////////////////////

// Immediately invoked function expression (IFFE)

// function declaration
// called with arguments after the function has been written
// function confused(a, b) {
//     return a + b;
// };

// console.log(confused(1, 2));

// this cannot be read by any other code other on the page
// this IIFE is being used with a console.log to get the results
// from the function to the console from within the function
(function confused(a, b) {
    console.log(a + b);
})(1, 2);

// this function was created using a variable to store the results
// this variable is then used via the console.log
var easy = (function num(a, b) {
    return a * b;
})(2, 3);

console.log(easy);