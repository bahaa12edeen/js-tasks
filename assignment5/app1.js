let loca,
    tr,
    td1,
    td2,
    td3,
    td4,
    td5,
    td6,
    td7,
    image,
    arr=[],
    lcl=[],
    fet=[];

    window.localStorage.i;
    if(window.localStorage.i == undefined){
        window.localStorage.i = 0;
    }
    let i = window.localStorage.i;

document.getElementById("submit").onclick = function(){
    i = window.localStorage.i;

    console.log("arr--1: "+arr);

    if(!(document.getElementById("name").value == "" || document.getElementById("name").value == " ")){
        
        console.log("arr-0: "+arr);

        if(localStorage.m_arr != undefined && arr == ""){
            fet = JSON.parse(localStorage.m_arr);
            console.log("fet: "+fet);
            for(let e=0; e < i; e++){
                arr[e] = fet[e];
            }
        }
        
        arr[i] = [];

        console.log("arr-1: "+arr);

        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td1.textContent = document.getElementById("name").value;
        arr[i][0] = td1.textContent;

        td2 = document.createElement("td");
        td2.textContent = document.getElementById("mobile").value;
        arr[i][1] = td2.textContent;

        td3 = document.createElement("td");
        td3.textContent = (Math.floor(Math.random() * (500 - 100) ) + 98) + "$";
        arr[i][2] = td3.textContent;

        td4 = document.createElement("td");
        if(parseInt(td3.textContent) > 100){
            td4.textContent = "new device";
        }else{
            td4.textContent = "used";
        }
        arr[i][3] = td4.textContent;

        td5 = document.createElement("td");

        td6 = document.createElement("td");

        td7 = document.createElement("td");

        image = document.createElement("img");

        loca = document.getElementById("loc").value;

        async function get(){
            const response = await fetch(`https://eu1.locationiq.com/v1/search.php?key=pk.540d315694ad18fc6d9a33cfc4fab719&q=${loca}&format=json`);
            const data = await response.json();

            image.src = data[0].icon;
            td6.textContent = data[0].lat;
            td7.textContent = data[0].lon;

            arr[i][4] = image.src;
            arr[i][5] = td6.textContent;
            arr[i][6] = td7.textContent;
        }

        console.log("arr-2: "+arr);

        get();

        setTimeout(function(){
            localStorage.setItem("m_arr", JSON.stringify(arr));

            console.log("arr-3: "+arr);
        }, 1000);


        console.log("arr-4: "+arr);
        
    
        document.getElementById("table").appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);   
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);    
        td5.appendChild(image);

        window.localStorage.i++;
    }

    lcl = JSON.parse(localStorage.getItem("m_arr"));
}

if(window.localStorage.m_arr != undefined){
    lcl = JSON.parse(localStorage.getItem("m_arr"));
    console.log("lcl: "+lcl);
    renderOrder();
}

function renderOrder(){
    for(let i=0; i < lcl.length; i++){
        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td1.textContent = lcl[i][0];

        td2 = document.createElement("td");
        td2.textContent = lcl[i][1];

        td3 = document.createElement("td");
        td3.textContent = lcl[i][2];

        td4 = document.createElement("td");
        td4.textContent = lcl[i][3];

        td5 = document.createElement("td");
        image = document.createElement("img");
        image.src = lcl[i][4];

        td6 = document.createElement("td");
        td6.textContent = lcl[i][5];

        td7 = document.createElement("td");
        td7.textContent = lcl[i][6];



        document.getElementById("table").appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        td5.appendChild(image);
    }
}