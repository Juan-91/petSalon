let pet1={
        name:"Ellie",
        age:"8",
        gender:"Female",
        service:"N",
        breed:"Husky"
    }
let pet2={
        name:"Aria",
        age:"10",
        gender:"Female",
        service:"N",
        breed:"Domestic Medium-Hair"
    }
let pet3={
        name:"Blue",
        age:"5",
        gender:"Male",
        service:"Y",
        breed:"Blue Heeler"
    }
    

let array1=[
    pet1,
    pet2,
    pet3
];



document.getElementById("array1").innerHTML+=`<p>There are ` +array1.length+ ` pets in available </p>
<p>&nbsp;</p>`;

function petsAv(){
for(let i=0;i<array1.length;i++){
    document.getElementById("array1").innerHTML+= 
    `<p> Name: ${array1[i].name} </p>
     <p>Age: ${array1[i].age} </p>
     <p>Gender: ${array1[i].gender}</p>
     <p>Service: ${array1[i].service}</p>
     <p>Breed: ${array1[i].breed}</p>
     <p>&nbsp;</p>`;
    }
}



/***
 * 
 * 
<p>Age: ${array1[i].age} </p>
     <p>Gender: ${array1[i].gender}</p>
     <p>Service: ${array1[i].service}</p>
     <p>Breed: ${array1[i].breed}</p>
 * 
 * 
  
[
        {0:"0"
    },
        {
        Name:`Ellie`,
        Age:`8`,
        Gender:`Female`,
        Service:`N`,
        Breed:`Domestic Short-Hair`,
    },
        {
        Name:`Aria`,
        Age:`10`,
        Gender:`Female`,
        Service:`N`,
        Breed:`Domestic Medium-Hair`,
    },
        {
        Name:`Blue`,
        Age:`5`,
        Gender:`Male`,
        Service:`Y`,
        Breed:`Blue Heeler`,
    }
    ]


    console.log(names[i]);  
    document.getElementById("register1").innerHTML=`<p>Pets Remaining: ${i} </p>`;
 
    let name=prompt("Name: ");
    let age=prompt("Age: ");
    let gend=prompt("Male/Female: ");
    let inf=`${+name},${+age},${+gend}`;

    console.log(inf);
    
***/