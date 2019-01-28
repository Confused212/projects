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