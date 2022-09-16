// console.log(JSON.parse(localStorage.getItem("sport")))
let sport = JSON.parse(localStorage.getItem("sport"));

const header = document.querySelector("header");

const h1 = document.createElement("h1");
h1.textContent = sport.strSport;
header.append(h1);
h1.style.textAlign = "center";

const h3 = document.createElement("h3");
h3.textContent = "Click below to return home";
h3.style.padding = "20px";

const anchor = document.createElement("a");
anchor.setAttribute("href", "index.html");
anchor.innerHTML = `<h3>Home<h3>`;
anchor.style.padding = "20px";
header.append(anchor);

const description = document.querySelector(".description");

const img = document.createElement("img");
img.setAttribute("class", "image");
img.src = sport.strSportThumb;
img.alt = sport.strSport;

const sportFormat = document.createElement("p");
sportFormat.innerHTML = `<h2>Format: ${sport.strFormat}<h2>`;

const paragraph = document.createElement("p");
paragraph.innerHTML = `<h4>${sport.strSportDescription}<h4>`;

const h2 = document.createElement("h2");
h2.textContent = "Description";
h2.style.padding = "10px";

description.append(img, sportFormat, h2, paragraph);
