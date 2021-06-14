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
//alert(fruits[1]);

fruits[0]='pear';
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
console.log(fruits[i]); 
}

//array common methods
console.log(fruits.toString());
console.log(fruits.join('-'));
console.log(fruits.pop(),fruits); //removes last item
console.log(fruits.push('blackberry'),fruits); //appends
console.log(fruits[4]);
fruits[fruits.length]= 'new fruit'; //same as push
console.log(fruits);
fruits.shift(); //removes first element
console.log(fruits);
fruits.unshift('kiwi');  //add first element 
console.log(fruits);

let vegetables= ['asparagus', 'tomatoes', 'broccoli'];
let allGroceries= fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1,4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumbers= [5, 10, 2, 37, 92, 42, 14,77];
console.log(someNumbers.sort(function(a,b) {return a-b})); //sorted in ascending order
console.log(someNumbers.sort(function (a, b) { return b-a })); //sorted in descending order

let emptyArray= new Array();
for (let num=0; num<=10; num++) {
    emptyArray.push(num);
}
console.log(emptyArray);

//Objects in Javascripts
//dictionaries in Python
let student= {first:'Aditi',
 last:'Singh',
  age:22,
   height:170, 
   studentInfo: function (){
return this.first + '\n' + this.last + '\n' + this.age;
}
};
//console.log(student.first);
//student.first='NotAditi'; //change value
//console.log(student.first);
student.age++;
//console.log(student.age);
console.log(student.studentInfo());

//conditonals, control flows, if else
var age = 45;
if ((age>=18) && (age<=35)) {
    status= 'target demo';
    console.log(status);
}
else {
    status='not my audience';
    console.log(status);
}
//Switch statements
//diff between weekday and weekend
// day 0--> Sunday
// day 6--> Saturday

switch (2) {
    case 0:
    text='Weekend'; 
    break;
    case 5:
    text= 'weekend';
    break;
    case 6:
    text= 'weekend'
    break;
    default:
    text='Weekday';
}
console.log(text);