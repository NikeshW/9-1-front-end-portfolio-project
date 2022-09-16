const BASE_URL =
  "https://pursuit-9-1-full-stack-project.herokuapp.com/api/sports";

const header = document.querySelector("header");

const nav = document.createElement("nav");

const a = document.createElement("a");
nav.append(a);

a.setAttribute("href", "./about.html");
a.innerHTML = `<h3>About<h3>`;

header.append(nav);

const error = document.querySelector(".error");

const incorrectName = document.querySelector(".incorrect-name");
console.log(incorrectName);

const form = document.querySelector("form");

const sportName = document.querySelector("#sport-name");

const names = document.querySelector(".name");

const article = document.createElement("article");
const h2 = document.createElement("h2");
const image = document.createElement("img");
const anchor = document.createElement("a");
const p = document.createElement("p");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let userinput = event.target[0].value;

  if (userinput === "") {
    error.classList.remove("hidden");
    error.innerText = "Must input a sport name";
  } else {
    error.classList.add("hidden");
  }

  fetch(`${BASE_URL}`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);

      for (let sport of res) {
        if (userinput.toLowerCase() === sport.strSport.toLowerCase()) {
          const choosenSport = sport;
          h2.innerText = sport.strSport;

          image.src = sport.strSportIconGreen;
          anchor.setAttribute("href", "./target.html");

          anchor.textContent = sport.strSport;
          p.textContent = "Click link below for info";

          article.append(h2, image, p, anchor);
          names.append(article);

          localStorage.setItem("sport", JSON.stringify(choosenSport));
        }
      }
    })

    .catch((err) => {
      console.log(err);
    });
});
