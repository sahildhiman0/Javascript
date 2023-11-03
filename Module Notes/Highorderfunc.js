
//Function currying
// const higherfunc = n =>{
//     const oneFun = m =>{
//         const twoFun = p =>{
//            return n + m + p
//         }

//      return twoFun


//     }
//     return oneFun
// }

// // console.log(higherfunc(1)(3)(10))

// let first = higherfunc(5) //now first have the functions that higherfunc returns
// let second = first(3) // this have the function that one fun returns
// let third = second(5)
// console.log(third);




// const curryings  = (one) => (two) => (three) => `${one}, ${two},  ${three}`

// console.log(curryings("hi")("hello")("how are you"))

let arr = ["hey","how", "are","you"]

let storeeach = arr.forEach((el)=>{
    console.log("for each starts running");
})


let storemap = arr.map((el)=>{
   return "map starts running"
})

console.log(storeeach);
console.log(storemap);