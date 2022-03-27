function patt(){
    let star='*';
    document.getElementById("p1").innerHTML += (star);
    for (let i=0; i<4;i++){
        document.getElementById("p1").innerHTML += ('<br/>');
        console.log(star);
        star=star+' '+'*';
        document.getElementById("p1").innerHTML += (star);
    }
}

 patt();

function avgerage(array){
    let avg=0;
    let sum=0;
    let grade='';
    for(let i=0;i<array.length;i++){
        sum=sum+array[i];
    }
    avg=sum/array.length;

    if(avg<60){
        grade='F';
    }
    else if ((avg>60)&&(avg<70)){
        grade='D';
    }
    else if ((avg>70)&&(avg<80)){
        grade='C';
    }
    else if ((avg>80)&&(avg<90)){
        grade='B';
    }
    else if ((avg>90)&&(avg<100)){
        grade='A';
    }
    return `The avearge is ${avg} and the grade is ${grade}.`;
}

document.getElementById("p2").textContent = avgerage([80,77,88,95,68]);
