let button = document.querySelector('.btn')
let text = document.querySelector('.color')
let hex =[
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F'
]

//function to generate random no between 0 to 15 (0 and 15 included)
function random()
{
    const randomNum = Math.floor(Math.random() * hex.length);
    return randomNum;
}

console.log(random());


//fumction to generate hex color
const generateHexColor = () => {
    let complete = '#';
    for(let i=0;i<6;i++){
        complete+= hex[random()]
    }
    return complete;
}

//Now add event listner 
    button.addEventListener('click',()=>{
        let hexColor = generateHexColor()
        text.innerText = hexColor;
        document.body.style.backgroundColor = hexColor;
})



