/* Primitive data types
// 7 types - String, Number, boolean, null, undefined, symbol(to make unique tags)
bigInt

JavaScript is a dynamically typed language

Reference(non premptive)
Array, Objects, Functions


Stack(Primitve), Heap (Non-primitve) - 
In a Primitve data type u will get copy of a data type and in 
Non primtive you will get reference of a data type 

E.g - 

let myYoutube="Saqib.com"
let anotherName=myYoutube;
anotherName="Hello.com";
console.log(myYoutube);
console.log(anotherName);



let user={
    email: "12@gmail.com",
    id:123
    }
    let UserTwo=user;
    UserTwo.email="Saqib.com";
    console.log(user.email);
    
    
    const string ="    saqib   "
    const string2=12333
    console.log(string.trim());  to print without spaces 
    console.log(string2.toFixed(1)) for the precision value
    let myCreatedDate = new Date("01-12-2025");
    console.log(myCreatedDate.toLocaleString());
    let input=("15-07-2025");
    let [day, month, year]=input.split('-');
    let date=new Date(day,month-1,year);
    console.log(date.toString());


*/   


/*

******************Arrays***************

const myArr=[0,1,2,4,5];
//Methods

myArr.push(6);
myArr.pop();
myArr.pop();
                    
const newArr= myArr.join()//to join all elements and convert into the string
console.log(typeof newArr);
                    
console.log(myArr.includes(6));
console.log(myArr.includes(7));
                    
console.log(myArr.toString());

************slice or splice***********

const myArr = [0,1,2,3,4,5];
console.log(myArr);
const my2=myArr.slice(1,3);
console.log(my2);
const my1=myArr.splice(1,3);
console.log(my1);

const heros=["thor","iron-man","spiderman"];
const heros2=["batman","super-man","saqibman"];
const allHeros =[...heros,...heros2];  //spread operator
console.log(allHeros);

const array=[1,2,3,[4,5],6]; //Array ke andhar array

// heros.push(heros2); // js mai array kisi bhi type ka data type le sakta 
// hai issi liye yahan isne array2 kko as a data le liya
console.log(heros.concat(heros2)); // returns new array this method will add as a array to array

More methods
from,of,IsArray etc;

*/






/*
**************Objects************

//Singleton
Object.create;
Object.freeze;


//Object literals
const sym=Symbol("key");
console.log((typeof(jsUser[sym])));

const jsUser= {
    name:"Saqib",
    add:"Achabal",
    id:12218938,
    eligible:true,
    // [sym]:"Key1" // to add symbol in object
};
jsUser.greeting=function(){
    console.log("Hello this is inside function");
};
jsUser.greetingTwo=function(){
    console.log(`Hello this is ${this.name}`);
};
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
*/



/*
const user={}
user.id=123;
user.name="Saqib";
user.isLoggedIn=false;

// console.log(user);

const regularUser={
    email:"dar@gamil.com",
    fullname:{
        firsname:"Saqib",
        LastName:"Dar"
    }
}
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.firsname, regularUser.fullname.LastName);


// const obj1={1:"a", 2:"b"}
// const obj2={3:"a", 4:"b"}
// const obj ={obj1, obj2}
// console.log(obj);  //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }



const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}
// const obj= Object.assign(obj2,obj1);
const obj={...obj1,...obj2} // does same and is useful in industry
// console.log(obj);


const users=[
    {
        id:1,
        email:"daaroo@gamil.com"
    },
    {
        id:2,
        email:"daaroo1@gamil.com"
    },
    {
        id:3,
        email:"daaroo3@gamil.com"
    },
    {
        id:4,
        email:"daaroo5@gamil.com"
    }
]
console.log(Object.keys(users));
console.log(Object.values(users));

for (let index = 0; index < users.length; index++) {
    console.log(users[index]);
}

*/





/*

**********Objects last************


const course={
    courseName:"Js advanced",
    price:999,
    StudentName:"Saqib"
}

const {StudentName,price} = course;
const {courseName:Cn} = course; // we can use short form of object elements
console.log(price,StudentName);
console.log(Cn);

*/



/*

**********Functions************

const a=10;
const b=40;
function add(a,b){
    return a+b;
}
const ans=add(a,b);
// console.log(ans);

function loginUser(username){
    if(!username || username===undefined){ //use only one 
        console.log("Enter username");
        return;
    }
    return `${username} just logged in`
}
console.log(loginUser("Saqib"));

function loginUser2(username ="sam"){ //default value
    if(!username){ // it will never execute as default value is decleared  
        console.log("Enter username");
        return;
    }
    return `${username} just logged in`
}
console.log(loginUser2("Dar")); // this will override sam

function calculateCartPrice(...num1){// here it is not spread operator it is rest operator returns all elements not only one array format 
    return num1;
}
console.log(calculateCartPrice(1,2,3,4,5));


// const user={
//     name:"Saqib",
//     add:"Kashmir"
// }

function handleObject(obj){
    console.log(`Username is ${obj.name} and address is ${obj.add}`);
}
// handleObject(user);
handleObject({
    name:"Dar",
    add:"Kasheer"
}) // we can pass direct object like this don't need to create seperate


const arr=[100,200,300,400];

function printSecond(getEle){
    return getEle[3];
}
console.log(printSecond(arr))

*/




/*
***********Scope************
if(true){
    // let a=10;
    // const b=20;
    var c=40;
}
// console.log(a);
// console.log(b);
// console.log(c);

console me scope alag hai aur node me alag hai jo
hum local machine par run krte hai
*/

/*

function one(){
    const username="Saqib"

    function two(){
        const website ="Youtube"
        console.log(website);
    }
    console.log(username);
    two()
}
one()

*/


/*

***************Hoisting**************
// Here it will not give error even declearing before the function
console.log(add(5));
function add(num){
    return num+1;
}

// Here it will give error because function is now stored in a variable (hoisting)
const add = function(num){
    return num+2;
}

*/

/*

***************This function****************

const user={
    username:"Saqib",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to the Site`);
    }
}
// user.welcomeMessage();
// user.username="dar";
// user.welcomeMessage();
console.log(this); // here it will be empty because of nodejs and in browser it will print all the methods inside this

function any(){
    console.log(this);// in function it will print all inside same as window approx.
}
any();
*/


/* 
**************Arrow Function*************
*/
const add=()=>{

}