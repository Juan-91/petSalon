let pets=[];

function Pet(name,age,gender,breed,color,animal){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.color=color;
    this.animal=animal;
}

function isValid(pet){
    let validation=true;
    let inputName=document.getElementById("txtName");
    let inputAge=document.getElementById("txtAge");
    let inputGender=document.getElementById("txtAge");
    let inputBreed=document.getElementById("txtAge");
    let inputColor=document.getElementById("txtAge");
    let inputAnimal=document.getElementById("txtAge");
    
    inputName.classList.remove("error");
    inputAge.classList.remove("error");
    inputGender.classList.remove("error");
    inputBreed.classList.remove("error");
    inputColor.classList.remove("error");
    inputAnimal.classList.remove("error");

    if(pet.name==""){
        validation=false;
        inputName.classList.add("error");
    }

    if(pet.age==""){
        validation=false;
        inputAge.classList.add("error");
    }
    
    if(pet.gender==""){
        validation=false;
        inputGender.classList.add("error");
    }
    
    if(pet.breed==""){
        validation=false;
        inputBreed.classList.add("error");
    }
    
    if(pet.color==""){
        validation=false;
        inputColor.classList.add("error");
    }
    
    if(pet.animal==""){
        validation=false;
        inputAnimal.classList.add("error");
    }

    return validation;
}

function register(){
    let inputName=document.getElementById("txtName").value;
    let inputAge=document.getElementById("txtAge").value;
    let inputGender=document.getElementById("txtGender").value;
    let inputBreed=document.getElementById("txtBreed").value;
    let inputColor=document.getElementById("txtColor").value;
    let inputAnimal=document.getElementById("txtAnimal").value;

    let newPet=new Pet(inputName,inputAge,inputGender,inputBreed,inputColor,inputAnimal);
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

function getServices(){
    let servicesList=read();
    console.log(servicesList);
    let option;
    //
    for(let i=0;i<servicesList.length;i++){
        let service=servicesList[i];
    
        option+=`<option value="">${service.title}</option>`;
     }
     $("#txtServices").append(option);

}
function init(){
    let pet1=new Pet("Aria",10,"Female","Medium-Hair","Tortoiseshell","Cat");
    let pet2=new Pet("Nibbles",9,"Male","Racoon","Gray/Black","Racoon");
    let pet3=new Pet("Max",11,"Male","Husky","Black/White","Dog");
    pets.push(pet1,pet2,pet3);
    displayRow();
    getServices();
}

window.onload=init;


