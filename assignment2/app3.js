// All the exercises should use while loop:

// Please be sure to connect this file to another HTML file

// Don’t search on the internet except if it is written in the question

// You should solve all the question by what you understand from the lecture
// and with your pair not solo

// And don’t look or use a code that you wrote before 

console.log('Here is : While');

/*
1
Create a function called subtract
that takes a single parameter n,
and return the subtraction of all
starting from n to 0
Ex: subtract(2); => 2 - 1 - 0 => 1
Ex: subtract(5); => 5 - 4 - 3 - 2 - 1 - 0 => -5
Ex: subtract(9); => 9 - 8 - 7 - 6 - 5 - 4 - 3 - 2 - 1 - 0 => -27
*/

function subtract(num){
    let sub=num;
    let i=num-1;
    while(i>0){
            sub=sub-i;
            i--;
        }
    
    return sub;
}

document.write(`<h1>Q1: Create a function called subtract:-</h1> <div class="parent"> <li>subtract(2): ${subtract(2)}</li> <li>subtract(9): ${subtract(9)}</li></div>`);


/*
2
Create a function called factorial
that takes a single parameter n,
and return the product of all integers up to n starting from 1
Ex: factorial(2); => 2 * 1 => 2
Ex: factorial(4); => 4 * 3 * 2 * 1 => 24
*/

function factorial(num){
    let mutiple=1;
    while(num>0){
        mutiple=num*mutiple;
        num--;
    }
    return mutiple;
}

document.write(`<h1>Q2: Create a function called factorial:-</h1> <div class="parent"> <li>factorial(2): ${factorial(2)}</li> <li>factorial(4): ${factorial(4)}</li></div>`);



/*
3
Create a function called repeatStr
that takes 2 parameters string and number,
and return the string number time with space
Important: the continue condition should be [somthing !== 0]
** Think how we can return nothing ???
** Important: You should dint have extra space at the end
Ex: repeatStr("to",2); => "to to"
Ex: repeatStr("to",4); => "to to to to"
*/

function repeatStr(string,number){
    let lastString='';
    while (number!== 0){
        lastString=lastString+string;
        lastString=lastString+ ' '
        number--;
    }
    return lastString
}

document.write(`<h1>Q3: Create a function called repeatStr:-</h1> <div class="parent"> <li>repeatStr("to",2): ${repeatStr("to",2)}</li> <li>repeatStr("to",4): ${repeatStr("to",4)}</li></div>`);



/*
4
Create a function called sum2
that take two parameter
and will return the sumation from the first number to the second number
Ex: sum2(4, 5); => 4 + 5 => 9
Ex: sum2(3, 6); => 3 + 4 + 5 + 6 => 18
*/


function sum2(num1,num2){
    let sum=0;
    // First case when num1>num2
    while(num1>num2){
        sum=sum+num1;
        num1--;
    }
    while(num2>=num1){
        sum=sum+num2;
        num2--;
    }
    // Second case when num2>=num1
 return sum;
}

document.write(`<h1>Q4: Create a function called sum2:-</h1> <div class="parent"> <li>sum2(4, 5): ${sum2(4, 5)}</li> <li>sum2(3, 6): ${sum2(3, 6)}</li></div>`);



/*
5
Create a function called repeatStr2
that takes 2 string parameters,
and return the first string number time
(of the lenght of the secend string) with space betweeen it
** Important: the continue condition should be [somthing!== 0]
** Important: You should't have extra space at the end
Ex: repeatStr2("ro","cc"); => "ro ro"
Ex: repeatStr2("ro","fff"); => "ro ro ro"
*/

function repeatStr2(string,string_num){
    let lastString='';
    let num=string_num.length;
    while (num !==0){
        lastString=lastString+' '+string;
        num--;
    }
    return lastString
}

document.write(`<h1>Q5: Create a function called repeatStr2:-</h1> <div class="parent"> <li>repeatStr2("ro","cc"): ${repeatStr2("ro","cc")}</li> <li>repeatStr2("ro","fff"): ${repeatStr2("ro","fff")}</li></div>`);



/*
6
Create a function called multiOf
that takes 3 parameters,
and return the first number mutiple by
(the second one ^ the third number)
** Important: dont use **
Ex: multiOf(4,10,3); => 4000
Ex: multiOf(6,3,2); => 54
Ex: multiOf(6,2,3); => 48
*/

function multiOf(num1,num2,num3){
    let result;
    while(num3){
        result=Math.pow(num2,num3);
        console.log(result);
        result=result*num1;
        break;
    }
    return result;
}

document.write(`<h1>Q6: Create a function called multiOf:-</h1> <div class="parent"> <li>multiOf(4,10,3): ${multiOf(4,10,3)}</li> <li>multiOf(6,2,3): ${multiOf(6,2,3)}</li></div>`);



/*
7
Create a function called muti2
that take two parameter
and will return the multiplication
from the first number to the second number
Ex: muti2(4, 5); => 4 * 5 => 20
Ex: muti2(3, 6); => 3 * 4 * 5 * 6 => 360
*/

function muti2(num1,num2){
    let mutiple=1;
    while(num2>=num1){
        mutiple=mutiple*num1;
        num1++;
    }
 return mutiple;
}

document.write(`<h1>Q7: Create a function called muti2:-</h1> <div class="parent"> <li>muti2(4, 5): ${muti2(4, 5)}</li> <li>muti2(3, 6): ${muti2(3, 6)}</li></div>`);



/*
8
Create a function called numberBetweenUs
that take 2 parameters
and return the number between them
** Important: You should't have extra space at the end and comma
** Important: the stop condition should [num1!==num2-1]
** hint: maybe you will have 2 if statment
numberBetweenUs(2,8) => "3, 4, 5, 6, 7"
numberBetweenUs(1,3) => "2"
*/

function numberBetweenUs(num1,num2){
    let array=[];
    while(num1!==num2-1){
      array.push(num1+1);
      num1++;
    }
    return `"${array.join(', ')}"`;
} 

document.write(`<h1>Q8: Create a function called numberBetweenUs:-</h1> <div class="parent"> <li>numberBetweenUs(2,8): ${numberBetweenUs(2,8)}</li> <li>numberBetweenUs(1,3): ${numberBetweenUs(1,3)}</li></div>`);



/*
9
Write a function called countDown
that takes one parameter
and return a string represent the count down from the number
that insert to 0
instead of 0 you shoulf have "done"
between each number a comma and space
** you need to use recursion
** Important: You should't have extra space at the end and comma
countDown(5)
=> "5, 4, 3, 2, 1, done"
countDown(2)
=> "2, 1, done"
countDown(7)
=> "7, 6, 5, 4, 3, 2, 1, done"
*/

function countDown(num){
    let array=[];
    while(num>0){
        array.push(num);
        num--;
    }
    if(num==0){
        array.push('done');
    }
    return `"${array.join(', ')}"`;
}

document.write(`<h1>Q9: Write a function called countDown:-</h1> <div class="parent"> <li>countDown(5): ${countDown(5)}</li> <li>countDown(2): ${countDown(2)}</li></div>`);


/*
10
Write a function called multiplication2
that takes two parameters
and return the multiplication of them
you need to use only sum
multiplication2(5,4) => 20
multiplication2(2,8) => 16
multiplication2(7,6) =>  42
*/

function multiplication2(num1,num2){
    let sum=0;
    while(num2){
       sum=sum+num1;
        num2--;
    }
    return sum;
}

document.write(`<h1>Q10: Write a function called multiplication2:-</h1> <div class="parent"> <li>multiplication2(5,4): ${multiplication2(5,4)}</li> <li>multiplication2(2,8): ${multiplication2(2,8)}</li></div>`);


/*
11
Write a function called mod2
that takes two parameters
and return the module of them
without using %
mod2(5,4) => 1
mod2(2,8) => 2
mod2(7,4) => 3
mod2(8,4) => 0
*/

function mod2(num1,num2){
    let result;
    while(num2){
        result=(num1-num2 * parseInt(num1 / num2));
        break;
    }
    return result;
}

document.write(`<h1>Q11: Write a function called mod2:-</h1> <div class="parent"> <li>mod2(5,4): ${mod2(5,4)}</li> <li>mod2(8,4): ${mod2(8,4)}</li></div>`);



/*
12
Write a function called repeatChar
that takes two parameters
and return the times that this char
without case sensetive
repeat inside this string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
repeatChar("schOol","o") => 2
repeatChar("school","a") => 0
repeatChar("School","s") => 1
try more case by yourself
*/

function repeatChar(string1,string2){
    let newString1=string1.toLowerCase();
    let string1Length=string1.length;
    let i=0;
    let sum=0;
    while(string1Length>0){
        if(newString1[i]==string2){
            sum=sum+1;
        }
        i++;
        string1Length--;
    }
    return sum;
}

document.write(`<h1>Q12: Write a function called repeatChar:-</h1> <div class="parent"> <li>repeatChar("schOol","o"): ${repeatChar("schOol","o")}</li> <li>repeatChar("School","s"): ${repeatChar("School","s")}</li></div>`);