/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/

function tellFortune(job_title, geographic_loc, partner_name,child_num){
    return `You will be a ${job_title} in ${geographic_loc}, and married to ${partner_name} with ${child_num} kids.`
}

document.write(`<h1>Q1: Write a function named tellFortune: takes 4 arguments:-</h1> <div class="parent"> <li>Tell Fortune: ${tellFortune('software engineer', 'Jordan', 'Alice', 3)}</li> </div>`);


/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/

function calculateDogAge(age){
    let  puppy_age = age * 7;
    return `Your doggie is ${puppy_age} years old in dog years!`;
}

document.write(`<h1>Q2: Write a function named calculateDogAge:-</h1> <div class="parent"> <li>Calculate DogAge: ${calculateDogAge(2)}</li> </div>`);



/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/

function calculateSupply(age, amount_per_day){
    let tea = (100 - age) * amount_per_day * 365;
    return `You will need ${tea} cups of tea to last you until the ripe old age of 100`;
}

document.write(`<h1>Q3: Write a function named calculateSupply:-</h1> <div class="parent"> <li>Calculate Supply: ${calculateSupply(30, 3)}</li> </div>`);


/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/

function greet(name){
    return `Hello ${name}`;
}

document.write(`<h1>Q4: Write a function called greet:-</h1> <div class="parent"> <li>greet: ${greet("Adam")}</li> </div>`);


// 5
// what is the error:
function double(x) {
  return 2 * x;
}
 

// function double() {
//   return 2 * 7;
// }

// function double() {
//   return 2 * 7;
// }

document.write(`<h1>Q5: Write a function called greet:-</h1> <div class="parent"> <li>what is the error: <br><br>
function double(x) {
    <br> &nbsp; return 2 * x; <br>
  }</li> </div>`);


/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/

function cube(num){
    return num * num * num;
}

document.write(`<h1>Q6: Write a function called cube:-</h1> <div class="parent"> <li>cube(4): ${cube(4)}</li> </div>`);



/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/

function multiply(num1,num2){
    return num1 * num2;
}

document.write(`<h1>Q7: Write a function called multiply:-</h1> <div class="parent"> <li>multiply(3,4): ${multiply(3,4)}</li> <li>multiply(5,4): ${multiply(5,4)}</li></div>`);


/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/

function canIGetADrivingLicense(age){
    let years = 0;
    if(age >= 20){
        return 'Yes you can';
    }
    else{
        years = 20 - age;
        return `please come back after ${years} years to get one`;
    }
}

document.write(`<h1>Q8: Write a function called canIGetADrivingLicense:-</h1> <div class="parent"> <li>canIGetADrivingLicense(21): ${canIGetADrivingLicense(21)}</li> <li>canIGetADrivingLicense(17): ${canIGetADrivingLicense(17)}</li></div>`);



/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

function sameLength(string1,string2){
    if(string1.length == string2.length){
        return true;
    }
    else{
        return false;
    }
}

document.write(`<h1>Q9: Write a function called sameLength:-</h1> <div class="parent"> <li>sameLength("tree","clue"): ${sameLength("tree","clue")}</li> <li>sameLength("tree","car"): ${sameLength("tree","car")}</li></div>`);


/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/

function largerNubmer(num1,num2){
    if(num1 > num2){
        return num1;
    }
    else if(num2 > num1){
        return num2;
    }
}

document.write(`<h1>Q10: Write a function called largerNubmer:-</h1> <div class="parent"> <li>largerNubmer(5,6): ${largerNubmer(5,6)}</li> <li>largerNubmer(5,3): ${largerNubmer(5,3)}</li></div>`);


/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/

function smallerNubmer(num1,num2,num3){
    let smaller;
    if ((num1 < num2) && (num1 < num3)){
        smaller = num1;
    }
    else if ((num2 < num1) && (num2 < num3)){
        smaller = num2;
    }
    else if((num3 < num1) && (num3 < num2)){
        smaller = num3;
    }
    return smaller;
}

document.write(`<h1>Q11: Write a function called smallerNubmer:-</h1> <div class="parent"> <li>smallerNubmer(8,6,7): ${smallerNubmer(8,6,7)}</li> <li>smallerNubmer(5,99,3): ${smallerNubmer(5,99,3)}</li></div>`);


/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/

function shorterString(string1,string2,string3,string4,string5){
    let smaller;
    if ((string1.length <= string2.length) && (string1.length <= string3.length) && (string1.length <= string4.length) && (string1.length <= string5.length)){
        smaller = string1;
        return smaller;
    }
    else if ((string2.length <= string1.length) && (string2.length <= string3.length) && (string2.length <= string4.length) && (string2.length <= string5.length)){
        smaller = string2;
        return smaller;
    }
    else if ((string3.length <= string1.length) && (string3.length <= string2.length) && (string3.length <= string4.length) && (string3.length <= string5.length)){
        smaller = string3;
        return smaller;
    }
    else if ((string4.length <= string1.length) && (string4.length <= string2.length) && (string4.length <= string3.length) && (string4.length <= string5.length)){
        smaller = string4;
        return smaller;
    }
    else if ((string5.length <= string1.length) && (string5.length <= string2.length) && (string5.length <= string3.length) && (string5.length <= string4.length)){
        smaller = string3;
        return smaller;
    }
}

document.write(`<h1>Q12: Write a function called shorterString:-</h1> <div class="parent"> <li>shorterString("air","school","car","by","github"): ${shorterString("air","school","car","by","github")}</li> <li>shorterString("air","tr","car","by","github"): ${shorterString("air","tr","car","by","github")}</li></div>`);


/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/

function longerString(string1, string2, string3, string4){
    let longest;
    if ((string1.length >= string2.length) && (string1.length >= string3.length) && (string1.length >= string4.length)){
        longest = string1;
        return longest;
    }
    else if ((string2.length >= string1.length) && (string2.length >= string3.length) && (string2.length >= string4.length)){
        longest = string2;
        return longest;
    }
    else if ((string3.length >= string1.length) && (string3.length >= string2.length) && (string3.length >= string4.length)){
        longest = string3;
        return longest;
    }
    else if ((string4.length >= string1.length) && (string4.length >= string2.length) && (string4.length >= string3.length)){
        longest = string4;
        return longest;
    }
}

document.write(`<h1>Q13: Write a function called longerString:-</h1> <div class="parent"> <li>longerString("air","school","car","github"): ${longerString("air","school","car","github")}</li> <li>longerString("air","schoo","car","github"): ${longerString("air","schoo","car","github")}</li></div>`);


/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/

function isEven(num){
    if (num%2 == 0){
        return true;
    }
    else{
        return false;
    }
}

document.write(`<h1>Q14: Write a function called isEven:-</h1> <div class="parent"> <li>isEven(1): ${isEven(1)}</li> <li>isEven(2): ${isEven(2)}</li></div>`);


/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/

function isOdd(num){
    if(num%2 != 0){
        return true;
    }
    else{
        return false;}
}

document.write(`<h1>Q15: Write a function called isOdd:-</h1> <div class="parent"> <li>isOdd(4): ${isOdd(4)}</li> <li>isOdd(5): ${isOdd(5)}</li></div>`);



/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/

function positive(num){
    if (num >= 0){
        return num
    }
    else if(num < 0){
        return num * -1;
    }
}

document.write(`<h1>Q16: Write a function called positive:-</h1> <div class="parent"> <li>positive(4): ${positive(4)}</li> <li>positive(-5): ${positive(-5)}</li></div>`);



/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/

function fullName(first_name, last_name){
    return first_name + ' ' + last_name;
}

document.write(`<h1>Q17: Write a function called fullName:-</h1> <div class="parent"> <li>fullName("Adam","McCallen"): ${fullName("Adam","McCallen")}</li> <li>fullName("Alex", "Mercer"): ${fullName("Alex", "Mercer")}</li></div>`);



/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/

function average(num1, num2, num3, num4, num5){
    let avg = (num1 + num2 + num3 + num4 + num5) / 5;
    return avg;
}

document.write(`<h1>Q18: Write a function called average:-</h1> <div class="parent"> <li>average(1,2,3,4,5): ${average(1,2,3,4,5)}</li> <li>average(5,7,9,3,5): ${average(5,7,9,3,5)}</li></div>`);



/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/

function randomNumber(){
    return Math.random();
}

document.write(`<h1>Q19: Write a function called randomNumber:-</h1> <div class="parent"> <li>randomNumber(): ${randomNumber()}</li> <li>randomNumber(): ${randomNumber()}</li></div>`);


/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/

function randomBetweenNumbers(num1,num2){
    return Math.floor(Math.random() * (num2-num1) + num1)
}

document.write(`<h1>Q20: Write a function called randomBetweenNumbers:-</h1> <div class="parent"> <li>randomBetweenNumbers(1,8): ${randomBetweenNumbers(1,8)}</li> <li>randomBetweenNumbers(3,100): ${randomBetweenNumbers(3,100)}</li></div>`);


/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/

function scoreInUniversty(num){
    let score;
    if((num >= 95) && (num <= 100)){
        score='A';
        return score;
    }
    else if((num >= 85)&&(num <= 94)){
        score='B';
        return score;
    }
    else if((num >= 70)&&(num <= 84)){
        score='C';
        return score;
    }
    else if((num >= 50)&&(num <= 69)){
        score='D';
        return score;
    }
    else if((num >= 0)&&(num <= 49)){
        score='F';
        return score;
    }
}

document.write(`<h1>Q21: Write a function called scoreInUniversty:-</h1> <div class="parent"> <li>scoreInUniversty(96): ${scoreInUniversty(96)}</li> <li>scoreInUniversty(3): ${scoreInUniversty(3)}</li></div>`);


/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/

let count =0;
function counter(){
    return count++;
}

document.write(`<h1>Q22: Write a function called counter:-</h1> <div class="parent"> <li>counter(): ${counter()}</li> <li>counter(): ${counter()}</li> <li>counter(): ${counter()}</li></div>`);


/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/

function resetCounter(){
    let countVal = count;
     count = 0;
    return `${countVal} and the counter reset now`;
}

document.write(`<h1>Q23: Write a function called resetCounter:-</h1> <div class="parent"> <li>counter(): ${counter()}</li> <li>counter(): ${counter()}</li> <li>counter(): ${counter()}</li><li>resetCounter(): ${resetCounter()}</li> <li>counter(): ${counter()}</li> <li>counter(): ${counter()}</li><li>resetCounter(): ${resetCounter()}</li> <li>counter(): ${counter()}</li> <li>counter(): ${counter()}</li></div>`);
