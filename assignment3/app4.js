document.getElementById("family").onchange = function(){
    document.getElementById("text").style.fontFamily = this.value;
}

document.getElementById("size").onchange = function(){
    document.getElementById("text").style.fontSize = this.value;
}

document.getElementById("italic").onchange = function(){
    if(document.getElementById("italic").checked){
        document.getElementById("text").style.fontStyle = "italic";
    }else{
        document.getElementById("text").style.fontStyle = "normal";
    }
}

document.getElementById("bold").onchange = function(){
    if(document.getElementById("bold").checked){
        document.getElementById("text").style.fontWeight = "bold";
    }else{
        document.getElementById("text").style.fontWeight = "unset";
    }
}

document.getElementById("underline").onchange = function(){
    if(document.getElementById("underline").checked){
        document.getElementById("text").style.textDecoration = "underline";
    }else{
        document.getElementById("text").style.textDecoration = "unset";
    }
}