# prototype-and-__proto__

## 使用构造函数创建对象
首先，我们先用一个构造函数创建一个对象：
```
function Person() {};
let person = new Person();
person.name = 'Li';
console.log(person.name);  //Li
```
在这个炒鸡简单的例子中，Person就是一个构造函数，person是构造函数Person的实例。

## prototype
每个函数都有一个prototype属性，例如：
```
function Person() {};
Person.prototype.name = 'Li';
let personOne = new Person();
let personTwo = new Person();
console.log(personOne.name);  //Li
console.log(personTwo.name);  //Li
```
我们可以看到，personOne和personTwo作为Person的实例，从构造函数中继承了name属性。
那么prototype到底是什么呢？我们执行一下下面的代码：
```
function Person() {};
Person.prototype.name = 'Li';
console.log(Person.prototype);
```
我们可以看到，prototype就是构造函数本身，也就是说一个函数的prototype指向了函数自己。

## __proto__
ok，看完了上面，那__proto__又是什么东西？我们试试下面的代码：
```
function Person() {};
Person.prototype.name = 'Li';
let person = new Person();
console.log(person.__proto__);
```
我们发现，person.__proto__和Person.prototype看起来似乎一模一样，ok，我们再试试：
```
function Person() {};
Person.prototype.name = 'Li';
let person = new Person();
console.log(person.__proto__ === Person.prototype); 
``
