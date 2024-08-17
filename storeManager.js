
function save(item){
    let list=read(); //getting [] or LS info
    list.push(item);
    console.log(list);

    let val=JSON.stringify(list); //parse obj into string
    console.log(val); //string
    localStorage.setItem("services",val);
}

function read(){
    let data=localStorage.getItem("services"); //read the LS
    if(!data){//NOT data?
        //Empty LS
        return[]; //Empty arraylist
    }else{
        //we have info in the LS
        let list= JSON.parse(data); //convert the string into an array/obj
        
        return list; //the array w/ objs/info 
    }

}