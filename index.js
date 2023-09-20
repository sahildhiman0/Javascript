
// -----------------------Javascript fundamental assignment 1----------------------------




// ----Answer1---
// let totalValue = 2000;
// let discountPercentage = 20;

// let discount = (discountPercentage/100) * totalValue;
// let finalcost = totalValue - discount;

// console.log(finalcost)





// ----Answer2---
// let userName = "admin"
// let passsword = "12345"

// if(userName=="admin" && passsword =="12345"){
//     console.log("login successful, you are welcome")
// }else{
//     console.log("invalid credentials");
// }





// ----Answer3---
// let indianRuppee = 850
// let ruppeeToDollar = indianRuppee/82
// console.log(`${indianRuppee} INR is ${ruppeeToDollar} USD`)





// ----Answer4---
// let noOfChilds = 2;
// let noOfAdults = 1;
// let noOfSeniors = 1;

// let childrenPrice = noOfChilds*100;
// let adultPrice = noOfAdults*150;
// let seniorsPrice = noOfSeniors*120;
// let totalCost = childrenPrice + adultPrice + seniorsPrice;

// console.log(totalCost);






// ----Answer5---

// let packageType = "overnight";

// switch (packageType) {
//     case "standard":
//         console.log("it might take 3-4 days to sucessfully delivered")
//         break;
//     case "express":
//         console.log("it might take 1-2 days to sucessfully delivered")
//         break;
//     case "overnight":
//         console.log("you package will be delivered till tomorrow")
//         break;
//     default:
//         console.log("Select one package");
//         break;
// }






// ----Answer6---
// let Name = "sahil";
// let email = "ajdhsak@gmail.com";
// let age = "28";

// typeof Name === "string" ? console.log(`your Name is ${Name}`) : console.log("Name should be a string");
// typeof email === "string" ? console.log(`your email is ${email}`) : console.log("email should be a string");
// typeof age === "number" ? console.log(`your age is ${age}`) : console.log("Age should be a number");






// ----Answer7---
// let items = ['egg','banana','oats','almonds']
// for(let i = 0; i<items.length ;i++){
    //     console.log(items[i]);
    // }
    
    
    
    
    // ----Answer8---
// console.log("Counting From 10 to 0");
// let i = 0;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }



 
    // ----Answer9---
    // const arr = [1,2,82,"sjdh"];

    // for(let i = 0; i<arr.length; i++){

    //     if( typeof arr[i] === "string" ){
    //         console.log("Found the first string " +arr[i] );
    //         break;
    //     }
    // }




// ----Answer10---
let arr = [1,-2,-3,5,-9,1,-23];

for(let i = 0; i<arr.length; i++){
    if(arr[i]>0){
        console.log(arr[i]);
    }
}