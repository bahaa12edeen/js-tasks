document.getElementById("pass").onchange = function(){
    if(!(this.value.length >= 6)){
        document.getElementById("err1").textContent = "Error: To Short";
        document.getElementById("repeat").disabled = true;

    }else{
        document.getElementById("err1").textContent = "";
        document.getElementById("repeat").disabled = false;
    }
}

document.getElementById("repeat").onchange = function(){
    // document.getElementById("err2").textContent = "Error: Two Password don't match";
    if(!(document.getElementById("pass").value == this.value)){
        document.getElementById("err2").textContent = "Error: Two Password don't match";
        document.getElementById("submit").disabled = true;
    }else{
        document.getElementById("err2").textContent = "";
        document.getElementById("submit").disabled = false;
    }
}