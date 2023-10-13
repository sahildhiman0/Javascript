// objects dont have many methods
// let employee = {
    //     name:"sahil",
    //     class:"bca",
    //     age:20
// }

// let a = Object.keys(employee) 
// this will return array of keys 
// console.log(a);
// now we can apply any method in this array 
// a.forEach((key) => console.log(key)) 
  // this will return array of keys 
// this is called method chaining 
// now for values
// Object.values(employee).forEach((element) => console.log(element))


// now if we want to use both key and value 

// let both = Object.entries(employee)
// console.log(both); 
// this will returns array of arrays and inner array contains 2 elements one is key and value
// if we want to do manipulation and then convert to object then we can use another method that is 

// let convert = Object.fromEntries(both)
// console.log(convert);

//for making clone of a object we use object.assign

// let newobj = Object.assign({},employee) // it copy elements or properties to an target object{}
// console.log(newobj , newobj === employee ); // that means both are different  but clones

// let employee = {
    //     name:"sahil",
//     class:"bca",
//     age:20
// }

// Object.freeze(employee) // it freeze the manipulation of the object with this method
// employee.name = "rahul"
// console.log(employee);

// console.log(Object.isFrozen(employee)); // gives you true or false if frozen or not


// object . seal // also have issealed method for cheacking
// let employee = {
//     name:"sahil",
//     class:"bca",
//     age:20
// }

// it will basically allow to manipulate the existing data but you cannot add a new one and in the case of frozen 
// you cannot manipulate existing too  

// hasown 
// console.log(Object.hasOwn(employee,'age'));

// three ways to make object 
// object literal
// let employeess = {
//     name:"sahil",
//     id:10,
//     salary:50000
// }
// console.log(employeess);

//new instance object constructor ----we dont use it much due to bad and bekar syntax
// const employee = new Object()
// employee.name="sahil"
// employee.haha="pta nahi"

// console.log(employee);

// access properties through dot and bracket notation
// console.log(employee.name);
// console.log(employee['name']);
// // manupulate
// employee.name="navahai"
// console.log(employee);

//delete keyword - we can use delete keyword in object but not in array because array is special type of object
// because it makes one empty space and index will remain same , we can use splice or push pop etc in array 

// delete employee.name
// console.log(employee);

// note - if there is multi key then we have to use bracket notation instead dot becuase we cannot give space

//itrating in objects - for in
// let employeess = {
//          name:"sahil",
//          id:10,
//          salary:50000
//      }

// for(let key in employeess) {
  
//     // console.log(employeess.key);
//     console.log(key,employeess[key]);
// }

//pass by value and pass by reference

// pass by value ..YEH primitive data type me hi hota hai 
// let a ="sahil" 
// let b = a

// a = "rahul"

// console.log(a);
// console.log(b);
// so value is passed in starting and it make a copy in b variable and both a and b have same value but they both are
// different and have different memory location 
// primitive data type are passed by value

// pass by reference - non primitive data type - objects and all special objects like array set, map etc are passed by reference


// let objjj = {
//     name:'sahil',
//     class:'bca'
// }
// let objjj2 = objjj

// no new obj is formed here and no copy is here, objects are passed by reference ek hi memory me objjj store hai
// and objjj bhi usi value pe point kar rha hai without copying it 
// pass by reference me ata hai shallow copy and deep copy 

//math is an built in object that have properties and methods

// console.log(Math.abs(-10));
// console.log(Math.trunc(10.38947));
// console.log(Math.sqrt(10));
// console.log(Math.round(4.3)); // round off to nearest integers 
// console.log(Math.ceil(4.3)); // round off in upward
// console.log(Math.floor(4.9)); // value downward

//strings is not a object but language temp covert into string object to use method and then return back to primitive data type
// They are immutable we cannot change the value of strings
// Strings cannot be changed in place. Operations that appear to modify a string actually create a new string.
// there are more and more string methods and properties you can learn about them 

// date object 

// let DateTime = new Date()

// console.log(DateTime);
// date have many inbuilt methods you can use 
// for ex

// console.log(DateTime.getDate());
// console.log(DateTime.toDateString());

// map and set 
// array is an ordered object but other are unordered 
// set are unordered collection and can store only unique values 

// const setExample = new Set();
// console.log(setExample);
// setExample.add(5)
// setExample.add(7)
// setExample.add(5)
// setExample.add(7) will not add because of duplicasy

// console.log(setExample);

//have many more methods 

// lets convert array into set so that duplicate elements will be removed 

// let arr = [1,2,4,4,4,4,5,5,5,5,55,52,2,2,2,2,30,20]

// let maps = new Set(arr)

// console.log(arr);
// console.log(maps);

// console.log(Array.from(maps));

//map 

// Map() and Set() objects! These are powerful data structures in JavaScript that offer unique capabilities for managing collections of data. Let's dive into each of them:
// Sets and Maps in JavaScript offer benefits such as ensuring uniqueness of values, efficient lookups, and versatility in data management. Sets store unique values and are useful for maintaining collections of distinct items. Maps associate values with unique keys, making them suitable for key-value data relationships. Both structures are iterable and enhance code readability and performance in handling collections and associations.

// map are keyed collection we can make keys of any type wheter its object numbers or anything unlike objects which keys have only strings 

// let maps  = new Map()
// maps.set("1","haha")  // keys can be of any type
// maps.set(1,"lal")
// maps.set("1","skja")


// console.log(maps);

// console.log(maps.get(1));
// console.log(maps.get("1"));
// keys must be different otherwise it will be override 