// 1-Problem Name: Define Variables
    // Creating a numeric, string, and boolean variable and print them.
var a= 04;
var b= "hafsa";
var c= true;

console.log(a);
console.log(b);
console.log(c);

// 2. Problem Name: Define Constants
    // Creating a numeric, string, and boolean constants and print them
const d= 04;
const e= "hafsa";
const f= true;

console.log(d);
console.log(e);
console.log(f);

// 3. Problem Name: Add Variables
    // Taking two numbers 4 and 12 and initializing them using let 
let num1=4;
let num2=12;
    // Adding both of them and save them in a new variable and print it using console.log
let num3=num1+num2;

console.log(num3);

// 4-Problem Name: Document Object Mode

function sendMessage(){
    // defining variable to input fields
    var number=document.getElementById("num").value
    var input=document.getElementById("name").value 
    var h1=document.getElementById("hello")
    // add name to ‘Hello’ text
    h1.innerText=h1.innerText+" "+input
    
    // showing alert
    alert("The message has been sent to: "+number);
}