// valori / Data types
// string: "Salut", '8ufwnebr032-xm,20', '123'
// number: 123, 4.12, 3457, -19
// boolean: true, false
// null: variabila nu are valoare
let person = null;
// undefined: valoare neatribuita
let person2;
// NaN - not a number

// const - nu permite modificarea ulterioara a valorii
// let - permite ca variabila sa-si schimbe valoare pe parcursul programului

// const/let/var denumirea_variabilei =(semnul assign-arii) valoare_propriu_zise ;
// let masa = 5;
// let masa_unitate = 'kg';
// console.log("Masa de fruncte este: ", masa, masa_unitate);

// masa = 7;
// console.log(masa);

// const viteza = 120;
// console.log("viteza: ", viteza);

// denumiri de variabile pot contine - litere (A-Z, a-z), cifre (0-9) - nu poate incepe cu o cifra,
// caracterul underscore(_), semnul dolarului($)

// camelCase - toate variabilele
// UPPER_SNAKE_CASE - constante
// uppercase - toate sunt majuscule
// lowercase - toate sunt minuscule

const personAge = 30;

const MAX_LENGTH = 5;
const PI = 3.14;
const MONTHS_IN_A_YEAR = 12;

// console.log(firstName*MAX_LENGTH);

// dynamic typing 
let number = 5; // number
// console.log(typeof number);
// number = "ten"; // string
// console.log(typeof number);
number = false; // boolean
console.log(typeof number);

// reassign (let)
let firstName = "Mark";
firstName = "Oleg";

// Template literals - backsticks ``
const message = `My name is ${firstName} and I'm ${personAge} years old`;
console.log(message);

// Operatori
// + , -, *, /, % (modulo, restul impartirii)
// console.log(35 % 10);

const message2 = "My name is " + firstName + " and I'm " + personAge + " years old";
console.log(message2);