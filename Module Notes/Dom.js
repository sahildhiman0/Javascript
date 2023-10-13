// everythiong we are code in html become a document ( if we write document in console then it show tree like structure)


// console.log(document.domain)
// console.log(window.location.hostname)
// console.dir(document.body);// this will return object version of body
// console.dir(document.all[4]);//or simply document.all for every collection // returns a array like html collections
// document.title = "Hacker hai bhai hacker"

// let body = document.body

// body.append("haha")
//  if we do using append child
// body.appendChild("hahaaaaa")// this cannot add text


// create a new element
// const creating = document.createElement("h2")
// creating.innerText = "creating hu me"
// creating.textContent = "creating hu me"
// body.append(creating)
// console.log(creating);

// let div = document.querySelector('div')
// console.log(div.innerText); // i dont show hidden text and spaces
// console.log(div.textContent);// shows hidden content and spaces

// const body = document.body
// strong element


// const div = document.createElement('div')
// const strong = document.createElement('strong')

// strong.innerText='hlooo'
// div.appendChild(strong)
// body.appendChild(div)
// we can do this much better way 
// div.innerHTML="<strong id= 'one'>haaa viiiiiii me strong hu!</strong>"

// if we want to remove an element we can remove by using .remove()

// const id = document.getElementById('one')

// id.remove()

//attribute properties and method 
// getattribute(nameod attrobute) to get the value of the attribute
// setattribute method to set attribute it takes two arguments or
//element.id='sadkjfh'
//removeattribute to rtemove an attribute from that selected element

//classes method and properties
// elementname.classlist.add
// elementname.classlist.remove
// elementname.className{exaclty} = "what you want to put here"


// we have more properties like firstchild, last child, next sibling, previous siblings etc

// events listner

// Elementreference.addeventlistner('click',function,{once:true(if we want to run only one time)})//type of event, event function (callback function)

// we should remove the event because if millions of user click on this and then memory leak haopens
//we use settimeout  button.removeeventlistner,3000