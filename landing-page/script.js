// const numbers = [5, 3, 6, 8, 26, 30, 30, 100];
// console.log(numbers.sort((a, b) => {
//     // descrescatoare
//     return b - a;
// }));

// const fruits = [{name: 'banana', price: 140}, 'apple', 'cherry', 'cherry', 'date'];
// const priorityList = ['cherry', 'apple', 'banana', 'date'];

// const sortedArray = fruits.sort((a, b)=> {
//     return priorityList.indexOf(a) - priorityList.indexOf(b);
// })

// console.log({sortedArray});
// // ordinea crescatoare
// console.log(fruits.sort());

// // ordinea descrescatoare
// console.log(fruits.sort((a, b) => {
//     if (a < b) {
//         return 1;
//     } else if (a > b) {
//         return -1;
//     } else {
//         return 0;
//     }
// }));

// const products = [{name: 'banana', price: 140}, {name: 'apple', price: 13}, {name: 'cherry', price: 50}];

// const sortedProduct = products.sort((a, b)=> {
//     return a.price - b.price;
// })

// console.log(sortedProduct);

// const students = [
//     { name: 'Karl', age: 22},
//    { name: 'Alice', age: 22},
//    { name: 'David', age: 40},
//    { name: 'Tom', age: 17}
// ]

// const sortedStudents = students.sort((a, b)=> {
//     if (a.age === b.age) {
//         return a.name.localeCompare(b.name);
//     }
//     return a.age - b.age;
// });

// console.log(sortedStudents);

// const finalStudents = [...students, {name: "Tim", age: 60}]
// console.log({finalStudents});
// // Destructuring for arrays, objects
// const myObject = {
//   key1: 'value1',
//   key2: 42,
//   key3: ['apple', 'banana', 'cherry'],
//   key4: { nestedKey: 'nestedValue' },
//   key5: true,
//   key6: null
// };

// const {key1, key2, key3, key4, key5, key6} = myObject;

// console.log(myObject.key1);
// console.log(myObject.key2);
// console.log(myObject.key3);
// console.log(myObject.key4);

// console.log({key1 ,key2, key3, key4, key5, key6});

// const myArray = [1, 2, 3, 4, 5, 6];

// const [first, second, third] = myArray;

// console.log(first, second);
// // const first = myArray[0];
// // const second = myArray[1];
// // const third = myArray[2];

// // Spread operator ... - raspandirea la elementele unui array sau object
// const newNumbers = [...myArray, 7, 8]; // [ 1, 2, 3, 4, 5, 6, 7, 8]
// console.log(newNumbers);

// const arr = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]

// const seniorPersons = arr.filter(element => element.age >= 18).sort((a, b)=> {
//     return a.name.localeCompare(b.name);
// }).map(element => `${element.name} can go to the matrix`); // [{name: ..., age...}]
// const juniorPersons = arr.filter(element => element.age < 18).sort((a, b)=> {
//     return a.name.localeCompare(b.name);
// }).map(element => `${element.name} is under age!`); // [{name: ..., age...}]
// const finalArray = [...seniorPersons, ...juniorPersons];

// console.log(finalArray);

// const person = {
//         name: "Bob Ziroll",
//         age: 100
// };

// const newPerson = {...person, city: 'Chisinau'}
// console.log(newPerson);

// const { name, ...restKeys } = newPerson;
// console.log(restKeys);

// const tomFormular = {name: 'Tom', ...restKeys};

// Rest syntax 
// const numbers = [1, 2, 3, 4, 5, 6];
// const [first, second, ...rest] = numbers;
// console.log(rest); // [3, 4, 5, 6]

// [first, second, ...rest]=[1, 2, 3, 4, 5, 6]

// ...rest = 3, 4, 5, 6
// rest = [3, 4, 5, 6]

// -x = -4 
// x = 4

// 5. Problema: Numărul de vocale
//    Scrieți o funcție care primește un șir de caractere și numără câte vocale conține șirul 
// utilizând o buclă `while`.
//    Exemplu de input: `Salut, ma numesc Maria'`
//    Exemplu de output: `8`

const countVowels = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    let count = 0;
    let i = 0;
    while (i < str.length) {
        if (vowels.includes(str[i])) {
            console.log(str[i]);
            count++;
        }
        i++;
    }

    return count;
}

console.log(countVowels('Salut, mA numesc Maria'));