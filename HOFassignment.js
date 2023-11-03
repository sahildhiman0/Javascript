//-------------------Answer-1---------------------------
// let str = "hey its me"
// let reverse = () =>{
//     let reverse = str.split('').reverse().join('');
//     console.log(reverse);
// }
// setTimeout(reverse, 2000);

// output - em sti yeh

//-------------------Answer-2---------------------------

// let delay = 3000;
// let time = delay / 1000;
// let timer = 0;

// let randomNGenerator = () => {
//     let no = Math.floor(Math.random() * 100);
//     console.log("Random Number: " + no);
// }

// let timereamning = () => {
//     console.log("Time remaining: " + time + " seconds");
//     time--;

//     if (time === 0) {
//         randomNGenerator(); 
//         clearInterval(khatm); 
//     }
// }

// let khatm = setInterval(() => {
//     timereamning();
// }, 1000);

//-------------------Answer-3---------------------------

// let list = [{
//     item:"a",
//     price:4
// },
// {
//     item:"b",
//     price:7
// },
// {
//     item:"c",
//     price:56
// },
// {
//     item:"d",
//     price:85
// }]

// let conversion = list.map((a) => a.price * 82)
// console.log(conversion);


//-------------------Answer-4---------------------------


// const books = [
//     {
//         title: "The Namesake",
//         author: "Jhumpa Lahiri",
//         year: 2010,
//     },
//     {
//         title: "The God of Small Things",
//         author: "Arundhati Roy",
//         year: 1997,
//     },
//     {
//         title: "A Suitable Boy",
//         author: "Vikram Seth",
//         year: 1993,
//     },
//     {
//         title: "The White Tiger",
//         author: "Aravind Adiga",
//         year: 2018,
//     },
//     {
//         title: "Midnight's Children",
//         author: "Salman Rushdie",
//         year: 1981,
//     },
// ];

// const filteredBooks = books.filter((book) => {
//     return book.year >= 2010;
// })

// const result = filteredBooks.map((book) => {
//     return {
//         ...book,
//         author: book.author.toUpperCase(),
//     };
// });

// console.log(result);

////-------------------Answer-5---------------------------
// const urlPattern = /^(https?:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]+[.][a-zA-Z]+$/;

// function isValidURL(input) {
//     return urlPattern.test(input);
// }

// const url = "htps://pwskls.com"


// if (isValidURL(url)) {
//     console.log(`"${url}" is a valid URL.`);
// } else {
//     console.log(`"${url}" is not a valid URL.`);
// }

////-------------------Answer-6---------------------------
// const linkedinProfileRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]\/$/;

// function isValidLinkedInProfileURL(url) {
//     return linkedinProfileRegex.test(url);
// }

// let url = 'https://www.linkedin.com/in/mithun-s-83a8a3186/'

// if (isValidLinkedInProfileURL(url)) {
//     console.log(`"${url}" is a valid LinkedIn profile URL.`);
// } else {
//     console.log(`"${url}" is not a valid LinkedIn profile URL.`);
// }
