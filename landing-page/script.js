// La orice numar adauga + 12%
function addTaxes(base) {
    if (base < 2000) {
        return (base * 1.1).toFixed(2);
    } else {
        return (base * 1.12).toFixed(2);
    }
}

// console.log(base); // eroare 

// rent + 12% = 1120
const rent = 1000;
console.log(addTaxes(rent)); // rent + 12%
const salary = 10000;
console.log(addTaxes(salary)); // salary + 12%


// Arrow function
const powerTwo = (base) => {
    return base * base;
}

// console.log(base * base) // 4
console.log(powerTwo(10))

// Built in functions javascript

const firstName = "Iuliana";
console.log(firstName.toUpperCase());

const currentDate = new Date();
console.log(currentDate);

console.log(Math.pow(3, 3));

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

// void - tip de date pentru functie cand nu returneaza nimic
const tellFortune = (children, partnerName, location, jobTitle) => {
    if (!children && !partnerName) {
        return `You will be a ${jobTitle} in ${location}`;
    }
    if (children === 1) {
        return `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${children} kid.`;
    } 
    return `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${children} kids.`;
}

tellFortune(4, 'Max', 'Australia', 'doctor');
tellFortune(1, 'Max', 'Australia', 'doctor');
console.log(tellFortune(undefined, undefined, 'Australia', 'doctor'));

// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".

const celsiusToFahrenheit = (celsius) => {
    if (celsius) {
    const fahrenheit = celsius * 9/5 + 32;
    return `${celsius} grade celsius este echivalent ${fahrenheit} grade fahrenheit`;
    } else {
        return "Nu ati introdus variabila de celsius";
    }
    // return celsius * 9/5 + 32;
}

console.log(celsiusToFahrenheit(-10)); // 14
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

const fahrenheitToCelsius = (fahrenheit) => {
    console.log('Far', fahrenheit);
    if (fahrenheit) {
    const celsius = (fahrenheit - 32 )* 5/9;
    console.log('Cel', celsius);
    return `${fahrenheit} grade celsius este echivalent ${celsius} grade fahrenheit`;
    } else {
        return "Nu ati introdus variabila de fahrenheit";
    }
}
// fahrenheit , celsius - variabile locale ale functiei fahrenheitToCelsius
// console.log(fahrenheit);
// console.log(celsius);
console.log(fahrenheitToCelsius(14, 12, 13, 43));

// var, let, const 
// block (curly braces)

// var - function scoped or globally scoped
// var - can be reassigned

if (true) {
    var a = 5;
    console.log(a);
}
console.log(a); // 5

const multiplication = () => {
    a = 7;
    console.log(a);
}
multiplication();

// let - block scoped  
// let - can be reassigned

const exampleFunction = () => {
    let b = 10;
  
    if (true) {
        let b = 30;
        console.log(b); // 30
    }
    console.log(b); // 10
}

exampleFunction();

// console.log(b); //b is not defined

// const - block scoped
// const - can not be reassigned

const x = 25;
x = 40;
console.log(x);