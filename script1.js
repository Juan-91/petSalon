//let globalVariable="I am a global variable";

function myFunction(){
    console.log(globalVariable);

    let localVariable="I am a local variable";
    console.log(localVariable);
}

function myOtherFunction(){
    console.log(globalVariable);
}

////////

function greet(name) {
    console.log("Hello, "+name);
}

let names=["M","N","O","P"];

for(let i=0;i<names.length;i++){
    greet(names[i]);
}


// // //
function addNumbers(num1, num2){
    let result=num1+num2
}

//****//


function doubleNumber(num){
    return num*2;
}

let result2=doubleNumber(2);
console.log("The double of the Number is "+result2);


/*Getting value from a prompt*/
let num=parseInt(prompt("Enter number: "));
let result3=doubleNumber(num);
console.log("The double of " +num + " is " +result3);


/*Challenge 2: Rectangle Area*/
function rect(width, length){    
    return width*length;
}

let promptW=parseInt(prompt("Enter Width: "));
let promptL=parseInt(prompt("Enter Length: "));

console.log("The area is: " +rect(promptW, promptL));


