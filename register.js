let pet=[];

function Pet(name,age,gender,breed){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
}

function register(){
    let inputName=document.getElementById("txtName").value;
    let inputAge=document.getElementById("txtAge").value;
    let inputGender=document.getElementById("txtGender").value;
    let inputBreed=document.getElementById("txtBreed").value;

    let newPet=new Pet(inputName,inputAge,inputGender,inputBreed);
    
    console.log(newPet);

}

function init(){
    let pet1=new Pet("Scooby",10,"Male","Husky");
    let pet2=new Pet("Scrappy",9,"Male","Mixed");
    let pet3=new Pet("Shaggy",11,"Male","Mixed");

    console.log(pet1,pet2,pet3);
}

window.onload=init;