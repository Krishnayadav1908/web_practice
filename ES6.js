// previous one is on notebook
/** Arrow function  */
/*
// normal function
function add(a, b){
    return a + b;
}

console.log(add(2, 3)); // output: 5
*/


/*
const button = document.querySelector("#btn");

const shop = {
    price : 100,

    buy : function (){
        button.addEventListener("click", function(){

            //console.log (this);   -><button id="btn">Get images</button> (this mtlb element hai is elemnt ke upar koi price name ki property nhi hai)
            
            console.log("i want" +" " +this.price);
            
        });
    },
};

shop.buy();
//output -> i want undefined (because this. method are not get directly price object -- below given the solution)
*/
/*
const button = document.querySelector("#btn");

const shop = {
    price : 100,

    buy : function (){
        const self = this;  // price object get karega 
        button.addEventListener("click", function(){

            console.log("i want" +" " + self.price);  // self ke andar this object price jo get kiya vo yaha pe aayega
            
        });
    },
};

shop.buy();
//output -> i want 100.  (ye hack use karne se achha hai arrow function use karo -- niche diya hai)
*/
/*
const button = document.querySelector("#btn");

const shop = {
    price : 100,

    buy  (){
        button.addEventListener("click", ()=>{ // arrow function ka koi content nhi hota isliye parent function ko call karta hai)
            
            console.log("i want" +" " +this.price);
            
        });
    },
};
shop.buy();
//output -> i want 100.
*/

/** Template literals AKA backticks  */

/* problem  1 without template literals // old
const name = "krishna";
const surname = "yadava";
console.log( name + " " + surname); // for adding what if more words
*/
/*
// solution using template literals (backticks)
const name = "krishna";
const surname = "yadava";
const age = 20;
const gender = "Male";
console.log(`${name} ${surname} ${age} ${gender} ${4+5}`); // for adding what if more words
*/

/* problem 2 without template literals. //old
const msg = "hello\n" + "how are you"  // for print next line 
console.log(msg); 
*/

/*
//solution using template literals (backticks) for next line
const msg = `hello
how are you`                // for print next line 
console.log(msg); 
*/

/** Enhanced object literals {} */

/*
// 1.computed property key - (keys means inside object keys (name,price,etc.))
// we can use variable as key using [] bracket

const keyName = "name";

const product = {
    [keyName] : "laptop",  // we can use variable as key using [] bracket
    price : 1000,
    category : "electronics"
};

console.log(product);
*/

// 2.method definaton shorthand - 

/* normal method definition - lenthy hai thoda niche diya hai
const product = {
    buy : function(){
        console.log("buying....");
    }
};

product.buy();
*/

/*
//  method definition shorthand - no need to write function keyword

const product = {
    buy(){                       // no need to write function keyword
        console.log("buying....");
    }
};
product.buy();
*/

//3. property shorthand - 
/*
const accessToken = "abcdefg12345";  //backend se aaya hua data hai (authentication token)
const refreshToken = "ghijklmn67890";
*/
// normal way - lenthy hai thoda niche diya hai
/*
const user = {
    accessToken : accessToken,
    refreshToken : refreshToken
};

console.log(user);
*/

/*
// property shorthand - when key and variable name same hai to hum direct likh sakte hai
const user = {
    accessToken,
    refreshToken
};

console.log(user);
*/

/** destructuring */

/* // normal way without destructuring
const user ={
    name : "krishna", 
    age : 20
}
 console.log(user.name);
  console.log(user.age);
 
*/

// destructuring way
/*
const user ={
    name : "krishna", 
    age : 20
}

const {name, age} = user;  // destructuring

//const {name:fullname, age} = user;  // name ko fullname me store kar diya
//console.log(fullname);

console.log(name);
console.log(age);
*/

// array destructuring
/*
const colors = ["red", "green", "blue"];

// normal way without destructuring
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
*/

// destructuring way
/*
const colors = ["red", "green", "blue"];

const [firstColor, secondColor, thirdColor] = colors; // destructuring (red ko firstColor me, green ko secondColor me, blue ko thirdColor me store kar diya)

console.log(firstColor);  //red
console.log(secondColor); //green
console.log(thirdColor);  //blue
*/

/*
// skiping values during array destructuring

const colors = ["red", "green", "blue"];

const [firstColor, , thirdColor] = colors; // skiping second value

console.log(firstColor);
console.log(thirdColor);
*/
/*
// default values during destructuring

const colors = ["red"];

// if second value is not present then by default green assign kar dega
const [firstColor, secondColor="green"] = colors;       
console.log(firstColor);
console.log(secondColor);
*/

// destructuring function return value
/*
function getColors(){       
    return ["red", "green", "blue"];
}

const [firstColor, secondColor, thirdColor] = getColors(); // destructuring function return value

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
*/ 

/*
// destructuring function parameter             
function displayUser({name, age}){   // destructuring function parameter
    console.log("Name:" + name);
    console.log("Age:" + age);
}

const user = {
    name : "krishna",
    age : 20
};

displayUser(user);

// output:  Name:krishna 
//           age:20     
*/

/** default parameter */

// normal way without default parameter
/*
function multiply(a, b){
    if (b === undefined){
        b = 1;
    }
    return a * b;
}

console.log(multiply(5)); // output: 5
console.log(multiply(5, 2)); // output: 10
*/

// default parameter way
/*
function multiply(a, b=1){   // b ka default value 1 hai
    return a * b;
}

console.log(multiply(5)); // output: 5
console.log(multiply(5, 2)); // output: 10
*/


/**  rest parameter way */
/*
//normal way without rest parameter 
const addItems=(a,b,c)=>{
    console.log(a+b+c);
    
}
addItems(1,2,3);  // output: 6
*/
// rest parameter way

/*
const addItems=(...items)=>{ //as it is array me store karega
    console.log(items);
    
}
    addItems(1,2,3,4,5);
*/  // output: [1, 2, 3, 4, 5]

// normal way without rest parameter
/*
function sum(){
    let total = 0;
    for (let i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}

console.log(sum(1, 2, 3)); // output: 6
console.log(sum(1, 2, 3, 4, 5)); // output: 15
*/

/*
function sum(...numbers){   // rest parameter
    let total = 0;
    for (let number of numbers){
        total += number;
    }
    return total;
}

console.log(sum(1, 2, 3)); // output: 6
console.log(sum(1, 2, 3, 4, 5)); // output: 15
*/      

/** spread operator */
// normal way without spread operator
/*
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = arr1.concat(arr2); // combining two arrays
console.log(combined) // output: [1, 2, 3, 4, 5, 6]

//console.log(arr1.concat(arr2))// output: [1, 2, 3, 4, 5, 6]
*/

// spread operator way
/*
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2]; // combining two arrays using spread operator
console.log(combined); // output: [1, 2, 3, 4, 5, 6]
*/

// spread operator to copy array
/*
const original = [1, 2, 3];
const copy = [...original]; // copying array using spread operator

console.log(copy); // output: [1, 2, 3]
*/

// spread operator to copy object
/*
const original = {a: 1, b: 2};
const copy = {...original}; // copying object using spread operator

console.log(copy); // output: {a: 1, b: 2}
*/

// spread operator to merge objects
/*
const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

const merged = {...obj1, ...obj2}; // merging two objects using spread operator

console.log(merged); // output: {a: 1, b: 2, c: 3, d: 4}
*/
    
/* for loop */
/*
const colors = ["red", "green", "blue"];

// normal way using for loop
for (let i = 0; i < colors.length; i++){
    console.log(colors[i]);
}
*/

/** for...of loop way */ 
/*
// 1. for...of loop to iterate over array elements
const colors = ["red", "green", "blue"];

// using for...of loop
for (let color of colors){
    console.log(color);
}
*/
// output:  red
//          green
//          blue

/*
 // 2. for...of loop to iterate(itrerate means loop) over string characters
const message = "hello";

// using for...of loop
for (let char of message){
    console.log(char);
}
*/
// output:  h
//          e
//          l
//          l
//          o
/*
// 3. for...of loop to iterate over object entries
const user = {
    name: "krishna",
    age: 20 
};

for (let entries of Object.entries(user)){          // we can use any name instead of entries
    console.log(entries); // mainly used for object
}
// output:  [ 'name', 'krishna' ]
//          [ 'age', 20 ]
*/
/*
for (let [key,values] of Object.entries(user)){          // we can use any name instead of entries
    console.log(key,values); // mainly used for object

    //output:  name krishna
    //          age 20
}
*/
/* for...in loop */
// for...in loop to iterate over object properties
/*
const user = {
    name: "krishna",
    age: 20 
};

for (let key in user){              // we can use any name instead of key
    console.log(key + ": " + user[key]); // mainly used for object
}

// output:  name: krishna
//          age: 20
*/

/** promises */
/*
// creating a promise
const myPromise = new Promise((resolve, reject) => {
    const success = true; // change to false to test rejection

    if (success){
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected!");
    }
});

// consuming the promise
myPromise
    .then((message) => {
        console.log(message); // output: Promise resolved successfully!
    })
    .catch((error) => {
        console.log(error); // output: Promise rejected!
    });

*/
/** async/await */
/*
function fetchData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 2000);
    });
}

async function getData(){
    console.log("Fetching data...");
    const data = await fetchData();
    console.log(data); // output: Data fetched successfully!
}

getData();
*/

/* set */
/*
const mySet = new Set();

// adding values to the set
mySet.add(1);
mySet.add(2);
mySet.add(2); // duplicate value, will be ignored
mySet.add(3);

console.log(mySet); // output: Set { 1, 2, 3 }

// checking if a value exists in the set
console.log(mySet.has(2)); // output: true
console.log(mySet.has(4)); // output: false

// removing a value from the set
mySet.delete(2);
console.log(mySet); // output: Set { 1, 3 }

// iterating over the set
for (let value of mySet){
    console.log(value);
}
// output: 1
//         3
*/

/** map (hashtable) */
/*
const myMap = new Map();

// adding key-value pairs to the map
myMap.set("name", "krishna");
myMap.set("age", 20);

console.log(myMap); // output: Map { 'name' => 'krishna', 'age' => 20 }

// getting values from the map
console.log(myMap.get("name")); // output: krishna
console.log(myMap.get("age")); // output: 20

// checking if a key exists in the map
console.log(myMap.has("name")); // output: true
console.log(myMap.has(" gender")); // output: false

// removing a key-value pair from the map
myMap.delete("age");
console.log(myMap); // output: Map { 'name' => 'krishna' }

// iterating over the map
for (let [key, value] of myMap){
    console.log(`${key}: ${value}`);
}
// output: name: krishna
*/ 

//checking size of map and set
/*
const mySet = new Set([1, 2, 3, 4, 5]);
console.log(mySet.size); // output: 5

const myMap = new Map();
myMap.set("a", 1);
myMap.set("b", 2);
myMap.set("c", 3);
console.log(myMap.size); // output: 3
*/

/** classes */
 /*
class Person {
    constructor(name, age){ 
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person("krishna", 20);
person1.greet(); // output: Hello, my name is krishna and I am 20 years old.
*/

/** inheritance */
/*
class Animal {
    constructor(name){
        this.name = name;
    }

    speak(){
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name){
        super(name);        // call the parent class constructor
    }

    speak(){
        console.log(`${this.name} barks.`);
    }
}

const dog1 = new Dog("Buddy");
dog1.speak();   // output: Buddy barks.
*/

/*
// testing base class
const dog1 = new Animal("Buddy");
dog1.speak(); // output: Buddy makes a noise.
*/

/* modules */
// export.js
/*
export const pi = 3.14;

export function add(a, b){
    return a + b;
}
*/
/*
// import.js

import { pi, add } from './export.js';

console.log(pi); // output: 3.14
console.log(add(2, 3)); // output: 5

*/
// default export.js
/*
const pi = 3.14;

export default pi;
*/

// default import.js
/*
import pi from './defaultExport.js';

console.log(pi); // output: 3.14
*/  

/** generators */
/*
function* numberGenerator(){
    let num = 1;
    while (true){
        yield num; // yield keyword to pause the function and return the value
        num++;
    }
}

const gen = numberGenerator();

console.log(gen.next().value); // output: 1
console.log(gen.next().value); // output: 2
console.log(gen.next().value); // output: 3
*/

/** Symbol data type */
/*
const sym1 = Symbol("description");
const sym2 = Symbol("description");

console.log(sym1 === sym2); // output: false (each symbol is unique)

// using symbols as object keys
const mySymbol = Symbol("key");
const obj = {
    [mySymbol]: "value"
};

console.log(obj[mySymbol]); // output: value            
*/ 


/** Optional chaining operator ?.  */
/*
const user = {
    name: "krishna",
    address: {
        city: "Mathura",
        country: "India"
    }
};

// without optional chaining operator
console.log(user.address.city); // output: Mathura
console.log(user.contact.phone); // error: Cannot read property 'phone' of undefined
*/

// with optional chaining operator
/*
console.log(user.address?.city); // output: Mathura
console.log(user.contact?.phone); // output: undefined
*/  










