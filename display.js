function displayRow(){
    let table=document.getElementById("pets");
    let row="";

 for(let i=0;i<pets.length;i++){
    let pet=pets[i];

    row+=`
    <tr>
        <td>${i+1}</td>
        <td>${pet.name}<td>
        <td>${pet.age}</td>
        <td>${pet.gender}</td>
        <td>${pet.breed}</td>
        <td><button class="btn-danger btn-sm" onclick="deletePet(${i});">Delete</button></td>
        <td><button class="btn btn-secondary btn-sm">Edit</button></td>
        <td><button class="btn btn-dark btn-sm">Archive</button></td>
        
    </tr>
    `;

 }

    table.innerHTML=row;
    displayInfo();
}

function displayInfo(){
    document.getElementById("totalPet").innerHTML=pets.length;
}
