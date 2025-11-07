
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

const prompt = require('prompt-sync')({sigint: true});

let promptOne = prompt("Zahl 1?: "); // Zahl 1 als String
let promptTwo = prompt("Zahl 2?: "); // Zahl 2 als String

console.log(promptOne); 
console.log(promptTwo); 

promptOne = parseInt(promptOne); // Umwandeln in eine Zahl
promptTwo = parseInt(promptTwo); // Umwandeln in eine Zahl

console.log(promptOne + promptTwo); 
