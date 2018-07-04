function Person() {};
let person = new Person();
person.name = 'Li';
console.log(person.name);  //Li

function Person() {};
Person.prototype.name = 'Li';
let personOne = new Person();
let personTwo = new Person();
console.log(personOne.name);  //Li
console.log(personTwo.name);  //Li

function Person() {};
Person.prototype.name = 'Li';
console.log(Person.prototype);

function Person() {};
Person.prototype.name = 'Li';
let person = new Person();
console.log(person.__proto__);

function Person() {};
Person.prototype.name = 'Li';
let person = new Person();
console.log(person.__proto__ === Person.prototype);  //true  

function Person() {};
Person.prototype.name = 'Li';
let person = new Person();
console.log(person.prototype);  //undefined 
