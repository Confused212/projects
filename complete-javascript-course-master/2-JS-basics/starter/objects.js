// variable object
var names = {
    mike: 'mike',
    steve: 'steve',
    john: 'John',
};

console.log(names.mike);

// variable object with function expression
var dave = {
    fullName: 'David Pinner',
    yearOfBirth: 1981,
    calcAge: function() {
        return 2019 - this.yearOfBirth;
    }
};

console.log(dave.calcAge());

var steve = {
    fullName: 'Steven Smith',
    yearOfBirth: 1999
};

// borrowing a function to use in another object
steve.calcAge = dave.calcAge;
console.log(steve.calcAge());