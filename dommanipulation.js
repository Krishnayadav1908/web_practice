//** DOM MANIPULATION

// DOM manipulation document object model */

//** 1. getElementById */ (we can use only one time (unique))
/*
const heading =document.getElementById("heading") //get data from html which is defined has id="heading"
console.log(heading);                              // we also use [] index for choose which one get 
*/

//** 2. getElementsByTagName */
/*
const heading =document.getElementsByTagName("h1") // as it is same tag but use tag name that is h1
console.log(heading);                               // we also use [] index for choose which one get 
*/
//** 3. getElementsByClassName */ (we can use multiple time (each tag which has defined as class))
/*
const heading = document.getElementsByClassName("heading");
console.log(heading);  
*/
//** 4. querySelector */ 
/*
const heading = document.querySelector("#heading"); // for ID
console.log(heading);  

const head = document.querySelector(".heading"); // for Class
console.log(head);  
*/

//** 4. querySelectorAll */ 
/*
const heading = document.querySelectorAll("#heading"); // for ID
console.log(heading); 

const head= document.querySelectorAll(".heading"); // for class
console.log(head);
*/


/** TRAVERSE (these are properties) */

/* 1.parentNode  (this is use for get parentnode using child) */
/*
const heading= document.querySelector(".heading"); 
const parent= heading.parentNode;
console.log(parent);
*/

/* 2. childNodes (this is use for get childnode using parent) */
/*
const parent = document.querySelector('.parent');
console.log(parent.childNodes);
*/

/* 3. nextElementSibling  (return next tag)     */
/*
const heading = document.querySelector('.heading');
console.log(heading.nextElementSibling);
*/

/* 4. previousElementSibling  (return previous tag)     */
/*
const subHeading = document.querySelector('h3');
console.log(subHeading.previousElementSibling);
*/


/** Manipulation  */ // we can change inside tags text , font color & size
/*
const heading = document.querySelector(".heading");
heading.innerHTML = "Web dev is awesome"            
heading.style.color= "red"
heading.style.fontSize = "50px"                   // in CSS we write font-size but in JS fontSize        

heading.classList.add('title')                   // It shows only in web pages element (shows           class="heading title")

heading.classList.remove('heading')             // we can remove heading class (shows class="title")
*/

// Advance Manipulation
/*
const heading = document.createElement("h1")  //creates elements
heading.innerHTML = "java,DSA,js"                   // add text in element
const parent = document.querySelector(".parent")    // gets the parents class
parent.appendChild(heading);                        // add a headind element in parent class
*/
//we can also add or append more element 
/*
const subHeading=document.createElement("h3");
subHeading.innerHTML= "we dev is awesome";
parent.appendChild(subHeading)
*/
//we can change the to print h3 before the heading tag by using below (method)
/*
const subHeading=document.createElement("h3");
subHeading.innerHTML= "we dev is awesome";
heading.insertAdjacentElement("afterend",subHeading); //beforeend, beforebegin, afterbegin
console.log(heading);  
*/

/**DOM Event  */ //events like click,blur,mousemove & etc is event
/*
const button = document.querySelector("#btn")
const heading = document.querySelector("#heading")

button.addEventListener("click", function(event){      //we not used(event) parameter now but it is used
    heading.style.color = 'red'
    heading.style.fontSize = "100px"
    console.log("button clicked",event);   
})
*/


/** project 1 */

/*
const bulb = document.querySelector("#bulb");
const Switch = document.querySelector("#switch-bulb");

Switch.addEventListener("click", function(){
    console.log(bulb.src);
    if(bulb.src.match('off')){         // checks off found in bul.src than take action (.match(word)-method)
        bulb.src = "./image/bulb-on.gif"; // if off found than image on bulb gives
        Switch.innerHTML = "Turn Off"     // if bulb on than onto button shows turn off
    }else{
        bulb.src = "./image/bulb-off.gif";
        Switch.innerHTML = "Turn On"
    }
})
*/

/** Project 2 */ // photos get nhi hua baki sab barobar hai
/*
const root = document.querySelector("#root")
const button = document.querySelector("button")

function createItem(item){
    const card = document.createElement("div")
    card.classList.add("card")

    const photo = document.createElement("img")
    photo.src = item.thumbnailUrl

    const title = document.createElement("h4")
    title.innerHTML = item.title

    //add photos & title in card div
    card.appendChild(photo)
    card.appendChild(title)

    // add card in root div
    root.appendChild(card)
}

function displayImages(items){
    items.forEach(function(item){
        createItem(item);
        
    });
    
    //console.log(items);
    
}

button.addEventListener("click", function(){
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')      //.then pahele (;) nhi laga sakte
        .then((res)=>res.json())                      // fetch returns promise
        .then((items)=>{                           // res.json() return promise
            displayImages(items);
        });
});
*/
/*
HTML //project 2 used HTML tags
<button>Get images</button>
<div id="root"></div>
*/




