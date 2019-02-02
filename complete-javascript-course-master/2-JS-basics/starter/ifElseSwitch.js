// ternary operator

// var age = 13;
// console.log(age >= 18 ? true : false);

// var hasBeenMarried = 0;
// console.log(hasBeenMarried >= 1 ? true : false);

// // ternary operator stored in a variable

// var howOld = age >= 10 ? 'boy' : 'baby';
// console.log(howOld);


// var day = 'wednesday';


// if statement

// if (day === 'Monday') {
//     console.log('Start of the week');
// };
// if else statement
// if (day === 'monday') {
//     console.log('Start of the week');
// } else if (day == 'tuesday') {
//     console.log('one day in, we can do this');
// } else {
//     console.log('what day is it?');
// }
// if else if statement
// if (day == 'monday') {
//     console.log('Start of the week');
// } else if (day == 'tuesday') {
//     console.log('one day in, we can do this');
// } else if (day == 'wednesday') {
//     console.log('half past week, WOOP WOOP!!!')
// } else {
//     console.log('what day is it?');
// }

// switch statement

// var day = 'tuesday';

// switch (day) {
//     case 'monday':
//         console.log('Start of the week');
//         break;
//     case 'tuesday':
//         console.log('one day in, we can do this');
//         break;
//     case 'wednesday':
//         console.log('half past week, WOOP WOOP!!!');
//         break;
//     default:
//         console.log('it must be a day of!!!');
//         break;
// };

// for each loop

var go = [12, 42, 56, 32, 16, 93];
var num = 0;

function add(nums) {
    num += go;
}
go.forEach(add);
console.log(num);