/*
console.log('hello');

setTimeout(function()
{
    console.log('i am from settimeout'); // it prints after 5 second because it is asynchronous
    
},5000);

console.log('javascript');  // output -> hello / javascript / i am from settimeout
*/

/*
console.log('hello');

function greeting(){
   
    console.log('i am from settimeout'); 
    
}
setTimeout(greeting,5000); // callback greeting function & set timer print after 5 second
console.log('javascript');
*/

/*
console.log('hello');

setTimeout(()=>{
    console.log('i am from settimeout'); 
    
},0);       // if we used asynchronous than even set 0 second than print after all other function 
console.log('javascript'); // output-> hello / javascript / i am from settimeout
*/

/*
console.log('hello');

function waitforSevensecond(){
    let ms = 7000 + new Date().getTime();
    while(new Date()< ms);
};

setTimeout(()=>{
    console.log('world is great'); // it prints after 7 second beacause waitforSevensecond() is not asynchronius function , that is not run in background.
    
});
waitforSevensecond(); // output -> hello / world is great
*/










