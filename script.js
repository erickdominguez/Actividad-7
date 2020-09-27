
var ss =  '';
op = (ex) => {
    if(ex=='c'){
        ss='';
        document.getElementById("resultado").innerHTML= '';
    }
    else if(ex == 'f'){
        document.getElementById("resultado").innerHTML= eval(ss);
    }
    else{
        ss += ex;
        document.getElementById("resultado").innerHTML= ss;
    }
    
}
