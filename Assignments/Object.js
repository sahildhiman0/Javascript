
// --------------------------Answer1---------------------------
// const car = {
//     model:"suzuki",
//     year:2022,
//     manufactured:"India"
// }
// const showProperties=(obj)=>{
//     for (const key in obj) {
//         console.log(`${key} : ${obj[key]}` );
//     }
// } 

// showProperties(car)


// --------------------------Answer2---------------------------
// const student ={
//     name:"sahil",
//     age:20,
//     grade:"A (obviously...haha)"
// }

// const updateGrade = (newGrade)=> {
//     student.grade = newGrade
// }

// updateGrade("c")
// console.log(student);


// --------------------------Answer3---------------------------
// const exampleObject = { a: 1, b: 2, c: 3 };

// function countProperties(obj) {
//     return Object.keys(obj).length;
//   }
  
//   console.log(countProperties(exampleObject));
  

// --------------------------Answer4---------------------------
// const exampleObject = { name: "Alice", age: 25 };

// function hasProperty(obj, propertyName) {
// return obj.hasOwnProperty(propertyName)}
  
//   console.log(hasProperty(exampleObject, "age")); // true
//   console.log(hasProperty(exampleObject, "email")); // false
  

// --------------------------Answer5---------------------------

// const radius = 5;
// const area = Math.PI * Math.pow(radius, 2);

// console.log(area);

// --------------------------Answer6---------------------------

// const originalString = "Hello world!"

// function reverseString(input) {
//     return input.split('').reverse().join('');
//   }
  
//   const reversedString = reverseString(originalString);
//   console.log(reversedString);
  

// --------------------------Answer7---------------------------


// const mapObj = new Map()

// const makeNew = (name,age,email) => {
//     mapObj.set("Name",name)
//     mapObj.set("Age",age)
//     mapObj.set("email",email)
// }

// function deleteUser(name) {
//     mapObj.delete(name);
// }

// makeNew("sahil","20","sahildhimaann@gmail.com")
// deleteUser("Age")
// console.log(mapObj);

