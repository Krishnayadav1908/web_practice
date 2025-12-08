/* const userRole = 'admin';

if(userRole == 'admin'){
    console.log("you are admin");
    
}else{
    console.log("you are not admin");
    
} */

    // ** ARRAYS ** //

//const languages =[ 'javascript','python','java'];
//console.log(languages[2]);
//languages.push ('dart');
//console.log(languages.length);;
//languages.unshift('c');
//console.log(languages);
//languages.pop();
//languages.shift();
//onsole.log(languages);

//** for loop **//
/*
for(let i=0; i<4;i++){
    console.log('*');
}
Charging*/

//** **/ //substract 10 rupees of all acorts for over acting

const actors=[
    {
        name :'actor1',
        payment:150
    },

    {
      name : 'actor2',
        payment:100  
    },
    {
        name :'actor3',
        payment:200
    }
];


/*for(let i=0;i<actors.length;i++){
    actors[i].payment=actors[i].payment-10;
};

console.log(actors);*/

//** for each *// loop

/*
actors.forEach((actor)=>{
    actor.payment=actor.payment-10;
}
);

console.log(actors);*/

//** for of *// loop

/*
for(let actor of actors){
    actor.payment=actor.payment-10;

}
console.log(actors); 
*/

//** filter *// remove unnecessarry data or information (eg: remove student less than 35 marks)

/*
const students = [
    {
        name : 'student1',
        marks : 35
    },
     {
        name : 'student2',
        marks : 45
    },
     {
        name : 'student3',
        marks : 55
    }
]; 
*/

 /*
 const failed = students.filter((student)=>{
    if(student.marks<45){
        return true;
    }else{
        return false;
    }
});
console.log(failed);
*/

/*
const failed = students.filter((student)=>{
    return student.marks<45;                        //shortcut (if else reduced)
})
console.log(failed);
*/

/*
const failed = students.filter((student)=> student.marks<45); // more short(return and {}bracket reduced)
console.log(failed); 
*/

//** map *// 

/*
const users =[
    {
        fname:'john',
        lname:'deon'
    },
     {
        fname:'hritik',
        lname:'roshan'
    }
]; 
*/

/*
const finalusers = users.map((user)=>{
 return{
    fullname: user.fname+ ' ' +user.lname
}
});
console.log(finalusers); 
*/

/*
const finalusers = users.map((user)=>{
 return{
    fullname: `${user.fname} ${user.lname}`
}
});

console.log(finalusers);
*/

//** reduce *// sum of all total budget
/*
const movies =[
    {
        name: 'dhoom1',
        budget : 200
    },
      {
        name: 'dhoom2',
        budget : 150
    },
      {
        name: 'dhoom3',
        budget : 100
    }
];
*/

/*
let total=0;
movies.forEach((movie)=>{
    total=total+movie.budget;           // total += movie.budget;
});
console.log(total); 
*/
/*
const total = movies.reduce((acc,movie)=>
{
    acc = acc + movie.budget;
    return acc;
},0);
console.log(total); 
*/

//** Indexof *// checks user are admin or not

/*
const admins = [3,5,6];

const user1 = {
    name:'krishna',
    id : 3      // if id no. in array than they returns index no. or if id not in array than gives -1 value
} ;
*/
/*
const isAdmin = (admins.indexOf(user1.id)) > -1; // -1 shows out of the admin array
console.log(isAdmin); */

//** includes *//

/*
const admins = [3,5,6];

const user = {
    name:'krishna',
    id : 4       // if id no. in array than they returns index no. or if id not in array than gives -1 value
}

console.log(admins.includes(user.id));
*/

//** find *// get user through user id

const users =[
    {
        name : 'xyz',
        id : 1
    },
     {
        name : 'abc',
        id : 2
    },
     {
        name : 'pqr',
        id : 3
    }
];

/*
const myUser =users.find((user)=>{
    
    if(user.id===2){
        return true;
    }
        return false;
    });
console.log(myUser); 
*/

/*
const myUser =users.find((user)=>{
    return user.id==2;
});
console.log(myUser); 
*/

/*
const myUser =users.find((user)=> user.id==3);
console.log(myUser); 
*/


const myUser =users.find((user)=> user.name=='abc');
console.log(myUser);














 
























































