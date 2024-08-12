//constructor
function Service(){

}
//use jQuery
function register(){
    console.log("Register");
}

function init(){
    //hook events
    $("#btnRegister").on(`click`,register);

}

window.onload=init;