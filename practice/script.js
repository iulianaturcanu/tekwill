// regex - expresii regulate 
const regex = /a/g;
// modificatori 
// 'i' - modificator ignora case sensitive 
// 'g' - modificator global 

const text = 'Suna-ma la numarul de telefon: 123-456-7890';
// 3 numbere - 3 numbere - 4 numbere
const phoneregex = /\d{3}-\d{3}-\d{4}/;
const phoneNumber = text.match(phoneregex);
console.log(phoneNumber[0]);

const text2 = "Contacteaza-ma la emailul: test@example.co.uk sau la office@example889.c777om";
const emailRegex = /[a-zA-Z0-9_-]+@\w+.[a-zA-Z0-9]+(?:\.[a-zA-Z]{2})?/g;
const emailAddresses = text2.match(emailRegex);

console.log(emailAddresses);

const text3 = 'Este data 22-05-2024';
const regex2 = /\d{2}-\d{2}-\d{4}/;
const newText = text3.replace(regex2, "X");
console.log(newText);