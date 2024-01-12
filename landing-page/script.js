// Operatori
// + , -, *, /, % (modulo, restul impartirii)
// console.log(35 % 10);
// = este assign operator

const price = 40; // hardcoding
const oranges = 5;
const totalPrice = price * oranges;
// console.log(totalPrice); //200

// Operator precedence
// d = d1+ d2
// d = v1*t + v2*t 
// redundancy

// Operatorul de incrementare/decrementare (++/--)
// counter 
let counter = 0;
// Cumparatura
counter++; // echivalent cu counter = counter + 1;
// console.log(counter);

// Ridicarea la putere (**)
const a = 5 ** 2;
// console.log(a);

// Equality operator (==) true/false 
// console.log(4 == "4"); // true

// Strict equality operator (===) true/false
// console.log(4 === '4'); // false

// Falsy values: 0, -0, NaN, null, undefined, false, empty string ('', "")
// console.log(false == ""); // true

//Truthy values
// console.log(Boolean("nio")); // true

// Type conversion - folosim functii predefinite de js pentru convirtire de date
// Boolean(), String(), Number()

// console.log(Number('fnerfn'));
// console.log(typeof String(true)); // "true"

// const inputYear = "2008";
// const userAge = 2024 - Number(inputYear);
// console.log(userAge);
// const eligibleAge = 18;

// console.log(userAge >= eligibleAge);

// 2024-1991 = 33
// 33 >= 18 ? true/false

// Logic Operators
// Operatorul de negare (!)
// console.log(5>2, !(5>2), !3>2);

// AND (&&)
const age = 25;
let hasLicence; // false
// console.log("Poate persoana data sa conduca masina? ");
// console.log(age >= 18 && hasLicence);
if (age >= 18 && hasLicence) {
    console.log('Persoana data poate conduce');
} else {
    console.log("Persoana data nu indeplineste conditiile pentru a conduce");
}

// console.log(age >= 18 + hasLicence);
// console.log(18 + hasLicence);
// 1. 18 + hasLicence
//2. 18 + Number(hasLicence) = 18
// 3. age >= 18 - true

const isPasswordCorrect = true;
const isEmailCorrect = true;

// console.log("Poate utilizatorul sa se conecteze? ", isPasswordCorrect && isEmailCorrect);

// OR (||)
// const age = 16;
// const hasParentConsent = true;
// console.log(age >= 18 || hasParentConsent);

// const count = 0;
// const limit = 10;
// console.log((count == 0) && (limit < 20)); // true
// console.log(count == 0 && limit < 20); // true
// console.log((limit > 20) || (count < 5)); // true
// console.log(!(count == 12)); // true
// console.log(!( ((count < 10) || (x < y)) && (count >= 0) )); // false

// Assignment Operators (=, -=, +=, /=, *=)
// let x = 4;
// x -= 2; // x = x - 2
// console.log(x); // x = 2
// x *= 3; // x = 2 * 3;
// console.log(x); // 6
