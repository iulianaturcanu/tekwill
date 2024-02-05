// setTimeout()
// delay - intarziere

// setTimeout(() => {
//     console.log('Hello');
// }, 1000);

// setInterval(() => {
//     console.log('Goodbye');
// }, 1000);

// const image = document.getElementById('facebook-icon');

// const animateImage = () => {
//     let position = 0;
//     const distance = 1000;

//     const step = 100;

//     const move = () => {
//         position += step;
//         image.style.transform = `translateX(${position}px)`;
    
//         if (position < distance ) {
//             // setTimeout(()=> move(), 100);
//             setTimeout(move, 100);
//         }
//     }

//     move();
// }

// animateImage();

// const countdown = (seconds) => {
//     const count = () => {
//         if (seconds > 1) {
//             seconds--;
//             console.log(seconds);
//             setTimeout(count, 1000);
//         } else {
//             console.log("Countdown completed");
//         }
//     }

//     count();
// }

// countdown(6);

// const displayMessage = () => {
//     console.log('Mesajul se afiseaza la fiecare 2 secunde');
// }

// const interval = setInterval(displayMessage, 2000);

// // dupa 10 secunde, opriti functia data
// setTimeout(()=> {
//     clearInterval(interval);
//     console.log('Executia functiei s-a oprit');
// }, 10000);

// const showAlert = () => console.log('Alerta! Avem o notificare');

// const timeout = setTimeout(showAlert, 5000);

// setTimeout(()=> {
//     clearTimeout(timeout);
//     console.log('Intarzierea a fost anulata');
// }, 3000)

// console.log('start');

// setInterval(()=> {
//     console.log('interval');
// }, 500);

// setTimeout(()=> {
//     console.log('timeout1')
// }, 2000);

// while (true) {

// }

// 0 .... 500 ... 1000 .... 1500 .... 2000
// console.log('end');
// - Cod sincron
// Start
// End
// - Cod asyncron
// interval, interval, interval, timeout, interval....


// console.log('Start');
// setTimeout(()=> {
//     console.log('timeout');
// })

// Promise.resolve().then(()=> {
//     console.log('resolve');
// })

// console.log('end');

// Event loop - call stack-ul, microtask-uri si macrotaskuri
// prioritatea mai mare - microtaskurile (promise-uri sau async/await)
// prioritatea mai mica - macrotaskurile (setTimeout, setInterval)
// start, end, resolve, timeout

const imageUrls = [
    'url-image1',
    'url-image2',
    'image3'
]

const downloadImage = (url)=> {
    console.log('S-a descarcat imagea de pe linkul ' + url)
    return url;
};

const showImages = () => {
    const downloadImages = imageUrls.map(url => downloadImage(url)); // []

    console.log(downloadImages);
    Promise.all(downloadImages)
    .then(downloadImage => console.log('Se afiseaza in UI imaginea' + downloadImage))
    .catch(console.log);
}
showImages();
