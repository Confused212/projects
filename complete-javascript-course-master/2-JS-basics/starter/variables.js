///////////////////// PRIMITIVE VARIABLES //////////////////////

var firstName = 'David';
var lastName = 'Pinner';
var yearOfBirth = 1981;
var isMarried = true;
var dayOfTheWeek = { monday: 'today' };
// var callBack = symbol();
var petName; // Undeclared variable

console.log(firstName);
console.log(lastName);
console.log(yearOfBirth);
console.log(isMarried);
console.log(dayOfTheWeek);
console.log(petName);

console.log('-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -');

// use typeof to find out what kind of variable it is
console.log(typeof firstName); // String
console.log(typeof lastName); // String
console.log(typeof yearOfBirth); // Number
console.log(typeof isMarried); // Boolean
console.log(typeof petName); // Undefined
console.log(typeof dayOfTheWeek); // Object
// console.log(typeof callBack); // 

/////////////////// VARIABLE MUTATIONS /////////////////////
console.log('-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -');

firstName = 'James';
lastName = 'Smith';
yearOfBirth = 2014;
isMarried = false;
petName = 'Willow'; // variable now been declared
var fullName = firstName + ' ' + lastName;

console.log(firstName);
console.log(yearOfBirth);
console.log(isMarried);
console.log(petName);

// console.log(typeof yearOfBirth);
/////////////////// STRING CONCATINATION /////////////////////
console.log('-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -');

console.log('My name is ' + fullName + ' and I was born in ' + yearOfBirth + ' but am I married? ' + isMarried + '.');