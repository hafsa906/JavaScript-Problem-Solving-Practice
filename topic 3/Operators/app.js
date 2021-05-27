// 3. Topic: Operators
// What will be the output of following:
var x = 5, y = 10, z = 15;

x + y;
// ANSWER: 15 

y - x; 
// ANSWER:5  

x * y;
// ANSWER: 50 

y / x; 
// ANSWER: 2 

x % 2; 
// ANSWER: 1 

x++; 
// ANSWER: 5 

x--; 
// ANSWER: 6 

console.log(x + y);
console.log(y - x);
console.log(x * y);
console.log(y / x);
console.log(x % 2);
console.log(x++);
console.log(x--);

// What will be the output of following:
var a = 5, b = 10, c = "5";

var x = a;

a == c;
// ANSWER: true 

a === c;
// ANSWER: false

a == x; 
// ANSWER: true

a != b; 
// ANSWER: true

a > b; 
// ANSWER: false

a < b;
// ANSWER: true

a >= b; 
// ANSWER: false

a <= b; 
// ANSWER: true

a <= b; 
// ANSWER: true

a <= c;
// ANSWER: true

console.log(a == c);
console.log(a === c);
console.log(a == x);
console.log(a != b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a <= b);
console.log(a <= c);

// a program that converts Centigrade to fahrenheit
var cen=100;
let F = ( 1.8 * cen) + 32;
console.log(F);

// a program that converts fahrenheit to degree.
var Ferh=100;
let C = Ferh-32/1.8;
console.log(C);