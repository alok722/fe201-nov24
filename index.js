console.log("Hello, there!");

// class based language -> c++, java, python
// class and object
// class -> blueprint and instance of class is called as object
// book -> title, author, pages, publisher, publishDate, genre
//

// class Book {
//     title,
//     author,
//     pages,
//     publisher,
//     publishDate,
//     genre
// }

// const richDadBook = Book('Rich Dad', 'ncgvsjhd', 120)
// const ramayana = Book('Ramayana', 'dfmvbhdf',1000)
// const harryPorter = Book('Harry Porter', ')

// Prototype based language ->
// Object(blueprint/template)(Constructor Function) -> Object()
// Book oject -> richDad, ramayana, harryPorter

// class keyword ->
// What Javascript supports by default -> Object
// ES6 -> class keyword ->
// person.address.city -> person['address]['city']

// Constructor function -> title, author, pages, publisher, publishDate, genre

// PascalCase

// pascalCase

// Car -> color, model, type, start
// bmwCar, audiCar, hyundaiCar,

function Car(color, model, type) {
  this.color = color;
  this.model = model;
  this.type = type;
  this.start = function () {
    console.log("Car is starting!", model);
  };
}

const bmwCar = new Car("blue", "X5", "sedan");
// this -> 220M -> {
//     color: blue,
//     model: X5,
//     type: sedan,
//     start: [Function: start],
// }
console.log(bmwCar);

const audiCar = new Car("red", "z5", "SUV");
audiCar.mileage = 10;
// console.log(audiCar);

function Circle(radius, x, y) {
  this.radius = radius;
  this.location = {
    x: x,
    y: y,
  };
  this.draw = function () {
    console.log(this.location);
  };
  this.move = function (nextX, nextY) {
    // this.location.x = nextX;
    // this.location.y = nextY;
    this.location = {
      x: nextX,
      y: nextY,
    };
  };
}

const myCircle = new Circle(5, 0, 0);

// for (let index = 0; index <= 10; index++) {
//   myCircle.move(index, index);
//   myCircle.draw();
// }
// What does new keyword doing?
// 1. It's creating a new object in the memory(200M) -> {}
// 2. Referring this keyword to newly created object(200M).
// Returning the newly created object after function execution

// this -> object
function sum(a, b) {
  console.log(this);
  console.log(a + b);
}

// window.sum(2, 3);

const student = {
  name: "John",
  age: 20,
  grade: 8,
  displayInfo: function () {
    console.log(this);
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  },
};
// student.displayInfo();

function User(name) {
  this.fullName = name;
  this.friendList = [];
  this.addFriend = function (friendName) {
    this.friendList.push(friendName);
  };
  this.printFriendList = function () {
    console.log("FRIEND LIST");
    this.friendList.forEach((friend) => console.log(friend));
  };
  this.findMutuals = function (userObj) {
    const mutualFriends = this.friendList.filter((friend) =>
      userObj.friendList.includes(friend)
    );
    console.log(`Mutual Friends`, mutualFriends);
  };
}

const vivek = new User("Vivek Kumar");

vivek.addFriend("Harish");
vivek.addFriend("Radhe");
vivek.addFriend("Ajay");

const varun = new User("Varun");

varun.addFriend("Rohan");
varun.addFriend("Vatsal");
varun.addFriend("Radhe");
varun.addFriend("Harish");

// vivek.findMutuals(varun); // ['Harish', 'Radhe']

const employee = {
  name: "John",
  age: 30,
  department: "IT",
  salary: 50000,
  displayInfo: function () {
    console.log(this);

    console.log(
      `Name: ${this.name}, Age: ${this.age}, Department: ${this.department}, Salary: ${this.salary}`
    );
  },
};

// employee.displayInfo();

function executor(anotherFunction) {
  anotherFunction();
}

const newDisplayInfoFn = employee.displayInfo.bind(employee);

// executor(newDisplayInfoFn);

const timer = {
  currentTime: 0,
  showTime: function () {
    console.log("from here", this.currentTime);
  },
  addTen: function () {
    console.log(this);
    this.currentTime += 10;
    this.showTime();
  },
};

// timer.addTen();
const newAddTen = timer.addTen.bind(timer);
// setTimeout(newAddTen, 2000);

class CarClass {
  constructor(color, model, type) {
    this.color = color;
    this.model = model;
    this.type = type;
  }

  start() {
    console.log(`Car is starting!`);
  }
}

const bmwCarClass = new CarClass("blue", "X5", "sedan");
console.log(bmwCarClass);
