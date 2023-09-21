function parameterTesting(){
    console.log(arguments)
    console.log(typeof arguments)
    //this argument is a object not an array so reduce filter or any array method will not work here 
    //if we want to use this we have to first convert this into array

    //lets convert
    const convert = Array.from(arguments)
    console.log(convert);
    console.log(typeof convert);

}

//alternate 
function alternate(...number){
    console.log(number)
    console.log(typeof number);
}



parameterTesting(1,3,42,"dfk")
alternate(2,3,52,23)

let arr = [2,4,24,3]
console.log(typeof arr + " " + arr)