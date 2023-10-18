// let input = document.querySelector("input[type=file]");
// const image = document.getElementById("uploadFile")


// input.addEventListener("change", ()=>{
//     const selectedFile = input.files[0];
//     const reader = new FileReader();

//     reader.onload = function(event) {
//         const src = event.target.result; // Get the src as a data URL
//         image.src = src; // Set the src of the display image
//     };

//     reader.readAsDataURL(selectedFile);// the result of this will be stored in event object
// });



// I understand your question. The order in which reader.onload is set and where reader.readAsDataURL(selectedFile); is placed might seem counterintuitive at first, but it has to do with how JavaScript handles asynchronous operations and event-driven programming.

// Here's the rationale for why reader.onload is set before reader.readAsDataURL(selectedFile);:

// Event Setup: You set up the event handler (reader.onload) first so that it's in place to respond when the asynchronous operation (reading the file) is complete.

// Asynchronous Nature: The file reading process started by reader.readAsDataURL(selectedFile); is asynchronous. This means it occurs in the background while your JavaScript code continues to execute. If you set reader.onload after reader.readAsDataURL(selectedFile);, there's a chance the reading operation could complete before you've set up the event handler to respond to it.

// Handling Completion: You want to be ready to handle the result as soon as the file reading is done. By setting up the onload event handler before initiating the read operation, you ensure that it's ready to respond as soon as the reading is complete.

// In this way, you set up the "listener" (the event handler) before the "event" (the completion of file reading) occurs, so that you can respond to the event in a timely manner.

// In summary, it's a common practice in event-driven programming to set up event handlers before initiating asynchronous operations, so you can handle the results as soon as they are available. This ensures that your code is prepared to respond to events when they occur.



// second question
// let button = document.getElementById('button')
// let heading = document.getElementById('heading')
// let body = document.body
// let toogle = true


// button.addEventListener('click',()=>{
    
//     if(toogle==true){
//     heading.innerText = "This is dark mode"
//    body.style.backgroundColor = "black"
//    heading.style.color = "white"
//    toogle=false
//     }
//     else{
//         heading.innerText = "This is light mode"
//         body.style.backgroundColor = "white"
//         heading.style.color = "black"
//         toogle=true
//     }
// })

//third
// let increase = document.getElementById("increase")
// let decrease = document.getElementById("decrease")
// let changes = document.getElementById("changes")

// let counter = 0

// increase.addEventListener("click",()=>{
//     counter++
//     changes.innerText = counter
// })


// decrease.addEventListener("click",()=>{
//     counter--
//     if(counter<0){
//         alert("you cannot go below zero")
//         counter++
//     }
//     else{
//         changes.innerText = counter
//     }
// })

// let name = document.getElementById("name")
// let password = document.getElementById("password")
// let button = document.getElementById("button")


// button.addEventListener('click',()=>{
//     let username = name.value
//     let passwords = password.value
//     console.log(username.length);
//     console.log(passwords.length);
//     if(username.length>=3 && passwords.length>=8 ){
//         alert("Form validation successful")
//     }
//     else{
//         alert("Form validation failed, Do check you input first")
        
//     }

// })

// answer 5

// let heading = document.getElementById("heading")
// let button = document.getElementById("button")
// let img = document.getElementById("img")

// let toggle = true

// button.onclick = function(){
// if(toggle == true)
// {
//     heading.innerText = "Your image is hidden"
//     img.style.display = 'none'
//     toggle = false
// }
//  else{
//     heading.innerText = "Your image is visible"
//     img.style.display = 'block'
//     toggle = true
// }
// }

// answer 6th
// let arr = ['javascript','java','phython','c++']

// let body = document.body
//  let heading = document.createElement("h1")
//  heading.innerText = "Which is Your Favourite Programming Language:"
//  body.append(heading)
//  heading.style.display = "inline-block"
//  heading.style.marginRight = '10px'



//  let select = document.createElement('select')
// body.append(select)

// for(let items of arr){
//   let option = document.createElement("Option")
//    option.innerText = items
//     select.append(option)
// }

// answer 7th

      const input = document.getElementById("input");
      const itemList = document.querySelectorAll('li')


      input.addEventListener("input", ()=> {

        const finalvalue = input.value.toLowerCase();

        for (let i = 0; i < itemList.length; i++) {

          const itemText = itemList[i].innerText.toLowerCase();
          

          if (itemText.includes(finalvalue)) {
            itemList[i].style.display = "block";
          } else {
            itemList[i].style.display = "none";
          }
        }

      });