let x = document.createElement("div");

x.style = "border: 1px solid black; padding: 200px; background-color: blue; width: fit-content;";

document.body.appendChild(x);

let i = 0;

x.onclick = function(){
    // x.style.backgroundColor = "";

    if(i >= 3){
        i = 0;
    }

    switch(i){
        case 0:
            x.style.backgroundColor = "red";
        break;

        case 1:
            x.style.backgroundColor = "green";
        break;

        case 2:
            x.style.backgroundColor = "blue";
        break;    
    }
    
    i++;
}