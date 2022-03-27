console.log ('Here is : ', 'array')

// 1
// Correct the syntax error
//  [ 1, 7, 9, 4, 5]

//  ["Str", "alex","moh"]
 
//  ['the', 'fox', 'over', 'lazy', 'dog']

document.write(`<h1>Q1: Correct the syntax error:-</h1> <div class="parent"> <li>First Case: ${[ 1, 7, 9, 4, 5]}</li> <li>Second Case: ${["Str", "alex","moh"]}</li> <li>Third Case: ${['the', 'fox', 'over', 'lazy', 'dog']}</li></div>`);


// 2
// What is the index of "Banana”, Tomato"
// var fruits=["Tomato","Banana","Watermelon"]

// fruits[0] => "Tomato";
// fruits[1] => "Banana";

document.write(`<h1>Q2: What is the index of "Banana”, Tomato":-</h1> <div class="parent"> <li>fruits[0] => "Tomato"</li> <li> fruits[1] => "Banana" </li> </div>`);


// 3
// Create an array represents your:
// 1- Favorite Food (5)
// 2- Favorite Sport (3)
// 3- Favorite Movie (4)

let Food = ["mansaf", " maglouba", " shoshbarak", " mjadara", " zahra"];
let Sport = ["swim", " footbal", " chess"];
let Movie = ["sharlok holmes", " find nemo", " home alone"];

document.write(`<h1>Q3: Create an array represents your:-</h1> <div class="parent"> <li>Favorite Food: ${Food}</li> <li>Favorite Sport: ${Sport}</li> <li>Favorite Movie: ${Movie}</li></div>`);


// 4
// Create a function called firstOfArray
// that take an array as a parameter
// and return the first element in an array

// Ex: firstOfArray([1,4,5]) => 1
// Ex: firstOfArray(["t","u","g","x"]) => "t"

var array1 = [1,4,5],
    array2 = ["t"," u"," g"," x"];

function firstOfArray(x){
    return x[0];
}

console.log(firstOfArray(array1));
console.log(firstOfArray(array2));

document.write(`<h1>Q4: Create a function called firstOfArray:-</h1> <div class="parent"> <li>First item of array1: ${firstOfArray(array1)}</li> <li>First item of array2: ${firstOfArray(array2)}</li> </div>`);



// 5
// Create a function called lastOfArray
// that take an array as a parameter
// and return the first element in an array

// Ex: lastOfArray([1,4,5]) => 5
// Ex: lastOfArray(["t","u","g","x"]) => "x"

function lastOfArray(x){
    return x[(x.length-1)];
}

document.write(`<h1>Q5: Create a function called lastOfArray:-</h1> <div class="parent"> <li>Last item of array1: ${lastOfArray(array1)}</li> <li>Last item of array2: ${lastOfArray(array2)}</li> </div>`);


// 6
// Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
// => [1,3,4,6,8,9,10]
array.shift();
array.shift();
array.shift();
array.unshift(1,3,4,6,8);
array.push(10);


document.write(`<h1>Q6: Using console make this array to be like this one:-</h1> <div class="parent"> <li>First step: array.shift();</li> <li>Second step: array.shift();</li> <li>Third step: array.shift();</li> <li>Fourth step: array.unshift(1,3,4,6,8);</li> <li>Fifth step: array.push(10);</li> </div>`);


// 7
// Using the console try to figure out what the thing that’s (push, unshift, shift, pop) return to you

// var array2 = [4,9,-7,3.5];

// push return> new length
// unshift return> new length

// shift return> first item deleted
// pop return> last item deleted

document.write(`<h1>Q7: Figure out what the thing that’s (push, unshift, shift, pop) return to you:-</h1> <div class="parent"> <li>push return => new length</li> <li>unshift return => new length</li> <li>shift return => first item deleted</li> <li>pop return => last item deleted</li> </div>`);


// 8
// Create a function called middleOfArray
// that take an array as a parameter
// and return the middle element in an array if it is have an odd elemnets
// and return the two middle elemnt in an array if it is have an even elemnets

// Ex: middleOfArray([1,4,5]) => 4
// Ex: middleOfArray(["t","u","g","x"]) =>"u and g"

var array1 = [1,4,5];
var array2 = ["t","u","g","x"];

function middleOfArray(x){
    if(!((x.length)%2)){
        console.log(x[(((x.length)/2)-1)]);
        console.log(x[((x.length)/2)]);

        return "even array: " + x[(((x.length)/2)-1)] + " / " + x[((x.length)/2)];
    }else{
        console.log(x[((x.length-1)/2)]);

        return "odd array: " + x[((x.length-1)/2)];
    }
}

middleOfArray(array1);
middleOfArray(array2);

document.write(`<h1>Q8: Create a function called middleOfArray:-</h1> <div class="parent"> <li>middle Of Array1:- &nbsp; ${middleOfArray(array1)}</li> <li>middle Of Array2:- &nbsp; ${middleOfArray(array2)}</li> </div>`);


// 9
// Using assignment operator (=)
// make the animals array have these animals
let animals = ['cat', ' ele', ' bird'];
// animals; => ['zebra', 'elephant']
// ** hint: animals[0]=something

let nums0= [1,2,3,8,9];
// nums => [5,-22,3.5,44,98,44]


let add1 = [' zebra', ' elephant'];
let add2 = [5,-22,3.5,44,98,44];

for(let i=0; i < add1.length; i++){
    animals[animals.length] = add1[i];
}

for(let i=0; i < add2.length; i++){
    nums0[nums0.length] = add2[i];
}

document.write(`<h1>Q9: make the animals array have these animals:-</h1> <div class="parent"> <li>animals:- &nbsp; ${animals}</li> <li>nums:- &nbsp; ${nums0}</li> </div>`);


// 10
// Create a function called indexOfArray
// that accept an array and index
// and return what this array have in this index

var nums= [1,2,3,8,9];
// Ex: indexOfArray(nums,3) => 8
// Ex: indexOfArray(nums,1) => 2
// Ex: indexOfArray(nums,4) => 9

// **try more cases by your self

function indexOfArray(x, y){
    return x[y];
}


document.write(`<h1>Q10: Create a function called indexOfArray:-</h1> <div class="parent"> <li>index Of Array(nums, 3):- &nbsp; ${indexOfArray(nums, 3)}</li> <li>index Of Array(nums, 1):- &nbsp; ${indexOfArray(nums, 1)}</li> <li>index Of Array(nums, 4):- &nbsp; ${indexOfArray(nums, 4)}</li></div>`);



// 11
// Create a function called arrayExceptLast
// that accept an array
// and return the entire array except the last elemnt
// ** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
// Ex: arrayExceptLast(nums) =>  [1,2,3,8]

// **try more cases by your self

function arrayExceptLast(x){
    return x.slice(0, x.length-1);
}

document.write(`<h1>Q11: Create a function called arrayExceptLast:-</h1> <div class="parent"> <li>Array Except Last(nums):- &nbsp; ${nums} => ${arrayExceptLast(nums)}</li> </div>`);


// 12
// Create a function called addToEnd
// that accept an array and value
// and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
// Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

// **try more cases by your self

function addToEnd(x, y){
    x[x.length-1] = y;
    return x;
}


document.write(`<h1>Q12: Create a function called addToEnd:-</h1> <div class="parent"> <li>add To End(x, y):- &nbsp; ${nums} => ${addToEnd(nums, 55)}</li> </div>`);



// all the exercises below should solved 2 times: 1- for loop 2- while lopp

// 13
// Create a function called sumArray
// that accept an array
// and return the summation of all elemnt in this array

var nums = [1,2,3,8,9];
// Ex: sumArray(nums) => 23

// ** solve it one time using for loop and another using while loop
// **try more cases by your self

function sumArray_for(x){

    let sum = 0;

    for(let i=0; i < x.length; i++){
        sum += x[i];
    }

    return sum;
}

function sumArray_while(x){

    let sum = 0;
    let i=0;

    while(i < x.length){
        sum += x[i];

        i++;
    }

    return sum;
}


document.write(`<h1>Q13: Create a function called sumArray:-</h1> <div class="parent"> <li>sumArray_for(nums):- &nbsp; ${nums} => ${sumArray_for(nums)}</li> <li>sumArray_while(nums):- &nbsp; ${nums} => ${sumArray_while(nums)}</li></div>`);


// 14
// Create a function called minInArray
// that accept an array
// and return the minimum value inside this array

var nums= [0,1,2,3,8,9]
// Ex: minInArray(nums) => 1

// ** solve it one time using for loop and another using while loop
// **try more cases by your self


function minInArray_for(x){
    let v; 

    for(let i=0; i < x.length; i++){
        if(x[i] < x[i+1]){
            v = x[i];
        }

        return v;
    }
}

function minInArray_while(x){
    let v; 
    let i=0;

    while(i < x.length){
        if(x[i] < x[i+1]){
            v = x[i];

            i++;
        }

        return v;
    }
}

document.write(`<h1>Q14: Create a function called minInArray:-</h1> <div class="parent"> <li>minInArray_for(nums):- &nbsp; ${nums} => ${minInArray_for(nums)}</li> <li>minInArray_while(nums):- &nbsp; ${nums} => ${minInArray_while(nums)}</li></div>`);



// 15
// Create a function called removeFromArray
// that accept an array and elemnt to remove
// and return the array after remove this elemnt from it

let nums2= [1,2,3,8,9];
// Ex: minInArray(nums,8) => [1,2,3,9]

// ** solve it one time using for loop and another using while loop
// **try more cases by your self


function removeFromArray_for(x, y){
    for(let i=0; i < x.length; i++){
        if(x[i] == y){
            for(let v=i; v < x.length-1; v++){
                x[v] = x[v+1];
            }

            x.pop();
        }
    }

    return x;
}


function removeFromArray_while(x, y){
    let i=0;
    while( i < x.length ){
        if(x[i] == y){
            for(let v=i; v < x.length-1; v++){
                x[v] = x[v+1];
            }

            x.pop();
        }

        i++;
    }

    return x;
}

document.write(`<h1>Q15: Create a function called removeFromArray:-</h1> <div class="parent"> <li>removeFromArray_for(nums,8):- &nbsp; ${nums} => ${removeFromArray_for(nums,8)}</li> <li>removeFromArray_while(nums,8):- &nbsp; ${nums} => ${removeFromArray_while(nums,8)}</li></div>`);



// 16
// Create a function called oddArray
// that accept an array
// and return an array have only the odd elemnts

var nums1= [1,2,3,8,9]
// Ex: oddArray(nums) => [1,3,9]

// ** solve it one time using for loop and another using while loop
// **try more cases by your self


function oddArray_for(x){
    let array=[];
    for (let i=0;i<x.length;i++){
        if(x[i]%2!==0){
            array.push(x[i]);
        }
    }
    return array;
}


function oddArray_while(x){
    let array=[];
    let i=0;
    while(i<x.length){
        if(x[i]%2!==0){
            array.push(x[i]);
        }
        i++;
    }
    return array;
}

document.write(`<h1>Q16: Create a function called oddArray:-</h1> <div class="parent"> <li>oddArray_for(x):- &nbsp; ${nums} => ${oddArray_for(nums)}</li> <li>oddArray_while(x):- &nbsp; ${nums} => ${oddArray_while(nums)}</li></div>`);




// 17
// Create a function called aveArray
// that accept an array
// and return the average of the numbers inside this array

var nums11= [1,2,3,8,9];
// Ex: aveArray(nums) => 4.6

var nums22 = [1,2,3,8,9,77];
// Ex: aveArray(nums) => 16.6

// ** solve it one time using for loop and another using while loop
// **try more cases by your self



function aveArray_for(x){
    let sum=0;
    for(let i=0;i<x.length;i++){
        sum=sum+x[i];
    }
    return sum/(x.length);
}


function aveArray_while(x){
    let sum=0;
    let i=0;
    while(i<x.length){
        sum=sum+x[i];
        i++;
    }
    return sum/(x.length);
}

document.write(`<h1>Q17: Create a function called aveArray:-</h1> <div class="parent"> <li>aveArray_for(nums11):- &nbsp; ${nums11} => ${aveArray_for(nums11)}</li> <li>aveArray_while(nums11):- &nbsp; ${nums11} => ${aveArray_while(nums11)}</li></div>`);



// 18
// Create a function called shorterInArray
// that accept an array of strings
// and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
// Ex: shorterInArray(strings) => "alex"

// ** solve it one time using for loop and another using while loop
// **try more cases by your self



function shorterInArray_for(x) {
    let a = Infinity; 
    let b = ""; 

    if (x.length > 0) {
        for (let i = 0; i < x.length; i++) {
            if ( x[i].length < a) {
                b = x[i];
                a = x[i].length; 
            }
        }
    }
    return b;
}


function shorterInArray_while(x){
    let a= Infinity;
    let b="";
    let i=0;
    if(x.length>0){
        while ( i < x.length){
            if ( x[i].length < a) {
                b = x[i];
                a = x[i].length; 
            }
         i++;
        }
    }
    return b;
}

document.write(`<h1>Q18: Create a function called shorterInArray:-</h1> <div class="parent"> <li>shorterInArray_for(strings):- &nbsp;  ${shorterInArray_for(strings)}</li> <li>shorterInArray_whilestrings):- &nbsp;  ${shorterInArray_while(strings)}</li></div>`);




// 19
// Create a function called repeatChar
// that accept a string and char
// and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
// Ex: repeatChar(string,"a") => 6
// Ex: repeatChar(string,"z") => 0

// ** solve it one time using for loop and another using while loop
// **try more cases by your self


function repeatChar_for(x,b){
    x.split();
    let sum = 0;

    for(let i=0; i<x.length;++i){
       if(x[i] == b){
           sum = sum + 1;
       } 
    }
    return sum;
};


function repeatChar_while(x,b){
    x.split();
    let sum = 0;

    let i = 0;
    while(i<x.length){
        if (x[i] == b){
            sum = sum + 1;
        }
        i++;
    }
    return sum;
}

document.write(`<h1>Q19: Create a function called repeatChar:-</h1> <div class="parent"> <li>repeatChar_for(string, "a"):- &nbsp; ${repeatChar_for(string, "a")}</li> <li>repeatChar_while(string, "a"):- &nbsp; ${repeatChar_while(string, "a")}</li></div>`);



/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/





function evenIndexOddLength_for(x){
    let array=[];
    for(let i=0; i<x.length;i++){
    if(x[i].length%2 !=0){
        array.push(x[i]);
    }
  }
  return array;
}


function evenIndexOddLength_while(x){
    let array=[];
    let i=0;
    while(i<x.length){
        if(x[i].length%2 !=0){
            array.push(x[i]);
        }
        i++
    }
    return array;
}

document.write(`<h1>Q20: Create a function called evenIndexOddLength:-</h1> <div class="parent"> <li>evenIndexOddLength_for(strings):- &nbsp;  ${evenIndexOddLength_for(strings)}</li> <li>evenIndexOddLength_while(strings):- &nbsp;  ${evenIndexOddLength_while(strings)}</li></div>`);





// 21
// Create a function called powerElementIndex
// that accept an array of number
// and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
// Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

// ** solve it one time using for loop and another using while loop
// **try more cases by your self


function powerElementIndex_for(x) {
    let array=[];
    let index;
    for(let i=0;i<x.length;i++){
        index=Math.pow(x[i],i);
        array.push(index);
    }
    return array;
}


function powerElementIndex_while(x){
    let array=[];
    let index;
    let i=0;
    while(i<x.length){
        index=Math.pow(x[i],i);
        array.push(index);
        i++;
    }
    return array;
}

document.write(`<h1>Q21: Create a function called powerElementIndex:-</h1> <div class="parent"> <li>powerElementIndex_for(numsx):- &nbsp;  ${powerElementIndex_for(nums)}</li> <li>powerElementIndex_while(numsx):- &nbsp;  ${powerElementIndex_while(nums)}</li></div>`);




// 22
// Create a function called evenNumberEvenIndex
// that accept an array of nums
// and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
// Ex: evenNumberEvenIndex(nums) => [2,8,34]

// ** solve it one time using for loop and another using while loop
// **try more cases by your self
// */

function evenNumberEvenIndex_for(x){
    let array=[];
    for (let i=0; i<x.length;i++){
        if((i%2==0)&&(x[i]%2==0)){
            array.push(x[i]);
        }
    }
    return array;
}


function evenNumberEvenIndex_while(x){
    let array=[];
    let i=0;
    while (i<x.length){
        if((i%2==0)&&(x[i]%2==0)){
            array.push(x[i]);
        }
        i++;
    }
    return array;
}

document.write(`<h1>Q22: Create a function called evenNumberEvenIndex:-</h1> <div class="parent"> <li>evenNumberEvenIndex_for(nums):- &nbsp;  ${evenNumberEvenIndex_for(nums)}</li> <li>evenNumberEvenIndex_while(nums):- &nbsp;  ${evenNumberEvenIndex_while(nums)}</li> </div>`);

