// 1. Ways to Write with JavaScript
document.write("<br>This is a Document</br>");

document.getElementsByTagName("h1")[0].style.backgroundColor = "red";
// 2.Javascript Console API
console.log("Hello World Boy");
alert("Hello Sir Kya Haal Hai");
console.warn("This is a Special Type of Warning For You Boy");
console.error("This is big error");

//JavaScript Variable
var number1 = 23;
var number2 = 36;
console.log(number1 + number2);

//Data Types
var num1 = 43;
var str1 = "This is String";
var str2 = "This is 2 String";
console.log(str2);
//Objects
var marks = {
  talha: 23,
  Nouman: 42,
  Daniyal: 21,
  Rafay: 65,
};
console.log(marks);

//Booleans
var a = true;
var b = false;
console.log(a);

var und;
console.log(und);

/*At High level Javascript,there are two Data Types
 1-Primitive:Undefined,Null,number,string,boolean,symbol
 2-Reference Data Type:                                 */

var arr = [1, 2, 3, 4, "Cute"];
console.log(arr);

var a = 24;
var b = 24;

console.log("The Value of a + b is:", a + b);
console.log("The Value of a - b is:", a - b);

//Functions

function avg(a, b) {
  return a + b;
}

c1 = avg(2, 3);
c2 = avg(6, 7);

console.log("The Average of First Numbers is:", c1);
console.log("The Average of Second Numbers is:", c2);

function cgpa(c, d) {
  return (c + d) / 2.0;
}
g = cgpa(2, 4);
console.log("The CGPA of the Student is: ", g);

//Conditionals in JavaScript

var age = 23;

if (age == 14) {
  console.log("You are allowed and are welcomed");
} else if (age == 23) {
  console.log("You are More then Welcome");
} else {
  console.log("No Entry");
}

//For Loop
var arr = [1, 2, 3, 4, 5, 6, 7, 9];
// console.log(arr);
// for(var i=0 ; i<arr.length ; i++)
// {
//     if(i==2)
//     {
//         break;
//     }
//     console.log(arr[i]);
//  }

/*arr .forEach(function(element)
  { 
    console.log(element);
})

/*let j=0;
while(j<arr.length)
{
    console.log(arr[j]);
    j++;
}*/

let myarr = ["Fan", "CRICKET", "LIFE", 23, null, true];

console.log("The Length of the array is:", myarr.length);

console.log("The Elements in My Array is:", myarr);

myarr.pop();

console.log("The Elements in My Array after poping is:", myarr);

myarr.push("Rafay");
console.log("The Elements in My Array after Pushing is:", myarr);

myarr.shift();
console.log("The Element in My Array After Shifting is:", myarr);

myarr.unshift("Football");
console.log("The Element in My Array After Un-Shifting is:", myarr);

f = [1, 5, 6, 9, 23, 56, 11, 3];
console.log("F Array Before Sorting:", f);
f.sort();
console.log("F Array After Sorting:", f);

//String Method

let MyString = "This is a String By Rafay";

console.log("The Length of My String is:", MyString.length);

console.log("The Info in the String is:", MyString);

console.log("The Word By is on index:", MyString.indexOf("By"));

console.log(MyString.slice(0, 4));

d = MyString.replace("Rafay", "Sighat");

console.log("The String after Replacing is:", d);

//Time
let time = new Date();
console.log(time);
console.log(time.getSeconds());
console.log(time.getFullYear());

//JavaScript DOM Manipulation

document.getElementById("click").style.border = "2px solid blue";

let elem = document.getElementsByClassName("text");
//console.log(elem);

let elemClass = document.getElementsByClassName("text");
//console.log(elemClass);
elemClass[0].style.backgroundColor = "Yellow";

//console.log(elemClass[0].innerHTML);
//console.log(elemClass[0].innerText);

// tn= document.getElementsByTagName('div')
// console.log(tn);

// createdElement= document.createElement('p');
// createdElement.innertext= "This is a Created Para";

// tn[0].a(createdElement);

sel = document.querySelectorAll(".text");
console.log(sel);

//Events in JavaScript

function Clicked() {
  console.log("The Button was Clicked");
}

window.onload = function () {
  console.log("The Document is here");
};

// text.addEventListener('mouseover',function()
// {
//     console.log("Mouse on Computer");
// })

var ar = [1, 2, 3, "Stringbd", 5, 6];

console.log(ar);

for (var i = 0; i < ar.length; i++) {
  console.log(ar[i]);
}

// container.addEventListener('mouseover',function()
// {

//     console.log("This is mouse");
// })

//Arrow Function

subs = (a, b) => {
  console.log("The Subtraction of both will be:", a - b);
  return a - b;
};

//Set Time Out and Set Interval

const LogDone = () => {
  document.querySelector(".FirstContainer").innerHTML = `Set Time Interval`;
  console.log("Logged and Now No Need to Do");
};

Log2=()=>
{
    document.querySelector(".FirstContainer").innerHTML = `This is my WebPage`;
  console.log("This is My WebPage");
};

abc = setTimeout(() => {
  LogDone();
  console.log("set time out called");
}, 4000);
// abc = setInterval(LogDone, 1000);

//Clear Interval and Clear Timeout with cleartimeout(abc) and clearinterval(abc)

abc=setTimeout(() => {
  
  Log2();

},8000);

//Local Storage

localStorage.setItem("Rafay",12);
localStorage;

//JSON

obj={name:"Rafay"};
jso=JSON.stringify(obj);
console.log(typeof jso);
console.log(jso);


// parsed=JSON.parse("This is a string which is being processed");

// console.log(parsed);

