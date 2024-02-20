document.write("Welcome to Java Script");

// alert("alert");

console.log("test");

var name1 = "Diana";
console.log(name1);

var _value = 15;
var $value = 30;

console.log(_value);

// variabila var pot fi redeclarate, valoarea anterioara va fi updatata
var name1 = "Emma";
console.log(name1);

// let se foloseste ca scop la nivel de bloc, poate fi reasignata dar nu redeclarata in acelasi bloc
let x = 10;
x = 20;
x = "ana"
console.log(x);

// const = constanta, nu poate fi reasignata, are scop la nivel de bloc
const y = 5;
// y = 10;
console.log(y);

let age = 10;
console.log("My age is " + age, name1);

var p = 15;
var q = "15";
console.log(p == q); // equal (verifica doar valoarea)
console.log(p === q); // identical (verifica tipul si valoarea)
console.log(p != q); // not equal 
console.log(p !== q); // not identical 

console.log(typeof q);

let mesage;
if (age > 18) {
    mesage = "You are agers";
} else {
    mesage = "You are still young"
}

console.log((age > 18) ? "You are agers" : "You are still young");


let array = ["ana", "dana", "ion", "andrei", 5];
let arrayempty = [];
arrayempty.push(5);

console.log(arrayempty);

// console.log(array.pop("ion"));
console.log(array.pop());
console.log(array);


let person = {};
person = {
    firstName : "Diana",
    age : 20
};

console.log(person.firstName + " " + person.age);

person.age = 30;
console.log(person['firstName'] + " " + person['age']);
console.log('firstName' in person);

function sayHello() {
    alert("Hello");
}

// document.getElementById("buton").onclick=date();

// document.write(sayHello());

function displayMasage(msg) {
    // msg = "Buna seara"
    document.write(msg);
}

// displayMasage("Hello");

function date() {
    document.getElementById("date").innerHTML = Date();
}

