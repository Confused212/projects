// variable object
var names = {
    mike: 'mike',
    steve: 'steve',
    john: 'John',
};

// console.log(names.mike);

// variable object with function expression
var dave = {
    fullName: 'David Pinner',
    yearOfBirth: 1981,
    calcAge: function() {
        return 2019 - this.yearOfBirth;
    }
};

// console.log(dave.calcAge());

var steve = {
    fullName: 'Steven Smith',
    yearOfBirth: 1999
};

// borrowing a function to use in another object
steve.calcAge = dave.calcAge;
// console.log(steve.calcAge());


// object constructor

var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};


// function constructor
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calculateAge = function() {
    return 2019 - this.yearOfBirth;
};

var mike = new Person('Mike', 1983, 'Driver');
var jane = new Person('Jane', 1972, 'Retired');

// console.log(mike.calculateAge());
// console.log(jane.calculateAge());

var Dogs = function(name, breed, age) {
    this.breed = breed;
    this.name = name;
    this.age = age;
    this.calcDogYears = function() {
        return age * 7;
    }
};

Dogs.prototype.ownerName = 'Pinner';

var dog1 = new Dogs('George', 'Scottie', 6);
var dog2 = new Dogs('Daisy', 'German Shepherd', 10);

// console.log(dog1.calcDogYears());
// console.log(dog2.calcDogYears());
// console.log(dog1.ownerName);
// console.log(dog2.ownerName);