let pets=[];

function Pet(name,age,gender,breed,color,pettype){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.color=color;
    this.pettype=pettype;
}

function isValid(pet){
    let validation=true;
    let inputName=document.getElementById("txtName");
    let inputAge=document.getElementById("txtAge");
    
    inputName.classList.remove("error");
    inputAge.classList.remove("error");

    if(pet.name==""){
        validation=false;
        inputName.classList.add("error");
    }

    if(pet.age==""){
        validation=false;
        inputAge.classList.add("error");
    }

    return validation;
}

function register(){
    let inputName=document.getElementById("txtName").value;
    let inputAge=document.getElementById("txtAge").value;
    let inputGender=document.getElementById("txtGender").value;
    let inputBreed=document.getElementById("txtBreed").value;
    let inputColor=document.getElementById("txtColor").value;
    let inputPet=document.getElementById("txtPet").value;

    let newPet=new Pet(inputName,inputAge,inputGender,inputBreed,inputColor,inputPet);
    if(isValid(newPet)==true){
        pets.push(newPet);
        displayRow();
    }
}
function deletePet(id){
    console.log("Deleting ",id);
    pets.splice(id, 1);
    document.getElementById(id).remove();
    displayRow();
}   

function init(){

    let pet1=new Pet("Aria",10,"Female","Medium-Hair","Tortoiseshell","Cat");
    let pet2=new Pet("Nibbles",9,"Male","Racoon","Gray","Racoon");
    let pet3=new Pet("Max",11,"Male","Husky","Black/White","Dog");
    pets.push(pet1,pet2,pet3);
    displayRow();
}

window.onload=init;


