alert("Hello");

function Ageindayz() {
  var BirthYear = prompt("What is Your Birth Year");
  var ageind = (2021 - BirthYear) * 365;

  var h1 = document.createElement("h1");
  var textanswer = document.createTextNode("Your'e Age in Days is:" + ageind);

  console.log(ageind);

  h1.setAttribute("id", "ageind");
  h1.appendChild(textanswer);
  document.getElementById("flexbox-result").appendChild(h1);
}

function Reset() {
  document.getElementById("flexbox-result").remove();
}

function CatGen() {
  var image = document.createElement("img");

  var div = document.getElementById("flex-cat");

  image.src = "https://http.cat/[status_code] ";

  div.appendChild(image);
}
