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
let employee = {
    name:"sahil",
    class:"bca",
    age:20
}

// it will basically allow to manipulate the existing data but you cannot add a new one and in the case of frozen 
// you cannot manipulate existing too  

// hasown 
console.log(Object.hasOwn(employee,'age'));