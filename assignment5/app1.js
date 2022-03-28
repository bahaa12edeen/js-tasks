let tr,
    td1,
    td2,
    td3,
    td4;

    function creat(x){
        document.createElement(x);
    }

document.getElementById("submit").onclick = function(){
    if(!(document.getElementById("name").value == "" || document.getElementById("name").value == " ")){
        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td1.textContent = document.getElementById("name").value;
        td2 = document.createElement("td");
        td2.textContent = document.getElementById("mobile").value;
        td3 = document.createElement("td");
        td3.textContent = (Math.floor(Math.random() * (500 - 100) ) + 98) + "$";
        td4 = document.createElement("td");
        if(parseInt(td3.textContent) > 100){
            td4.textContent = "new device";
        }else{
            td4.textContent = "used";
        }
    
        document.getElementById("table").appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);    
    }else{
        
    }
}