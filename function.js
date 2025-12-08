//** function */


/*
function log(user,password){
    console.log(`${user},loging successfully`);

    console.log(password); // if don't enter password parameter than return undefined
    };
    log('johan','secret'); //it gives john and secret
    //log('johan');  // it gives john and undefine
*/

/*
function uppercase(str){
    return str.toUpperCase() //this is method
    
}
const final = uppercase('java')
console.log(final); 
*/ // it gives JAVA

//** function with default parameter */
/* 
function calculateArea(length,width){
    return length*width
    }
const area= calculateArea(4,5);
console.log(area); // gives area 20
*/

/*
function calculateArea(length,width=1){ // if we do not consider width=1 than area gives N@N 
    return length*width
    }
const area= calculateArea(4); // IT gives 4
console.log(area); */

//** Variable Scope */ inside variable are not calls out of the braces

/*
function download(){

    const filename ='xyz'
    console.log(filename)
}
download(); // correct function works
*/

/*

function download(){
    const filename ='xyz';
}
console.log(filename);  // it does not print inside brases variable it is called variable scope
download(); */

//** function declaration and function expression */


//**  declaration 
/*
function declare(){

}
declare(); */

//**  expression
/*
const login = function(){       // Any function with name called anonymous function
    console.log('logging successfully' );
}
login(); 
*/

//** callback
/*
function formatText(text,formatcb){
    return typeof formatcb === 'function' ? formatcb(text) : text //given again call that is callback
  toUpperCase();
    
}
const result =formatText('hello',function(text){
    return text.charAt(0).toUpperCase() + text.slice(1); //slice(1) means array index 1 to last word included
    // charAt(0) means array index 0 only included
} );
console.log(result);   // gives output Hello - H is capital
*/

/*
function formatText(text,formatcb){
    return typeof formatcb === 'function' ? formatcb(text) : text
  toUpperCase();
    
}
const result =formatText('hello',(text)=> text.charAt(0).toUpperCase() + text.slice(1));
console.log(result); 
*/

//** IIFE (Immediately invoked function expression)
// in this we don't need to callback like written function name for callback below given the example

/*
(function setup(){
    console.log('setup done')
    
}()); // you can also callback like this without written function name but the redeblity not perfect
*/

/*
(function setup(){
    console.log('setup is done')
    
})(); //you can also callback like this without written function name and the readablity is also perfect 
*/

//** arrow function
/*
const login = ()=>{ //in  arrow function we cannot use IIFE (Immediately invoke function expresssion)
    console.log('logging sucessfully');
    
}
login(); */

/*
const calculate = (length,width)=>{
    return length * width;
}
const result = calculate(4,5);
console.log(result);// this takes large lines of code below given short code using aarow function
*/

/*
const calculate = (length,width)=>length * width
const result = calculate(4,5);
console.log(result); // this is short code
*/

//**. Code practice */

//* 1. naming
    // get,show ,calculate // gives function name according their work

//* 2. One function One work
    // one function work only one thing (eg : formatText they work only formatText not any othet think)

//* 3. function name should be descriptive

































