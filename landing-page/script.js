// Tipuri de date simple - number, string, boolean, undefined, null
// Tipuri de date structarate/complexe - objects, arrays (tablouri, matrice)
const animals = ['cat','dog' ,'lion','chicken']; // 0 - cat, 1 - dog, 2 - lion, 3 - chicken
const animal = 'cat';

const names = ['Avie', 'Ben', 'Tom'];
console.log(names[0], names[1], names[2]);
const firstEmployer = 'Avie';
const secondEmployer = 'Ben';

// for loop 
// for (initializare; conditie; regula de incrementare) {
//     // codul care vrem sa-l executam la fiecare iteratie
// }

// i++ analog pentru i = i + 1;
console.log(animals.length); // incepe numerotarea de la 1 
// iteratia 1 pentru i = 0
// iteratia 2 pentru i = 1
// iteratia 3 pentru i = 2
// iteratia 4 pentru i = 3 A
// iteratia 5 se verifica 4 < 4 F
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

for (let i = 1; i <= animals.length; i++) {
    console.log(animals[i]);
}

// Metoda - functie asociata cu un obiect, string, arrays, number

// addElements() // chemarea functiei
const text = "exemplu de text";
const makeUppercase = (text) => {
    return text;
}

makeUppercase(text); // functie
text.toUpperCase(); // metoda

console.log('---------------------------------------')
// push() - adaugarea elementelor noi la final de array
console.log(animals.push('bear'));
// pop() - elimina elementul de la final de array
console.log(animals.pop());
// unshift() - adaugarea elementelor noi la inceput de array
console.log(animals.unshift('panther'));
// shift() - elimina elementul de la inceput de array
console.log(animals.shift());

// indexOf() - returneaza indexul elementului specificat
const index = animals.indexOf('panther'); // -1 
console.log(index);

// includes() - pentru a verifica daca elementul este prezent in array
console.log(animals.includes('panther')); // false

const numbers = [10, 20, 30, 40, 50];
// 10, 30, 50
// i += 2 analog i = i + 2;
for (let i = 0; i < numbers.length; i += 2) {
    console.log('.............')
    console.log(i, numbers[i]);
}

numbers.length // 5
i = 4, i = 3, i = 2, i = 1, i = 0
i = 5, i = 4, i = 3, i = 2, i = 1
for (let i = numbers.length; i > 0; i--) {
    console.log('/////////////')
    console.log(i, numbers[i]);
}

// Declarați un array numit `numbers` cu următoarele elemente: 1, 2, 3, 4, 5.
//    - Utilizați o buclă `for` pentru a calcula suma tuturor elementelor din array.
//    - Afișați suma în consolă.

const numbers2 = [1, 2, 3, 4, 5];
// 1 + 2 + 3 + 4 + 5 = 15
// suma = 0;
// Iteratia 1: suma = suma + 1; 1
// iteratia 2: suma = suma + 2;
// ...
// iteratia 5: suma = suma + 5;
let suma = 0;

for (let i = 0; i < numbers2.length; i++) {
    suma += numbers2[i];
    // console.log(`Suma pentru iteratia ${i} este ${suma}`);
}

console.log('Suma elementelor este: '+ suma);

// Declarați un array numit `names` cu următoarele elemente: "John", "Jane", "Mike", "Anna".
//    - Utilizați o buclă `for` pentru a crea un nou array care conține lungimea fiecărui nume din array-ul `names`.
//    - Afișați noul array rezultat în consolă.
const names2 = ["John", "Janee", "Mikkkkke", "Annnnnna"];
// const lengths = [4, 5, 8, 8];
const lengths = []; // array gol

for (let i = 0; i < names2.length; i++) {
    lengths.push(names2[i].length);
    console.log(lengths);
}

console.log('...........')
console.log(lengths);