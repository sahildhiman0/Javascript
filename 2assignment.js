
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

//---------------------------- Answer 2
  
function priceCalculator(...numbers){
    let arr = Array.from(numbers)
    let sum = 0
    for(let num of arr){
        sum = sum + num;
    }
    console.log(`Final price of the items are ${sum}`)
}

priceCalculator(10,20,30,10,10)
//--output- Final price of the items are 80


// using Arguments 

function priceCalculator(){
    let arr = Array.from(arguments)
    let sum = 0
    for(let num of arr){
        sum = sum + num;
    }
    console.log(`Final price of the items are ${sum}`)
}

priceCalculator(10,20,30,10)
// output - Final price of the items are 70

