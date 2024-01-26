// Function and arrow function
// this
// console.log(this);
// 1. Syntax

// 2. This binding
const obj = { 
    name: 'Ana',
    age: 24,
    calculateBirthYear: function() {
        console.log(2024-this.age);
    }
}
// this referinta la obiect

const obj2 = { 
    name: 'Ana',
    age: 24,
    calculateBirthYear: () => {
        console.log(this);
    }
}

// this - window reference
console.log(obj.calculateAge);

// 3. Accesability 
// arrow functions cannot be accessed before initialization

printName();

function printName(){
    console.log('Ana');
}

// printSurname();
const printSurname = () => {
    console.log('Moraru')
}

// 4. Objects constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

const john = new Person('John', 30);
const ana = new Person('Ana', 20);
// const john = {
//     name: 'John',
//     age: 30
// }
console.log(john.age, john.name);

// const Person2 = (name, age) => {
//     this.name = name; // Eroare;
//     this.age = age; // Eroare;
// }

// const maria = new Person2('Maria', 34);
// console.log(maria.name, maria.age);

// JSON
// JSON -> Object
// object -> JSON


const apiResponse = {
  "count": 42,
  "next": null,
  "previous": null,
  "results": [
    {
      "category": "B",
      "qid": 1,
      "number": 1,
      "ticket": 1,
      "subject": "1.1",
      "question": "Под термином «обгон» понимается:",
      "answers": "[\n    \"Опережение движущегося транспортного средства, связанное с выездом из занимаемой полосы. Движение транспортных средств по одной полосе проезжей части со скоростью большей, чем скорость транспортных средств по соседней полосе, не считается обгоном.\",\n    \"Опережение одного или нескольких транспортных средств, движущихся по левой полосе с меньшей скоростью.\",\n    \"Опережение одного или нескольких транспортных средств, движущихся по правой полосе с меньшей скоростью.\"\n]",
      "shuffle": 2,
      "hint": "Обгон - опережение движущегося транспортного средства, связанное с выездом из занимаемой полосы. Движение транспортных средств по одной полосе проезжей части со скоростью большей, чем скорость транспортных средств по соседней полосе, не считается обгоном. П. 7.",
      "has_img": false,
      "md5sum": "d3d9446002a44259755d38e6d163e820"
    },
    {
      "category": "B",
      "qid": 2,
      "number": 2,
      "ticket": 1,
      "subject": "1.1",
      "question": "Под термином «уступи дорогу» понимается:",
      "answers": "[\n    \"Прекращение движения транспортного средства с целью устранения препятствия на определённом участке дороги.\",\n    \"Прекращение движения транспортного средства с целью определения реальной дорожной обстановки, в которой находится транспортное средство в данный момент.\",\n    \"Обязанность участника дорожного движения воздержаться от движения, если это вынудит других участников, имеющих преимущество, резко изменить направление движения, скорость или остановиться.\"\n]",
      "shuffle": 2,
      "hint": "Уступи дорогу - обязанность участника дорожного движения воздержаться от движения, если это вынудит других участников, имеющих преимущество, резко изменить направление движения, скорость или остановиться. П. 7.",
      "has_img": false,
      "md5sum": "b6d767d2f2ed5d21a44b0e5886680cb9"
    },
    {
      "category": "B",
      "qid": 5,
      "number": 5,
      "ticket": 1,
      "subject": "1.1",
      "question": "Сколько проезжих частей имеет дорога, по которой Вы движетесь?",
      "answers": "[\n    \"Одну.\",\n    \"Две.\",\n    \"Четыре.\"\n]",
      "shuffle": 2,
      "hint": "Проезжая часть - часть дорожного полотна, предназначенная для движения транспортных средств. Дорога может иметь несколько проезжих частей, отделённых одна от другой разделительными полосами. Разделительная полоса - элемент дороги, выделенный конструктивно и/или посредством разметки, который разделяет смежные проезжие части и который не предназначен для движения и остановки транспортных средств. П. 7.",
      "has_img": true,
      "md5sum": "c0c7c76d30bd3dc0efc96f40275bdc0a"
    },
    {
      "category": "B",
      "qid": 6,
      "number": 6,
      "ticket": 1,
      "subject": "1.1",
      "question": "Под термином «полоса движения» понимается:",
      "answers": "[\n    \"Элемент дороги, предназначенный для движения пешеходов, который примыкает к проезжей части или отделён от неё газоном.\",\n    \"Продольная полоса проезжей части, обозначенная или не обозначенная дорожной разметкой, имеющая ширину, достаточную для беспрепятственного движения в один ряд транспортных средств иных, чем двухколёсные.\",\n    \"Часть дороги, как правило с зелеными насаждениями, разделяющая смежные проезжие части.\"\n]",
      "shuffle": 2,
      "hint": "Полоса движения - продольная полоса проезжей части, обозначенная или не обозначенная дорожной разметкой, имеющая ширину, достаточную для беспрепятственного движения в один ряд транспортных средств иных, чем двухколёсные. П. 7.",
      "has_img": false,
      "md5sum": "7f39f8317fbdb19881f4c628eba02591"
    },
  ]
};

// JSON string -> Object

const Json= JSON.stringify(apiResponse);
const responseObject = JSON.parse(Json);

// Accesez si sa afisez informatia din objectul 
console.log('Lista de intrebari:');
responseObject.results.forEach((result)=> {
    console.log("Result: ", result.question);
    JSON.parse(result.answers).forEach((answer, i) => console.log(`Raspuns ${i+1}`, answer))
})

// Function closure
const counter = () => {
    let count = 0;

    const increment = () => {
        count++;
        console.log({count});
    }

    const decrement = () => {
        count--;
        console.log({count});
    }

    return {
        increment: increment,
        decrement: decrement
    }
}

counter().increment();
counter().decrement();

// DOM (Document Object Model)
// 1. Accesarea elementelor html
// 1.1 getElementById
const homeSection = document.getElementById('home-screen');
// 1.2 getElementsByClassName
const navItems = document.getElementsByClassName('nav-item');
// 1.3 getElementsByTagName
const images = document.getElementsByTagName('img');
// 1.4 querySelector
const element = document.querySelector('.feature-container li:last-of-type');

// Modificarea stilurilor elementelor
homeSection.style.backgroundColor = '#f1f1f1';
navItems[0].style.color = 'red';

homeSection.innerHTML = '<div>Hello world</div>';
navItems[0].textContent = 'Tekwill';

images[0].setAttribute('src', 'img/feature-1.svg');
// element.removeAttribute('required')