console.log('hello');
//alert('yoo');

// This is how you writ a comment

// Variables
var b = 'smoothie';
console.log(b);

var someNumber=45;
//console.log(someNumber);

//var age= prompt('What is your age?');

//document.getElementById('someText').innerHTML= age;

//Numbers in JS
var num1 = 10;
num1++;
console.log(num1%5);

//Increment/decrement by any number you want

num1 += 15;
console.log(num1);

/*Functions:
1- Create a function.
2- Call a function.
*/
//creting
function fun() {
    console.log('This is a function');
}
//Calling
fun();

/* Name-Aditi
Return-Hello Aditi
*/
function greetings() {
  var name=prompt('What is your name?');
  var result= 'Hello'+' '+name; //String concatenation
  console.log(result);
}
//greetings();

//How do arguments work in function
//How do we add 2 numbers in a function
function sumNumbers(num1, num2) {
    var result=num1+num2;
    console.log(result);
}
sumNumbers(2,2);

/*While Loops
var num=0;
while(num<10) {
    num += 1;
    console.log(num);
} */
// For loops
for (let num=0; num<10; num++) {
    console.log(num);
}
//Data types
let yourAge=18; //number
let yourName='Bob'; //String
let name={first: 'Jane', last: 'Doe'}; //object
let truth=false; //boolean
let grocery= ['milk','apple','juice']; //array
let random; //undefined
let nothing=null; //value null

//Strings in Javascripts
let fruit= 'banana';
let moreFruits= 'banana\napple';  //newLine
console.log(moreFruits);

console.log(fruit.length);
console.log(fruit.indexOf('le'));
console.log(fruit.slice(2,4));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(''));

//Array
let fruits=['banana', 'apple', 'orange', 'pineapples'];
fruits= new Array('banana', 'apple', 'orange', 'pineapples');
alert(fruits[1]);

fruits[0]='pear';
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
console.log(fruits[i]); 
}

//array common methods
console.log