let pet1={
        name:"Aria",
        age:"10",
        gender:"Female",
        service:"None",
        breed:"Husky"
    }
let pet2={
        name:"Nibbles",
        age:"9",
        gender:"Male",
        service:"None",
        breed:"Racoon"
    }
let pet3={
        name:"Max",
        age:"11",
        gender:"Male",
        service:"None",
        breed:"Husky"
    };
    

let array1=[
    pet1,
    pet2,
    pet3
];


function petsNum(){
    document.getElementById("array1").innerHTML+=`<p>There are ` +array1.length+ ` pets in queue. </p>`;
};

function petsReg(){
for(let i=0;i<array1.length;i++){
    document.getElementById("petsNames").innerHTML+= `<p> -${array1[i].name} </p>`;
    }
};
