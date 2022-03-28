let tr,
    td1,
    td2,
    td3,
    td4,
    m_arr=[],
    arr=[];

    window.localStorage.i;
    if(window.localStorage.i == undefined){
        window.localStorage.i = 0;
    }

    let i = window.localStorage.i;

document.getElementById("submit").onclick = function(){
    i = window.localStorage.i;

    if(!(document.getElementById("name").value == "" || document.getElementById("name").value == " ")){
        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td1.textContent = document.getElementById("name").value;
        arr[0] = td1.textContent;

        td2 = document.createElement("td");
        td2.textContent = document.getElementById("mobile").value;
        arr[1] = td2.textContent;

        td3 = document.createElement("td");
        td3.textContent = (Math.floor(Math.random() * (500 - 100) ) + 98) + "$";
        arr[2] = td3.textContent;

        td4 = document.createElement("td");
        if(parseInt(td3.textContent) > 100){
            td4.textContent = "new device";
        }else{
            td4.textContent = "used";
        }
        arr[3] = td4.textContent;

        m_arr[i] = arr;

        window.localStorage.m_arr = m_arr;
        
    
        document.getElementById("table").appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);    
        
        console.log("i: "+i);
        console.log("m_arr: "+m_arr);

        window.localStorage.i++;
    }
}