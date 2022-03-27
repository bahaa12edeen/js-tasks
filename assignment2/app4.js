// document.write(`<h1>Q12: Write a function called repeatChar:-</h1> <div class="parent"> <li>repeatChar("schOol","o"): ${repeatChar("schOol","o")}</li> <li>repeatChar("School","s"): ${repeatChar("School","s")}</li></div>`);

ferEach :/*
* Exercise 1: 
* Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*
* Test Case:
*    Test Case 1: doubleValues([1,2,3]) 
*    Test Case 2: doubleValues([5,1,2,3,10])  
*
* Result: 
* Test Case 1:  [2,4,6]
* Test Case 2: [10,2,4,6,20]
*
*
*/

function doubleValues(array){
    let newArray=[];
    array.forEach(i => {
        newArray.push(i*2);
        i++;
    });
    return newArray;
}

document.write(`<h1>Q1: Write a function called doubleValues:-</h1> <div class="parent"> <li>doubleValues([5,1,2,3,10]): ${doubleValues([5,1,2,3,10])}</li> <li>doubleValues([2,4,6]): ${doubleValues([2,4,6])}</li></div>`);


/*
* Exercise 2:
* Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
*
* Test Cases:
*   onlyEvenValues([1,2,3]) 
*   onlyEvenValues([5,1,2,3,10]) 
* 
* Result:
*  Test Case 1:  [2]
*  Test Case 2: [2,10]
*/

function onlyEvenValues(array){
    let newArray=[];
    array.forEach(i =>{
        if(i%2==0){
            newArray.push(i);
        }
    });
    return newArray
}

document.write(`<h1>Q2: Write a function called onlyEvenValues:-</h1> <div class="parent"> <li>onlyEvenValues([5,1,2,3,10]): ${onlyEvenValues([5,1,2,3,10])}</li> <li>onlyEvenValues([2,4,6]): ${onlyEvenValues([2,4,6])}</li></div>`);


/*
* Exercise 3:
* Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
*
* Test Case:
*   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])  
*   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])  
*  
* Result:
* Test Case 1: ["ct", "mt", "tm", "uy"]
* Test Case 2: ['hi', 'ge', 'se']
*
*/

function showFirstAndLast(array){
    let newArray=[];
    array.forEach(i=>{
        newArray.push(i[0]+i[i.length-1]);
    });
    return newArray;
}

document.write(`<h1>Q3: Write a function called showFirstAndLast:-</h1> <div class="parent"> <li>showFirstAndLast(["ct", "mt", "tm", "uy"]): ${showFirstAndLast(["ct", "mt", "tm", "uy"])}</li> <li>showFirstAndLast(['hi', 'ge', 'se']): ${showFirstAndLast(['hi', 'ge', 'se'])}</li></div>`);


/*
* Exercise 4:
* Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed 
* to the function with the new key and value added for each object 
* 
* Test Cases:
*   Test Case :addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
*   
* Result:
*   [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
*
*/

function addKeyAndValue(array,key,value){
    array.forEach(i=>{
       i[key]=value;
    });
    return array;
}

document.write(`<h1>Q4: Write a function called addKeyAndValue:-</h1> <div class="parent"> <li class="wrong">"See console for more details"</li> <li>addKeyAndValue(array,key,value): ${addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor')}</li> </div>`);

console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor'));

/*
* Exercise 5:
* Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the 
* values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
* 
* Test Cases 1: vowelCount('Elie') // {e:2,i:1};
* Test Cases 2:  vowelCount('Tim') // {i:1};
* Test Cases 3:  vowelCount('Matt') // {a:1})
* Test Cases 4:  vowelCount('hmmm') // {};
* Test Cases 5:  vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*   
* Result:
* Test Cases 1: {e:2,i:1};
* Test Cases 2: {i:1};
* Test Cases 3: {a:1})
* Test Cases 4: {};
* Test Cases 5: {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*/


function vowelCount(str){
    var splitArr = str.toLowerCase().split("");
    var obj = {};
    var vowels = "aeiou";

    splitArr.forEach(function(letter){
        if(vowels.indexOf(letter) !== -1){
            if(obj[letter]){ 
                obj[letter]++; 
            } else{
                obj[letter] = 1; 
            }
        }
    });
    return obj;
}

document.write(`<h1>Q5: Write a function called vowelCount:-</h1> <div class="parent"> <li class="wrong">"See console for more details"</li> <li>vowelCount('Elie'): ${vowelCount('Elie')}</li> </div>`);

console.log(vowelCount('Elie'));