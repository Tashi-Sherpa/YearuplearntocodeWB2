// Description: This script tests various numeric
//              conversion techniques
//Author: Jordan Q. Newprogrammer

var a = "  101.1   ";
var b = "55";
var c = "402 Stevens";
var d = "Number 5  ";

console.log(a + "\t\t\t" + b + "\t\t" +c + "\t\t\t" +d)

var a = parseInt (a);         // a is 101
var b = parseInt (b);        // b is 55
var c = parseInt (c);       // c is 402
var d = parseInt (d);       // d is NaN

console.log ("ParseInt ") 
console.log (a) 
console.log (b) 
console.log (c) 
console.log (d) 

console.log(a + "\t\t\t" + b + "\t\t" +c + "\t\t\t" +d)

var a = parseFloat (a);          // a is 101
var b = parseFloat (b);          // a is 101
var c = parseFloat (c);          // a is 101
var d = parseFloat (d);          // d is NaN
console.log ("ParseFloat ")
console.log (a) 
console.log (b) 
console.log (c) 
console.log (d) 
console.log(a + "\t\t\t" + b + "\t\t" +c + "\t\t\t" +d)


var a = Number (a);             // a is 101.1
var b = Number (b);             // b is 55
var c = Number (c);             // c is NaN
var d = Number (d);             // d is NaN
console.log ("Number ")
console.log (a) 
console.log (b) 
console.log (c) 
console.log (d) 


var a = +(a);            // a is 101.1
var b = +(b);            // b is 55
var c = +(c);            // c is NaN
var d = +(d);            // d is NaN
console.log ("Unary ")
console.log (a) 
console.log (b) 
console.log (c) 
console.log (d) 

