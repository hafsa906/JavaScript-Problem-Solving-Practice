// a program that takes two variables and prints the sum of it.
function cheak(){

let num1=parseInt(document.getElementById("num1").value)

let num2=parseInt(document.getElementById("num2").value) 
let sum=num1+num2;
alert(sum);
}

// a program that uses logical and assignment operators.
let isFullAttendence = true;
let isPaymentClear = false;
let isPassExam = true;
let isScoreBonus = false;

let issueCertificate = isFullAttendence && !isPaymentClear && (isPassExam || !isScoreBonus);
console.log(issueCertificate);

