// ----------object and array-----------------------



// function parameterTesting(){
//     console.log(arguments)
//     console.log(typeof arguments)
    //this argument is a object not an array so reduce filter or any array method will not work here 
    //if we want to use this we have to first convert this into array

    //lets convert
//     const convert = Array.from(arguments)
//     console.log(convert);
//     console.log(typeof convert);

// }

//alternate 
// function alternate(...number){
//     console.log(number)
//     console.log(typeof number);
// }



// parameterTesting(1,3,42,"dfk")
// alternate(2,3,52,23)

// let arr = [2,4,24,3]
// console.log(typeof arr + " " + arr)


// arrow functions
// difference between arrow and normal function
// 1- Syntax
// 2- console.log(argument) object or function not allowed in arrow function
// 3- binding of this ---- normal function me this keword . ke age jo object hai usko point krta hai
// or arrow function me khud ka this nahi hota hai woh apne parent yani window object jo point krta hai
// 4- cannot use new keyword with arrow function





//----------------------------------------------array methods---------------------------------------------------------------------




//add and remove array at the end of array

//push and pop method
// let list = [2,3,5,"sahil",39]
// console.log(list)

// list.push("haha")
// console.log(list)

// list.pop()
// list.pop()
// console.log(list)


//add and remove at the front of the array

//shift and unshift method
// console.log(list)
//unshift adds the element
// list.unshift("new hai")
// console.log(list)

//shift remove the element
// list.shift()
// console.log(list)

//push and pop method is more efficient as it dont require to change the indexing of the other elements before them


//---------------------array delete-------------------------

// let arr = [1,2,3,4,5,6]
// console.log(arr)

// delete arr[2]
// console.log(arr)
// this will delete the value only but the location will be empty and length will be the same as before

//slice method - return subarray you selects, takes exaclty two arguments , default arguments is 0 to n 

// let arr = ["my","name","is","sahil","Dhiman"]
// console.log(arr.slice(1,4))
// console.log(arr)
//it will not change the real array insted it will return a new array and last parameter didnt include

//how to make a copy of array using slice but it will do shallow copy and not deep copy

// let arr = [1,2,3,4,5]
// let copyArr = arr.slice()

// copyArr.push("lol")

// console.log(arr)
// console.log(copyArr)


// splice - we can do multiple things with splice like - add, delete, replace

// for delete 
// let arr = ["i","am","sahil","dhiman"]
// console.log(arr.splice(1,2))
// console.log(arr)

//delete and replace item using splice 


// arr.splice(0,3,"haha","lol")//0 se start kro and 3 items delete karo and unki jgah yeh pado 
// console.log(arr)

//only for insert

// arr.splice(4,0,"insert","kardiya")// fourth index se start karo and 0 ka matlab kuch delete mat karo and 3 se insert karo
// console.log(arr);


// ----------------------------Array concat method----------
// this methods combine array, values into single array 

// let arr = [1,2,3,4,5]
// console.log(arr.concat([10,20,30]))
// console.log(arr.concat([10],[20],72))


// --------------iterate in array------------------


// [10,20,30].forEach(function(item,index,array){
//     console.log(`${item} is at index ${index} in array ${array}`)
// })

//------------------------Searching in an array------------------------------------

// let arr = [1,2,3,null,30]
// console.log(arr.indexOf(3))
// agar woh element present hua toh index return kr dega agar nahi present toh -1 return kar dega

//includes methods similar to index but it returns boolean value
// console.log(arr.includes(3))


// find function 
// let arr = [
//     {name:"sahil" ,id:1},
//     {name:"arjun" ,id:3},
//     {name:"dhiman" ,id:2}
// ]


// let user = arr.find(function(item,index,array){
//     return item.name == "dhiman"
// })


// console.log(user)

// we have find index too
// let user = arr.findIndex(function(item,index,array){
//     return item.name == "sahil"
// })
// console.log(user)

// reverse method to reverse an array

// let arr = [10,38,345,37,22]
// let arr2 = arr.slice(0)


// arr2.reverse(arr2)
// console.log(arr)
// console.log(arr2)

// split and join method 

//string to array using split
// split is used to split an string into array of substring // it returns an new array

// let sentence = "hey i am very good today"

// let haha = sentence.split(" ")
// console.log(haha);

// array to string

// let arr = ["banana","apple","kiwi"]

// let sting = arr.join(" AND ")

// console.log(sting);

//------------call apply & bind method ----------------------------------------------

// we can use fnction as a object too, function is a very powerfull thing

function power(names){
    console.log("function called",names)
}

power.id=20;

power("sahil")
console.log(power.id);