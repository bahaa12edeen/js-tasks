/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
*/

let bahaa = {
    fname: "bahaa",
    lname: "aldeen",
    age: 22,
    dob: "05/06/1999",
    favfood: ["mensaf", " msakhan", " shushbarak"],
    favmovie: ["sherlock holmes", " home alone", " find nemo"]
}

console.log(`Q1: Create an object represents you:- \n name: ${bahaa.fname} ${bahaa.lname} \n age: ${bahaa.age} \n date of birth: ${bahaa.dob} \n favorite food: ${bahaa.favfood} \n favorite movie: ${bahaa.favmovie} \n`);

document.write(`<h1>Q1: Create an object represents you:-</h1> <div class="parent"> <li>name: ${bahaa.fname} ${bahaa.lname}</li> <li>age: ${bahaa.age}</li> <li>date of birth: ${bahaa.dob}</li> <li>favorite food: ${bahaa.favfood} </li> <li> favorite movie: ${bahaa.favmovie}</li> </div>`);


  
  /*
  2
  Using the varabile persons
  Create a function called firstName
  that accept an object
  and return all the first name of the person insides
  
  Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Zues', 'Soso']
  */

  let persons = [
    { name: { first: ' John', last: 'Hob' }, age: 35 },
    { name: { first: ' Alex', last: 'Mercer' }, age: 25 },
    { name: { first: ' Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: ' Zues', last: 'Odin' }, age: 55 },
    { name: { first: ' Soso', last: 'Al-Amora' }, age: 67 }
  ];

  function firstName(x){

    let arr = [];

    for(let i=0; i < x.length; i++){
       
        arr[i] = x[i].name.first;
    }

    return arr;
  }

console.log(`Q2: Create a function called firstName:- \n ${firstName(persons)} \n`);
document.write(`<h1>Q2: Create a function called firstName:-</h1> <div class="parent"> <li>${firstName(persons)}</li></div>`);
  
  
  /*
  3
  Using the varabile persons
  Create a function called averageAge
  that accept an object
  and return the average age of those persons
  
  Ex: averageAge(persons) => 41.2
  */

  function averageAge(x){
    let sum= 0;

    for(let i=0; i < x.length; i++){
        sum += x[i].age;
    }
    return sum/x.length;
  }

  console.log(`Q3: Create a function called averageAge:- \n ${averageAge(persons)} \n`);
document.write(`<h1>Q3: Create a function called averageAge:-</h1> <div class="parent"> <li>${averageAge(persons)}</li></div>`);
  
  
  /*
  4
  Using the varabile persons
  Create a function called olderPerson
  that accept an object
  and return the full name of the older person
  
  Ex: olderPerson(persons) => "Soso Al-Amora"
  */

  function olderPerson(x){
      let older = 0;
        for(let i=0; i < x.length-1; i++){
            if(x[i].age < x[i+1].age){
                older = x[i+1].age;
            }
        }

        return older;
  }

  console.log(`Q4: Create a function called olderPerson:- \n ${olderPerson(persons)} \n`);
  document.write(`<h1>Q4: Create a function called olderPerson:-</h1> <div class="parent"> <li>${olderPerson(persons)}</li></div>`);

  
  
  /*
  5
  Using the varabile persons
  Create a function called longestName
  that accept an object
  and return the full name of the person have longest full name
  
  Ex: longestName(persons) => "Soso Al-Amora"
  */

  function longestName(x){
      let max = ((x[0].name.first + x[0].name.last).length);
      let name;

      for(let i=0; i < x.length-1; i++){

        if(max < ((x[i+1].name.first + x[i+1].name.last).length)){
            max = ((x[i+1].name.first + x[i+1].name.last).length);
            name = ((x[i+1].name.first + x[i+1].name.last));
        }
      }

      return name + " / " + max;
  }

  console.log(`Q5: Create a function called longestName:- \n ${longestName(persons)} \n`);
  document.write(`<h1>Q5: Create a function called longestName:-</h1> <div class="parent"> <li>${longestName(persons)}</li></div>`);


  
  /*
  7
  Create a function called repeatWord
  that accept a string
  and return an object that represents how many times each word repeat
  ** no matter it is upper case or lower case
  ** Search on MDN about something can cut the string to words??
  
  Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
  => {
    my:1,
    name:2,
    is:1,
    alex:1,
    mercer:1,
    class:1,
    b:1,
    baba:1,
    mama:1,
    hello:3
  }
  */

  let text = "My name is alex mercer class name B baba mama hello Hello HELLO";

  let text_low = text.toLowerCase();

  let words,
      word = [],
      repeat = [];

      words = text_low.split(" ", text_low.length);

      console.log("words: " + words);

      function repeatWord(x){
          for(let i=0; i < x.length-1; i++){
             word[i] = x[i];
             repeat[i] = 0;
             for(let e=1; e < x.length; e++){
                if(x[i] == x[e]){
                  repeat[i]++;
                }
             }
          }
          return (repeat);
      }

  console.log("Q6: repeatWord: " + repeatWord(words) + " / " + "words: "+ words);
  document.write(`<h1>Q6: repeatWord:-</h1> <div class="parent"> <li class="wrong"> not finished yet</li> <li>repeatWord: ${repeatWord(words)}</li> <li>words: ${words}</li></div>`);


  let unique = [" a"];

  for(let i=0; i < words.length; i++){
    for(let e=0; e < words.length; e++){
        if(e == i) continue;
        if(words[i] == words[e]){
            // for(let v=e; v < words.length; v++){
            //     words[v] == words[v+1];
            //     words.pop();
            // }
            console.log("it happen: "+ words[i]);
        }
    }
    
  }

  console.log("unique: " + words);


  /*
  8
  Create a function called repeatChar
  that accept a string
  and return an object that represents how many times each char repeat
  ** no matter it is upper case or lower case
  ** Search on MDN about something can cut the string to char??
  
  Ex: repeatChar("mamababatetacedo")
  => { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
  */
  
  
  /*
  9
  Create a function called selectFromObject
  that accept an object and an array
  and return an object have the key that inside the array
  
  Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
  =>  {a: 1, cat: 3}
  */
  
  
  /*
  10
  Create a function called objectToArray
  that accept an object
  and return an array of the keys and values in this object
  
  Ex: objectToArray({firstName:"Moh",age:24})
  => ["firstName","Moh","age",24]
  */
  
  
  /*
  11
  Create a function called arrayToObject
  that accept an array
  and return an object of the keys and values in this object
  
  Ex: arrayToObject(["firstName","Moh","age",24])
  => {firstName:"Moh",age:24}
  */
  
  
  /*
  12
  Create a function called onlyNumber
  that accept an object
  and return a new object that have only the values that is a number
  **hint: search in MDN how to know the type of variable
  
  Ex: onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]})
  => {age:24}
  */
  
  
  /*
  13
  Create a function called onlyString
  that accept an object
  and return a new object that have only the values that is a string
  **hint: search in MDN how to know the type of variable
  
  Ex: onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]})
  => {firstName:"Moh"}
  */
  
  
  /*
  14
  Create a function called onlyArray
  that accept an object
  and return a new object that have only the values that is a array
  **hint: search in MDN how to know the type of variable
  
  Ex: onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
  => {movies:[1,5,"string"]}
  */
  
  
  /*
  15
  Create a function called keysArray
  that accept an object
  and return an array have the key inside this object
  
  Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
  => ['firstName', 'age', 'movies']
  
  */