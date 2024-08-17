//constructor
function Service(title,price){
    this.title=title;
    this.price=price;
}

function isValidService(Service){
    let validTitle=true;
    let validPrice=true;

    if(Service.title==""){
        validTitle=false;
        $(".titleValidationMsg").css("color","red").show();
    }else{
        $(".titleValidationMsg").hide();
    }

    if(Service.price==""){
        validPrice=false;
        $(".priceValidationMsg").css("color","red").show();
    }else{
        $(".priceValidationMsg").hide();
    }

    return validTitle && validPrice;
}


//use jQuery
function register(){
    let inputTitle=$("#txtTitle").val();
    let inputPrice=$("#txtPrice").val();

    let service=new Service(inputTitle,inputPrice);
    
    if(isValidService(service)){
        save(service);
        $("input").val("");
    }
}

function init(){
    $("#btnRegister").on(`click`,register);
    
    $(".titleValidationMsg").hide();
    $(".priceValidationMsg").hide();

    $("#listServices").on("mouseover",function(){
        $(this).addClass("btn-li");
    });
    $("#listServices").on("mouseleave",function(){
        $(this).removeClass("btn-li");
    });

    //hook events
    $("#op1").hide();
    $("#op2").hide();
    $("#op3").hide();

    $("#wash").on(`click`,function(){
        $(this).addClass("btn-li");
        $("tidy").removeClass("btn-li");
        $("full").removeClass("btn-li");
        $("#op1").show();
        $("#op2").hide();
        $("#op3").hide();
    });

    $("#tidy").on(`click`,function(){
        $(this).addClass("btn-li");
        $("wash").removeClass("btn-li");
        $("full").removeClass("btn-li");
        $("#op2").show();
        $("#op1").hide();
        $("#op3").hide();
    });

    $("#full").on(`click`,function(){
        $(this).addClass("btn-li");
        $("wash").removeClass("btn-li");
        $("tidy").removeClass("btn-li");
        $("#op3").show();
        $("#op1").hide();
        $("#op2").hide();
    });
}

window.onload=init;