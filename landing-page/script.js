// Problema: Clasificarea studenților
//    Scrieți o funcție care primește un obiect care conține notele a mai mulți studenți și 
//  returnează un alt obiect care conține studenții clasificați în funcție de media notelor lor.
//    Exemplu de input: `{ John: [8, 7, 9], Mary: [9, 9, 10], Alex: [6, 8, 7] }`
//    Exemplu de output: `{ John: 'Medie: 8', Mary: 'Medie: 9.33', Alex: 'Medie: 7' }`

// const calculateAverage = (obj) => {
//     const studentsName = Object.keys(obj);
//     const result = {}
    
//     for (let i = 0; i < studentsName.length; i++){
//         const student = studentsName[i];
//         // console.log(obj[student]);
//         const sumaNote = obj[student].reduce((sum, nota)=> sum+nota);
//         // console.log(sumaNote);
//         const media = sumaNote/obj[student].length;
//         result[student] = `Media ${media}`;
//         // let sum = 0;
//         // for (let j = 0; j < obj[student].length; j++ ){
//         //     sum += obj[student][j];
//         // }
//         // const media = sum / obj[student].length;
//         // obj['John'] = "Media: 8"
//         // obj[student] = `Media: ${media}`;
//     }
//     return result;
// }

const calculateAverage = (obj) => {
    const values = Object.values(obj);
    const result = {};
    values.forEach((element, index)=> {
        const keys = Object.keys(obj);
        const sumaNote = element.reduce((sum, nota)=> sum+nota);
        const media = sumaNote/element.length;
        const student = keys[index];
        result[student] = `Media ${media}`;
    })
    return result;
}

console.log(calculateAverage({ John: [8, 7, 9], Mary: [9, 9, 10], Alex: [6, 8, 7] }));

// const button = document.getElementById('submit-appointment');
// const nameInput = document.getElementById('nameInput');
// const form = document.getElementsByClassName('appointment-form')[0];
// const handleSummit = (event) => {
//     // Prevent form submission
//     event.preventDefault();

//     const name = nameInput.value.trim();
//     if (name.length < 2) {
//         nameInput.style.borderColor = 'red';
//     }
// }

// form.addEventListener('submit', handleSummit);

// Sincron
function doTask() {
    for (let i=0; i< 3; i++){
        console.log("Executa sarcina"+ i);
    }
}

// console.log("Start");

// doTask();

// Asincron
console.log('Start'); // sincron
function doAsyncTask(callback) {
    setTimeout(() => {
        console.log('Sarcina asincrona');
        callback(); // console.log('Finish')
    }, 5000);
}

function finish() {
    console.log('Finish');
}

doAsyncTask(finish);

console.log("Continua executia"); // sincron
// !! Se afiseaza tot codul sincron si doar dupa se incepe executia la cod asincron
// Start
// Continua executia
// Sarcina asincrona
// Finish

// API, Endpoint, Request, HTTP, HTTPS