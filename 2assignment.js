
// -------------------------------------------Assignment -2 -----------------------------------------------------

//--------------Answer - 1----------------------
// let arr = ["a","b","c","d"]
// let button = true

// function check(username1){
//     for(let usernames2 of arr)
//     {  
//         if(username1 === usernames2)
//         {
//             console.log(`${username1} is present `)
//             button = false
//             break;
//         }
//     }
//     if(button == true)
//     {
//         console.log("not present")
//     }
// }
// check(14)

// ------output = not present


// using array.includes method

// let arr = ["sahil","rakesh","rohan"]

// function checkUser(username){
//     if(arr.includes(username)){
//         console.log(`${username} is present`)
//     }else{
//         console.log("not present");
//     }
// }

// checkUser("rohan")
//output - rohan is present


// using array.index method

// function checkindex(username){
//     if(arr.indexOf(username)>=0){
//         console.log(`${username} is present`)
//     }else{
//         console.log("not present");
//     }
// }
// checkindex("sahil")
//output - sahil is present 

//---------------------------- Answer 2 ------------------------
  
// function priceCalculator(...numbers){
//     let arr = Array.from(numbers)
//     let sum = 0
//     for(let num of arr){
//         sum = sum + num;
//     }
//     console.log(`Final price of the items are ${sum}`)
// }

// priceCalculator(10,20,30,10,10)
//--output- Final price of the items are 80


// using Arguments 

// function priceCalculator(){
//     let arr = Array.from(arguments)
//     let sum = 0
//     for(let num of arr){
//         sum = sum + num;
//     }
//     console.log(`Final price of the items are ${sum}`)
// }

// priceCalculator(10,20,30,10)
// output - Final price of the items are 70

// --------------------Answer 3----------------


// let students = [
//     { names: "sahil", marks: 90 },
//     { names: "akshay", marks: 70 },
//     { names: "Himansh", marks: 82 },
//     { names: "rahul", marks: 95 },
//     { names: "vaibhav", marks: 80 },
//     { names: "gaurav", marks: 30 }
//   ];
  
//   function checkResults(input) {
//     let user = students.find(function (item) {
//       return item.names == input;
//     });
  
//     if (user) {
//       if (user.marks >= 90) {
//         console.log(`Congratulations ${user.names}, you passed.`);
//       } else {
//         console.log(`Sorry ${user.names}, you failed.`);
//       }
//     } 
//     else {
//       console.log("Student not found.");
//     }
//   }
  
//   checkResults("harsh");
//output - student not found



// ------------Answer4---------
// const products = [
//     { name: "laptop", price: 120 },
//     { name: "mobile", price: 80 },
//     { name: "laptop bag", price: 15 },
//     { name: "charger", price: 2 },
//     { name: "ipod", price: 17 },
//     { name: "headphone", price: 25 },
//     { name: "monitor", price: 10 }
// ];

// function minmax() {
//     let min = products[0].price;
//     let max = products[0].price;
//        let maxProduct = products[0].name
//        let minProduct = products[0].name

//     for (let i = 0; i < products.length; i++) {
//         if (products[i].price < min) {
//             min = products[i].price;
//                 minProduct = products[i].name
//         }
//         if (products[i].price > max) {
//             max = products[i].price;
//                 maxProduct = products[i].name
//         }
//     }

//     console.log(`the product with minimum amount is ${minProduct} with price of ${min}`);
//     console.log(`the product with maximum amount is ${maxProduct} with price of ${max}`);
// }
    

// minmax();
//output - the product with minimum amount is charger with price of 2
// the product with maximum amount is laptop with price of 120


//--------------------------------Answer5--------------------------------

// const guests = ["Aryan","Yash","Sahil","Chirag","Bhola"]
// console.log(guests.join(", "))
//output - Aryan, Yash, Sahil, Chirag, Bhola

//--------------------------------Answer6--------------------------------
// const productDetails = {
//     name:"apple 2020 Macbook Air Laptop",
//     price:82000,
//     color:"grey",
//     hardDisk:"256 GB",
// };
// console.log("below are the products Details")
// for (const key in productDetails) {
//     console.log(`${key}: ${productDetails[key]}`);
// }

//-----------------------Answer7----------------------------------------

    // function generateFourDigitRandomNumber() {
    //     const min = 1000; // Minimum four-digit number
    //     const max = 9999; // Maximum four-digit number
    //     return Math.floor(Math.random() * (max - min + 1)) + min;
    // }
    
    
    // const randomFourDigitNumber = generateFourDigitRandomNumber();
    // console.log(`here is your otp : ${randomFourDigitNumber}`);
    // output : here is your otp : 7987


    //----------------------------Answer8--------------------------


    // function calculateRemainingDays(eventDate) {
        // Convert the event date string to a Date object
        // const eventDateObject = new Date(eventDate);
    
        // Get the current date
        // const currentDate = new Date();
    
        // Calculate the time difference in milliseconds
        // const timeDifference = eventDateObject - currentDate;
    
        // Calculate the number of days remaining
        // const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    
        // return daysRemaining;
    // }
    
    // const eventDate = "2023-08-29"; // Make sure to use "08" for August
    // const remainingDays = calculateRemainingDays(eventDate);
    // console.log(`Remaining days until the event: ${remainingDays} days`);
    //output - Remaining days until the event: -27 days

    //----------------------------Answer9--------------------------

    // function checkUniqueness(username) {
    //     let arr = username.split("");
    //     let unique = true;
    
    //     for (let i = 0; i < arr.length; i++) {
    //         for (let j = i + 1; j < arr.length; j++) {
    //             if (arr[i] === arr[j]) {
    //                 unique = false;
    //                 break;
    //             }
    //         }
    //         if (!unique) {
    //             break;
    //         }
    //     }
    
    //     if (unique) {
    //         console.log("Letters are unique.");
    //     } else {
    //         console.log("Letters are not unique.");
    //     }
    // }
    
    // checkUniqueness("sahil");
    
    //output - Letters are unique.


    //--------------------Answer 10------------------------------
    // function countUniqueWords(sentence) {
    //     // Split the sentence into words
    //     const words = sentence.toLowerCase().match(/\b\w+\b/g);
    
    //     // Create a Map to store word counts
    //     const wordCountMap = new Map();
    
    //     // Count the occurrences of each unique word
    //     for (const word of words) {
    //         if (wordCountMap.has(word)) {
    //             wordCountMap.set(word, wordCountMap.get(word) + 1);
    //         } else {
    //             wordCountMap.set(word, 1);
    //         }
    //     }
    
    //     // Print the word counts
    //     for (const [word, count] of wordCountMap) {
    //         console.log(`${word}: ${count}`);
    //     }
    // }
    
    // const sentence = "This is a test. This is only a test.";
    // countUniqueWords(sentence);
    