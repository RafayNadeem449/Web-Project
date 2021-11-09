console.log("Hello");

alert('Hello This Is JavaScript');

var a='Cricket';

console.log(a);

var num=12;

console.log(num);


var Nam=prompt("What is Your Name");

document.getElementById('Para').innerHTML=(Nam);

num++;

console.log(num);

console.log(num/2);

function fun()
{
    alert("This is a Big alert");

}

fun();

function greeting()
{
    var name= prompt("What is Your Name:");
    var result="Hello "+name;
    console.log(result);

}

greeting();


for(let i=0;i<10;i++)
{
    console.log(i);
}

let n=12;
console.log(n);
let naam={first:"Rafay", last:"Nadeem"};//Object
console.log(naam);

let f="fruit";

console.log("bannana\napple");

console.log(f.toUpperCase(f));

console.log(f.split(''));

let arr=["Rafay","Cricket","Software Engineering"];

arr=new Array("Rafay","Cricket","Software Engineering");

console.log(arr[2]);

console.log(arr);

console.log(arr.push("Nouman"));

console.log(arr.slice());

let numa=[1,44,33,22,13,4443,221];

console.log("The Array Before Sorting:",numa);

console.log("The Array After Sorting:",numa.sort());

window.onload=function()
{
 console.log("The Document is Loaded");

}

let arr1=["This","is","an","Array"];

console.log(arr1);

let Student={
    first:"Rafay",
    last:"Nadeem",
    age:12,
};


    console.log(Student);

    Student.first="Rayan";

    console.log(Student);

    studentinfo=function()
    {
        console.log("The Name of The Student is:",Student.first+' '+ Student.last,"\n","The Age is:",Student.age);
    }

    studentinfo();

age=19;

if(age<18)
{
    console.log("The Age is Less");
}
else if(age>18)
{
    console.log("The Age is Greater and You are Allowed")
}

switch(5)
{
    case 1:
        text="Weekend";
        break;
      
    case 2:
        text="Weekend";
        break;
        
        default:
            text="WeekDay";
            break;
}

console.log(text);

console.log(JSON.parse(Student));