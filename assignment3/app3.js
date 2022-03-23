document.getElementById("dimg").style = "margin-top: 20px;";

document.getElementById("img").src = document.getElementById("images").value;
document.getElementById("img").alt = document.getElementsByClassName("op")[0].textContent;

document.getElementById("images").onchange = function(){
    document.getElementById("img").src = this.value;

    for(let i=0; i<3; i++){
        console.log(document.getElementsByClassName("op")[i].value);
        console.log(document.getElementById("img").src);

        if(document.getElementsByClassName("op")[i].value ==  document.getElementById("img").src){
            document.getElementById("img").alt = document.getElementsByClassName("op")[i].textContent;
        }
    }
}

