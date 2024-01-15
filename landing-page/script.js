// if (condition) {
//   // Code to execute if the condition is true
//   console.log("gereg");
// } else {
//   // Code to execute if the condition is false
// }

// if (condition) console.log('Condition is true')
// else console.log('Condition is false');

// 1. Write a program that determines whether a given number is positive or not.
// const number = 5;
// if (number > 0) console.log('The number is positive');
// if (number < 0) console.log('The number is negative');
// if (number === 0) console.log('the number is 0');

// 2. Write a program that checks if a number is even or odd.
const number = 12;
// 5/2 = 2 cu rest 1 => numarul este impar
if (number % 2 === 0) console.log("Numarul este par");
else console.log("Numarul este impar");

if (number % 2 === 1) console.log("Numarul este impar");
else console.log("Numarul este par");

if (number % 2 === 0) console.log("Numarul este par");
if (number % 2 === 1) console.log("Numarul este impar");

// 3. Write a program to determine the greater of two numbers

const number1 = 5;
const number2 = 10;
if (number1 > number2) console.log('Number 1 is greater than number 2');
else if (number1 === number2) console.log("Number 1 is the same as number 2");
else console.log("Number 2 is greater than number 1");

// femei/barbati/copii/altele
const input = "femei";

// if (input === "femei") console.log('Haine pentru femei');
// else if (input === 'barbati') console.log('Haine pentru barbati');
// else if (input === 'copii') console.log('Haine pentru copii');
// else console.log('Altele');

// switch (input) {
//     case 'femei':
//         console.log('Haine pentru femei');
//         break;
//     case 'barbati':
//         console.log('Haine pentru barbati');
//         break;
//     case 'copii':
//         console.log('Haine pentru copii');
//         break;
//     default: 
//         console.log('Altele');
// }

if (input === "femei" || input === 'barbati') console.log('Haine unisex');
else if (input === 'copii') console.log('Haine pentru copii');
else console.log('Altele');

switch (input) {
    case 'femei':
    case 'barbati':
        console.log('Haine pentru oameni maturi');
        break;
    case 'copii':
        console.log('Haine pentru copii');
        break;
    default: 
        console.log('Altele');
}

// Avem nevoie sa scriem programul pentru fiecare zi a saptamanii
const day = "Monday";
switch (day) {
    case 'Monday':
    case 'Wednesday':
    case 'Friday':
        console.log('Frontend course');
        break;
    case 'Tuesday':
        console.log('Swimming lessons');
        break;
    default: 
        console.log('Relax days');
}

// 4. Write a program that assigns a letter grade based on a numerical grade.
const score = 67;
let grade;

if (score >= 95) {
    grade = "A";
} else if (score >= 85) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score > 60) {
    grade = "D";
} else {
    grade = "F";
}

console.log("Grade: " + grade);

switch(true) {
    case score >= 95:
        grade = "A";
        break;
    case score >= 85:
        grade = "B";
        break;
    case score >= 70:
        grade = "C";
        break;
    case score > 60:
        grade = "D";
        break;
    default:
        grade = "F";
};

console.log("Grade: " + grade);

// 5. Write a program that determines if a year is a leap year.
// 1. divibil cu 4 - year % 4 === 0
// 2. Daca se imparte la 400 sau nu se imparte la 100 cu rest
// year % 400 === 0 || year % 100 !== 0

// (year % 4 === 0 && year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)
// if (year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0)) {
//     console.log(year + "An bisect");
// } else {
//     console.log(year + "nu este bisect");
// }

// numele de variabile pentru boolean trebuie raspunda la intrebarea da sau nu
// isConnected, isActive, hasChildren, hasPermissions
// Ternary Operator (conditional operator)
const age = 19;
const isAdult = age >= 18 ? "Yes": "No";
console.log(isAdult);

//Ecmascript (ES)
// Deprecated
// Changelog