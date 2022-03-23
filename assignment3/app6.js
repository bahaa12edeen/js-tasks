let x1 = 0, x2 = 0, x3 = 0;

document.getElementById("show1").onclick = function(){
    console.log("x1: "+x1);
    if(!x1){
        document.getElementById("inner1").style.display = "inline-block";
        document.getElementById("show1").style.display = "none";
        x1 = 1;
    }
}

document.getElementById("hide1").onclick = function(){
    console.log("!x1: "+!x1);

    if(x1){
        document.getElementById("inner1").style.display = "none";
        document.getElementById("show1").style.display = "inline-block";
        x1 = 0;
    }
}

/************************************************************************** */

document.getElementById("show2").onclick = function(){
    console.log("x2: "+x2);
    if(!x2){
        document.getElementById("inner2").style.display = "inline-block";
        document.getElementById("show2").style.display = "none";
        x2 = 1;
    }
}

document.getElementById("hide2").onclick = function(){
    console.log("!x2: "+!x2);

    if(x2){
        document.getElementById("inner2").style.display = "none";
        document.getElementById("show2").style.display = "inline-block";
        x2 = 0;
    }
}

/************************************************************************** */

document.getElementById("show3").onclick = function(){
    console.log("x3: "+x3);
    if(!x3){
        document.getElementById("inner3").style.display = "inline-block";
        document.getElementById("show3").style.display = "none";
        x3 = 1;
    }
}

document.getElementById("hide3").onclick = function(){
    console.log("!x3: "+!x3);

    if(x3){
        document.getElementById("inner3").style.display = "none";
        document.getElementById("show3").style.display = "inline-block";
        x3 = 0;
    }
}