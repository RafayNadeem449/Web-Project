"use.strict";
console.log("This is Console");
// var age=prompt("Enter Your Age:");

// if(age<18)
// {
//     console.log("You are UnderAge");
// }
// else if(age>18)
// {
//      console.log("You are More than 18 Eligible to Vote")
// }

// let arr=[2,3,4,5,6,7];

// arr.forEach(function (element) {


//     console.log(element);

// })

// var names="Rafay";
// var thanks="Thank You";

// function happy(names,thanks)
// {
//      console.log(`Happy Birthday ${names}. Wishing you the best ${thanks}.`);
// }

// happy(names,thanks);

// let a=confirm("Do you want to Destroy Your Computer: ");
// console.log(a);

// a=window.innerHeight;
// console.log(a);

//  let a=document;

//  a=document.links;
//  console.log(a);

// let a="Harry";

// let b=prompt("Enter a Name to Compare:");

// if(b==a)
// {
//     console.log("It is Found");
// }
// else
// {
//     console.log("Not Found");
// }

// let a = document.links;

// let myText = 'harry';

// Array.from(a).forEach(function (element) {

//     if (String(element).includes(myText)) {

//         console.log(element);

//     }

// });

// let element=document.getElementById("first");

// element=element.className;

// console.log(element);

// element=document.getElementById("first");

// element.innerHTML="<p>This is a Child</p>";

// let el=document.querySelector("#first");

// console.log(el);

// el=document.getElementsByTagName('div');

// Array.from(el).forEach(element=>
// {
//     console.log(element);
//     element.style.color="blue";
// })

//console.log(element);

// let cont=document.getElementsByClassName(".dummy");
// cont=cont.ClassName;
// console.log(cont);
let elem = document.createElement("li");

elem.className = "ClassN";
elem.id = "Created Id";
elem.setAttribute("title","This is Title");

elem.innerText="Hello This is Rafay";

//elem.appendChild("p.dummy");

// p.appendChild(elem);

// console.log(p);



el=document.querySelector("ul.this");

//Error Code
// el.appendChild(el);

// console.log(el);

el.innerText="THis is RAFAY";

console.log(el);

window.onload = (event) => {
    console.log('page is fully loaded');
  };

console.log(elem);

//-------------------------------------------

// let naam="I am Rafay";

// let ch=document.getElementById("this");

// ch.replaceChild(naam,document.getElementById("cont"));

//-----------------------------------------------

// let op="This is Rafay";

// op=document.getElementsByClassName("Head");

// op.document.querySelector="This is Rafay";

// console.log(op);

// document.getElementsByClassName("Head").addEventListener("click",function(e){

//       let variable;

//       console.log("You Have Clicked The Heading");


let txt1="Rafay";
let txt2="Nadeem";

txt3=txt1+" "+txt2;

console.log(txt3);

let a=5;

a%=2;

console.log(a);

// let text = "Hello David";

// console.log(text);

let text = "Please visit Microsoft!";
console.log(text.indexOf("Microsoft"));

console.log(text.search("Microsoft"));

let t="This is Water";

let tst=text.concat(" ",t);
console.log(tst);

let newText = text.replace("Microsoft", "W3Schools");

console.log(newText);

const car=["Rafay","Talha","Sibghat"];

const cars=car[2];

console.log(cars);


const fruits=["Bannana","Orange","Apple","Strawberry"];

const fruit=fruits.reverse();

console.log(fruit);



const num=0;
function myfunc()
{
  console.log(num>18);
}
const arr=[45,11,14,67,21,23];

const ars=arr.filter(myfunc);

console.log(ars);

console.log(arr);

const d=Date();

console.log(d);
const l = new Date(2012, 11, 24);
console.log(l);

console.log("This is Date() Function");

console.log("---------------------");
const b= new Date();

b.getUTCFullYear();

console.log(b);

let p=Math.sqrt(16);

console.log(p);

const r=Math.floor(Math.random()*100);

console.log(r);

const age=prompt("Enter Your Age:");

if(age>18)
{
  console.log("You are",age,"and Eligible");
}

else if(age<18)
{
  console.log("You are not ELigible Sorry!");
}

const gadi=["Rav4","AUDI","MERCEDEZ","TOYOTA"];

for(var i=0;i<gadi.length;i++)
{
  console.log(gadi[i]);
}



console.log("Keep Going Hard")


const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

console.log(letters);

// const op=["Rafay","Rayan","Talha"];

// console.log(op);

// const opx=op.Map;

// console.log(opx);


const fruts=new Map();

fruts.set("Rafay",200);
fruts.set("Ali",300);
fruts.set("Talha",500);

fruts.delete("Ali");

console.log(fruts.has("Talha"));
console.log(fruts);

console.log(fruts);

console.log(fruts.size);

const es=typeof "Rafay";

console.log(es);

console.log("John".constructor);

const v=Date().toString();

console.log(v);


hello =()=>{return "Hello World "};

console.log(hello());


let tft = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}'; 

console.log(tft);


// "employees";[
// {"firstname":"Rafay","secondname":"Nadeem"},
// {"firstname":"Waqas","secondname":"Chaudhary"},
// ]
// console.log(employees);

const abc=Math.max(1,2,113,6,78,96,12);

console.log(abc);


function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

function myFunction() {
  window.history.back();
}

document.getElementById("para").innerHTML="<p>WE are Muslims</p>";

//This is a Class In which we are implementing
class Student
{
   

  constructor(name,year)
  {
    this.name=name;
    this.year=year;
  }
   

}

let were=new Student("Rafay",2018);

console.log(were);

//An Anonymous Function 
const x=function(a,b){return a*b;}

console.log(x(2,3));

//An Arrow Function
const Power=(x,y)=>{return x*y;}

console.log(Power(1,13));

//A Self Invoking Function
(function() {
  console.log("This is a Self Invoking Function");
})();

function Change() 
{
 document.getElementById("Change").innerHTML="<p>This is a Paragraph and We are Converting it from Urdu/Hindi to English</p>";
}

// let q=document.cookie="username:Rafay Nadeem";

// console.log(q);

// let obj="Harry";

// let o=JSON.parse(obj);

// console.log(o);

// let pox = "[This is Rafay,"
//   "This is Talha]";

// const obj = JSON.parse(pox); 

// console.log(obj);


class care
{
  constructor(brand)
  {
    this.carname=brand;
  }
  carname=12;
}

let myCar=console.log(new care("Ford"));


const myObj= {firstname:"Rafay",secondname:"Nadeem"};

console.log(myObj.firstname);

function naam()
{
  console.log("This is America");

}

setTimeout(naam,2000);



let c=new Promise((resolve,reject) =>
{
  let a=1+1;

  if(a==2)
  {
    resolve("You are Successfull");
  }
  else
  {
    reject("Try Again")
  }


})

console.log(c);

async function myFunction() {
  return "Hello";
}

console.log(myFunction());


async function myDisplay() {
  let myPromise = new Promise(function(resolve) {
    setTimeout(function() {resolve("I love You !!");}, 3000);
  });
  document.getElementById("para").innerHTML = await myPromise;
}

myDisplay();
