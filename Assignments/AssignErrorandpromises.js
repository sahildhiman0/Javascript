
//-----------------------------------------Answer 1----------------------------------
// let elem =[1,2,3,4,5]

// function callback(arr){
//    let abc = arr.map(function(element){
//      return element *2
//   })
//   console.log(abc);
// }


// function double(arr,func){
//    func(arr) 
// }

// double(elem,callback)

//-----------------------------------------Answer 2----------------------------------

// function callback(string){
//     let convert = string.toUpperCase()
//     console.log("The manipulated string is = ",convert);
// }

// function convertString(string,callbacks){
//     callback(string)
// }

// convertString("hello world",callback)

//-----------------------------------------Answer 3------------------------------------

// const person = {
//     FirstName:"Sahil",
//     LastName :"Dhiman",
//     AgeInYears:20
// }


// const ageindays = (person,func) =>{
//     let fullName = person.FirstName.concat(" ", person.LastName)
//     let Ageindays = person.AgeInYears*365
//     func(fullName,Ageindays)
// }


// const log = (name,age)=>{
//     console.log(`Person full name is ${name} and their age in days is ${age}`)
// }
// ageindays(person,log)

//-----------------------------------------Answer 4----------------------------------

// let books = [
//     { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
//     { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
//     { title: "Abcd", author: "George Orwell", year: 1949 },
//     { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 }
//   ];
  


// function arrangement(book,funct){
//     let newLists = book.map((elem) => elem.title)
//     funct(newLists)
// }

// function log(list){
//     let sort = list.slice().sort()
//     console.log(sort.join(", "));
// }

// arrangement(books,log)


//-----------------------------------------Answer 5----------------------------------

// function mypromise(name)
// {
//     return new Promise((resolve,reject)=>{
//         resolve(`hello ${name}`)})
//     }
//     mypromise("sahil").then((elem)=>console.log(elem))
    
//-----------------------------------------Answer 6----------------------------------
    
    // async function getData(){
    //         let response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    //         let jsonFormat = await response.json()
    //         console.log(jsonFormat);
    //     }
    //     getData()
        
//-----------------------------------------Answer 7----------------------------------


// async function getData(){
    //     let toDoTask = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    //     let res1 = await toDoTask.json()
    
    //     let postDetails = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    //     let res2 = await postDetails.json()
    
    //     let obj = {}
    //     obj.todo = res1
    //     obj.post = res2
    
    //     console.log(obj);
    // }
    
    // getData()
    
    //or 
    
// async function getData(){
    
//     let data = await Promise.all([
//        fetch("https://jsonplaceholder.typicode.com/todos/1")
//           .then((response)=>response.json()),
//        fetch("https://jsonplaceholder.typicode.com/posts/1")
//          .then((response)=>response.json())])

//     let [data1,data2] = data

//     let obj = {
//         todo:data1,
//         post:data2
//     }
//     console.log(obj);
// }
// getData()


//-----------------------------------------Answer 8----------------------------------

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <script>
//         fetch("https://jsonplaceholder.typicode.com/posts")
//         .then((result)=>result.json())
//         .then((fResult)=>console.log(fResult))
//         .catch((error)=>console.log(error))
//     </script>
// </body>
// </html>

//-----------------------------------------Answer 9----------------------------------
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <script>
//         fetch("https://jsonplaceholder.typicode.com/posts/123456789")
//         .then((response)=>{
//             if(!response.ok){
//                 throw  new Error("Network response was not okay")
//             }
//         })

//     </script>
// </body>
// </html>









