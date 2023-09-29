// TEAMWORK NO:1

// *****************************************
// -------         1. SORU     -------------
// *****************************************



// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 == 0.3);



// *****************************************
// -------         2. SORU     -------------
// *****************************************


// console.log(1 < 2 < 3);
// console.log(3 > 2 > 1);


// *****************************************
// -------         3. SORU     -------------
// *****************************************


const prompt = require("prompt-sync")();
let sum = 0;
let number = parseInt(prompt("Enter a number: "));
while (number >= 0) {
  sum += number;
  number = parseInt(prompt("Enter a number: "));
}
console.log(`The sum is ${sum}.`);

// *****************************************
// -------         4. SORU     -------------
// *****************************************

// null == undefined;
// null === undefined;
// isNaN(2 + null);
// isNaN(2 + undefined);
// null ? console.log("true") : console.log("false"); 

// *****************************************
// -------         5. SORU     -------------
// *****************************************



// var hash = "";
// var count = 1;
// var n = 3;
// for (var x = 1; x <= 7; x++) {
//   while (hash.length != count)
//   hash += "#";
//   hash += "\n";
//   count += n;
//   n++;
// }
// console.log(hash); 

// *****************************************
// -------         6. SORU     -------------
// *****************************************



// let firstName = null;
// let lastName = null;
// let nickName = "coderBond";
// console.log(firstName ?? lastName ?? nickName ?? "Anonymous");


// *****************************************
// -------         7. SORU     -------------
// *****************************************


// function onZoom(x) {
//   console.log("Zoom active for", x);
// }
// function startClass(x, y, z) {
//   console.log(" Class starts at", x);
//   y(z);
// }
// startClass("20:00", onZoom, "FS");

// *****************************************
// -------         8. SORU     -------------
// *****************************************



// console.log(
//   (function f(n) {
//     return n > 1 ? n * f(n - 1) : n;
//   })(5)
// );

// *****************************************************

// f(5) = 5 * f(4)
// f(4) = 4 * f(3)
// f(3) = 3 * f(2)
// f(2) = 2 * f(1)
// f(1) = 1 (base case)

// Şimdi, yukarıdan aşağıya doğru hesaplamaları yapalım:

// f(1) = 1
// f(2) = 2 * 1 = 2
// f(3) = 3 * 2 = 6
// f(4) = 4 * 6 = 24
// f(5) = 5 * 24 = 120

// ****************************************
// -------         9. SORU     -------------
// *****************************************


// (function () {
//   try {
//     throw new Error();
//   } catch (x) {
//     var x = 1,
//       y = 2;
//     console.log(x);
//   }
//   console.log(x);
//   console.log(y);
// })();

// *****************************************
// -------         10. SORU    -------------
// *****************************************


// let a = [10, 20, 30];
// a[10] = 100;
// console.log(a[6]);
// let b = [undefined];
// b[2] = 1;
// console.log(b);
// console.log(b.map((e) => 99)); 

// *****************************************
// -------         11. SORU     ------------
// *****************************************

// function orderPizza(type, ingredients, callback) {
//   console.log("Pizza ordered...");
//   console.log("Pizza is for preparation");
//   setTimeout(function () {
//     let msg = `Your ${type} ${ingredients} Pizza is ready! The total bill is
// $10`;
//     callback(msg);
//   }, 3000);
// }
// orderPizza("Vegeterian", "Cheese", function (message) {
//   console.log(message);
// });

// *****************************************
// -------         12. SORU     ------------
// *****************************************


// class Employee {
//   constructor(id, name) {
//     this.id = id;
//     this.name = name;
//   }
//   detail() {
//     console.log(this.id + " " + this.name);
//   }
// }
// let e1 = new Employee(10, "Qadir Adamson");
// let e2 = new Employee("Victor Hug");
// let e3 = new Employee(12);
// e1.detail();
// e2.detail();
// e3.detail();

// *****************************************
// -------         13. SORU     ------------
// *****************************************

// class Animal {
//   constructor(name, weight) {
//     this.name = name;
//     this.weight = weight;
//   }
//   eat() {
//     return `${this.name} is eating`;
//   }
//   sound() {
//     return `${this.name} is says`;
//   }
// }
// class Cat extends Animal {
//   constructor(name, weight) {
//     super(name, weight);
//   }
//   sound() {
//     return `${super.sound()} Meow!`;
//   }
// }
// let felix = new Cat("felix", 5);
// console.log(felix.sound());



// *****************************************
// ------ Thanks for Attending  ------------
// *****************************************