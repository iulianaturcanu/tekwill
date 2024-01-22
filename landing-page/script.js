// 1. Problema: Calculul mediei
//    Scrieți o funcție care primește un obiect care conține notele unui student și returnează media acestuia.
//    Exemplu de input: `{ nota1: 8, nota2: 7, nota3: 9 }`
//    Exemplu de output: `8`

// (8 + 7 +9) /3

// const sum = (a, b) => a+b;

const calcAverage = (marks) => {
    let sum = 0;
    const numbers = Object.values(marks); // [8, 7, 9]
    // numbers.forEach((element)=> sum+=element);

    for (const element of numbers) sum+= element;
    

    console.log("Media finala", sum/numbers.length);

    // for (let i = 0; i < numbers.length; i++ ) {
    //     sum += numbers[i];
    // }
    // return sum/numbers.length;

    // 1*2*3*4*5 = 5!
    const result = numbers.reduce((factorial, element) => factorial * element);
    console.log('Rezultatul nostru este:', result);
}

const studentMarks = { nota1: 8, nota2: 7, nota3: 9 }

console.log(calcAverage(studentMarks));

// 2. Problema: Enumerarea obiectului
//    Scrieți o funcție care primește un obiect și afișează toate perechile cheie-valoare ale 
// obiectului utilizând o buclă `while`.
//    Exemplu de input: `{ nume: 'John', varsta: 30, oras: 'New York' }`
//    Exemplu de output:
//    ```
//    nume: John
//    varsta: 30
//    oras: New York
//    ```

const displayObject = (obj) => {

    // for (const key in obj) {
    //     console.log(`${key}: ${obj[key]}`);
    // }
    const keys = Object.keys(obj); // [ 'nume', 'varsta', 'oras' ]

    // let i = 0;
    // while (i < keys.length) {
    //     const key = keys[i];
    //     const value = obj[key];
    //     console.log(`${key}: ${value}`);
    //     i++;
    // }

    for (let i = 0; i < keys.length; i++){
        const key = keys[i];
        console.log(`${key}: ${obj[key]}`);
    }

}

const person = { nume: 'John', varsta: 30, oras: 'New York' }
displayObject(person);

// 3. Problema: Căutarea unei proprietăți
//    Scrieți o funcție care primește un obiect și o cheie și verifică dacă cheia există în 
// obiect utilizând o buclă `while`.
//    Exemplu de input: `{ nume: 'John', varsta: 30, oras: 'New York' }, 'varsta'`
//    Exemplu de output: `true`

const denumire = (obj, key) => {
    const keys = Object.keys(obj); // ['nume', 'varsta', 'orasul']

    let i = 0;
    while (i < keys.length) {
        if (keys[i] === key) return true;
        i++;
    }

    return false;
}
const person2 = { nume: 'John', varsta: 30, oras: 'New York' };

console.log(denumire(person2, 'varsta'));


// for ... in

// for ... of

// forEach -> se afiseaza fiecare element

// map -> []

// 4) Make an array of strings of the names
const namesOnly = (arr) =>{
    
 
    //     const newArray = [];
    //     for (const element of arr) {
        //         console.log(element.name); // { name: 'Angelina Jolie', age: 80 }
        //         newArray.push(element.name);
        //     }
        
        //   return newArray;

    const seniorPersons = arr.filter(element => element.age >= 18).map(element => `${element.name} can go to the matrix`); // [{name: ..., age...}]
    const juniorPersons = arr.filter(element => element.age < 18).map(element => `${element.name} is under age!`); // [{name: ..., age...}]
    console.log([...seniorPersons, ...juniorPersons]);

    return arr.map((element, index) => {
        if (element.age > 18) {
            return `${index+1}: ${element.name} can go to the matrix`;
        } else {
            return `${index +1}: ${element.name} is under age!`;
        }
    });
}

// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

const numbers = [10, 15, 25, 37, 64, 58];
// array doar cu elementele pare
const filteredNumbers = numbers.filter(element => element % 2 === 0);
// const filteredNames = names.filter(element => element === 'Ana');
console.log(filteredNumbers);

for (const element of numbers) {
    const filteredArray = [];
    if (element % 2 === 0){
        filteredArray.push(element);
    }
}
// if (number[i] % 2 === 0) {
//     newArray.push(number[i]);
// } 