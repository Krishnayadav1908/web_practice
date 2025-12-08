// scenario
/*
1. register
2. send welcome to e-mail
3. login
4. Get.user.data
5. Display.user.data
*/
/*
function waitforthreesecond(){
    let ms = 3000 + new Date().getTime()
    while(new Date()<ms);
} */

//once we set a time to any function than that function run after the set time even other function time is less than that function (given below example)
//If we create a callback in register function than the we insert all other function in registers callback function than all the process done after the register function even set a time for register function more than others (you can it below)
// but if we set a time of sub function than print according to times are set(insides register functions)

/*
function register(callback){
    setTimeout(()=>{
    console.log("register end");
    callback()
    },2000)   
}
function welcomeEmail(){
   setTimeout(()=>{
    console.log("Email End");
    },1000) 
    
}
function isloging(){
    setTimeout(()=>{
     console.log("logging End");
    },1000) 
 

}
function getUserdata(){
    setTimeout(()=>{
    console.log("get users data");
    },1000) 
   
    

}
function displayUserdata(){
    setTimeout(()=>{
    console.log("Display users data");
    },1000) 
    
    

}

register(function (){
welcomeEmail();
isloging();
getUserdata();
displayUserdata();
})

console.log("other application work");
*/

// below are given callback function of sub function (which similar and continue like above one)
// as seen that below that show that does not matter how much time you set any function because function callback another function (first work than other function work according to the above scenario).

/*
function register(callback){
    setTimeout(()=>{
    console.log("register end");
    callback()
    },2000)   
}
function welcomeEmail(callback){
   setTimeout(()=>{
    console.log("Email End");
    callback()
    },1000) 
    
}
function isloging(callback){
    setTimeout(()=>{
     console.log("logging End");
     callback()
    },1000) 
 
}
function getUserdata(callback){
    setTimeout(()=>{
    console.log("get users data");
    callback()
    },1000) 
}
    function displayUserdata(){
    setTimeout(()=>{
    console.log("Display users data");
    },1000) 
}

// callback hell (nesting)
register(function (){
    welcomeEmail(function(){
        isloging(function(){
            getUserdata(function(){
                 displayUserdata();
            });
        });
    })
})

console.log("other application work")
*/


/** promises */
/*
function register(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("register end");
     resolve();
    },2000); 
});  
}
function welcomeEmail(){
return new Promise((resolve,reject)=>{
   setTimeout(()=>{
    console.log("Email End");
    resolve()
    },1000) 
})
    
}
function isloging(){
    setTimeout(()=>{
     console.log("logging End");
     
    },1000) 
 
}
function getUserdata(){
    setTimeout(()=>{
    console.log("get users data");
    
    },1000) 
}
    function displayUserdata(){
    setTimeout(()=>{
    console.log("Display users data");
    },1000) 
}

register().then(welcomeEmail) //after register functio than runs welcomeemail (below code are given all promises continue for all the function)

console.log("other application work");
*/
// above codes are says that 

// continue for all function
/*
function register(){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("register end");
     resolve();
    },2000); 
});  
}

function welcomeEmail(){
return new Promise((resolve,reject)=>{
   setTimeout(()=>{
    console.log("Email End");
    resolve()
    },1000) 
})
}
function isloging(){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("logging End");
    resolve()
    },1000) 
    })
}

function getUserdata(){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("get users data");
    resolve()
    },1000) 
    })
}
function displayUserdata(){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("Display users data");
    resolve()
    },1000) 
    })
}

register()
    .then(welcomeEmail)
    .then(isloging)
    .then(getUserdata)
    .then(displayUserdata)

console.log("other application work");    
*/

/* reject */
// if any error occured in the function than how handle it (below are given)
// resolve are stored in (.then) and reject are stored in (.catch)


function register(){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    reject('error while registering');
    console.log("register end");
    },2000); 
});  
}

function welcomeEmail(){
return new Promise((resolve,reject)=>{
   setTimeout(()=>{
    console.log("Email End");
    resolve()
    },1000) 
})
}
function isloging(){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("logging End");
    resolve()
    },1000) 
    })
}

function getUserdata(){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("get users data");
    resolve()
    },1000) 
    })
}
function displayUserdata(){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("Display users data");
    resolve()
    },1000) 
    })
}



register()
    .then(welcomeEmail)
    .then(isloging)
    .then(getUserdata)
    .then(displayUserdata)

.catch ((err)=>{
    console.log('Error:', err);  // to handle the error function (normal msg show in red error)
}
)

console.log('other application work')


/** async await */
/*
function register(){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("register end");
     resolve();
    },2000); 
});  
}

function welcomeEmail(){
return new Promise((resolve,reject)=>{
   setTimeout(()=>{
    console.log("Email End");
    resolve()
    },1000) 
})
}
function isloging(){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    reject('error while registering');
    console.log("logging End");
    },1000) 
    })
}

function getUserdata(){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("get users data");
    resolve()
    },1000) 
    })
}
function displayUserdata(){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("Display users data");
    resolve()
    },1000) 
    })
}

//async await (It is more shorted than a (.then) method)


async function authenticate () {
    await register ()
    await welcomeEmail()
    await isloging()
    await getUserdata()
    await displayUserdata()
    
}
    */
/*
authenticate ()

console.log('other application work')
*/
/*
// we can also use (.then) because authenticate () function returns promise result
// this is use for print anything after all the function works one-by-one 

authenticate().then(()=>{
    console.log('All set!');
})

*/


/*
// also use above for handling .cathch
authenticate().then(()=>{
    console.log('All set!');
})
.catch((err)=> {
    console.log(err);
    
})
*/
/*
async function authenticate () {
    try{
    await register ()
    await welcomeEmail()
    await isloging()
    await getUserdata()
    await displayUserdata()
    } catch(err){
        console.log(err);
        
    }
}

authenticate().then(()=>{
    console.log('All set!');
})  

//output -> other application work 
// register end
//  Email End
//logging End
 //error while registering
 //All set!
*/

/*
 // so we can see that we found error and find .then() function are also run to stop we use below code

 async function authenticate () {
    try{
    await register ()
    await welcomeEmail()
    await isloging()
    await getUserdata()
    await displayUserdata()
    } catch(err){
        console.log(err);
        throw new Error(); // if any error found in (.then ()) function they not run
        
    }
}
authenticate().then(()=>{
    console.log('All set!');
})  

*/

/*
// this one is use for (.then()) function error handling

async function authenticate () {
    try{
    await register ()
    await welcomeEmail()
    await isloging()
    await getUserdata()
    await displayUserdata()
    } catch(err){
        console.log(err);
        throw new Error(); // if any error found in (.then ()) function they not run
        
    }
}
authenticate().then(()=>{
    console.log('All set!');
})  
.catch((err)=>{
    console.log(err);
    
})
*/
// in this method resolve () data are return in await register() 
// example:

/*
async function authenticate () {
    try{
    const message = await register ()
                    await welcomeEmail()
                    await isloging()
                    await getUserdata()
                    await displayUserdata()
                    console.log(message);
                    
    } catch(err){
        console.log(err);
        throw new Error(); // if any error found in (.then ()) function they not run
        
    }
}
authenticate().then(()=>{
    console.log('All set!');
})  
.catch((err)=>{
    console.log(err);
    
})
*/
