let num1 = window.prompt("enter first value: "),
    num2 = window.prompt("enter second value: "),
    num3 = window.prompt("enter third value: ");

    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);

/* 1111111111111111111111111111111111111111111111 */
document.write("- ");

if(!(num1%3) && !(num1%5)){
    console.log("num1 (" + num1 + ") is: fizz & buzz");
    document.write("num1 (" + num1 + ") is: fizz & buzz");
}else if((num1%3) && (num1%5)){
    console.log("num1 (" + num1 + ") is: Not divisible by 3 & 5");
    document.write("num1 (" + num1 + ") is: Not divisible by 3 & 5");
}else if((num1%3) || (num1%5)){
    if(!(num1%3)){
        console.log("num1 (" + num1 + ") is: fizz but Not divisible by 5");
        document.write("num1 (" + num1 + ") is: fizz but Not divisible by 5");
    }else{
        console.log("num1 (" + num1 + ") is: buzz but Not divisible by 3");
        document.write("num1 (" + num1 + ") is: buzz but Not divisible by 3");
    }
}

document.write("<br>");
/* 22222222222222222222222222222222222222222222222 */
document.write("- ");

if(!(num2%3) && !(num2%5)){
    console.log("num2 (" + num2 + ") is: fizz & buzz");
    document.write("num2 (" + num2 + ") is: fizz & buzz");
}else if((num2%3) && (num2%5)){
    console.log("num2 (" + num2 + ") is: Not divisible by 3 & 5");
    document.write("num2 (" + num2 + ") is: Not divisible by 3 & 5");
}else if((num2%3) || (num2%5)){
    if(!(num2%3)){
        console.log("num2 (" + num2 + ") is: fizz but Not divisible by 5");
        document.write("num2 (" + num2 + ") is: fizz but Not divisible by 5");
    }else{
        console.log("num2 (" + num2 + ") is: buzz but Not divisible by 3");
        document.write("num2 (" + num2 + ") is: buzz but Not divisible by 3");
    }
}

document.write("<br>");
/* 33333333333333333333333333333333333333333333333 */
document.write("- ");

if(!(num3%3) && !(num3%5)){
    console.log("num3 (" + num3 + ") is: fizz & buzz");
    document.write("num3 (" + num3 + ") is: fizz & buzz");
}else if((num3%3) && (num3%5)){
    console.log("num3 (" + num3 + ") is: Not divisible by 3 & 5");
    document.write("num3 (" + num3 + ") is: Not divisible by 3 & 5");
}else if((num3%3) || (num3%5)){
    if(!(num3%3)){
        console.log("num3 (" + num3 + ") is: fizz but Not divisible by 5");
        document.write("num3 (" + num3 + ") is: fizz but Not divisible by 5");
    }else{
        console.log("num3 (" + num3 + ") is: buzz but Not divisible by 3");
        document.write("num3 (" + num3 + ") is: buzz but Not divisible by 3");
    }
}
