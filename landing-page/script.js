// Funtion closure 
// var, let, const
// cod sincron/asyncron
// function vs arrow function
// DOM
// Promise 

// Callback hell - numar mare de callback function, hard to track

const doSomething = (callback) => {
    setTimeout(()=> callback(), 1000);
}

const doSomethingElse = (callback) => {
    setTimeout(()=> callback(), 1000);
}

const doSomethingMore = (callback) => {
    setTimeout(()=> callback(), 1000);
}

doSomething(()=>{
    doSomethingElse(()=>{
        doSomethingMore(()=> {

        })
    })
})

// Pentru cod asincron - Promise, try catch, async await
// https://restcountries.com/v3.1/all
// const fetchDataWithPromise = () => {
//     return new Promise((resolve, reject) => {
//         fetch('https://restcountries.com/v3.1/all').then(response=> response.json()).then(data => resolve(data));
//     })
// }

// fetchDataWithPromise()
// .then(result => console.log('Promise: ', result))
// .catch(error => console.log('Error', error));

// const fetchDataWithTryCatch = async () => {
//     try {
//         const response = await fetch('https://restcountries.com/v3.1/all');
//         const data = response.json();
//         return data;
//         // return await response.json();
//     } catch (error) {
//         throw error;
//     }
// }

// fetchDataWithTryCatch().then(result => console.log(result));

const fetchData = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}

fetchData();