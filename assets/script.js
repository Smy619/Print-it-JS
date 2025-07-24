const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let index = 0;

const image = document.querySelector(".banner-img");
const text = document.querySelector("#banner p");

//ajouter des event listeners sur les flèches
const flecheLeft = document.querySelector(".arrow_left");
flecheLeft.addEventListener("click", () => {
  if (index === 0) {
    index = slides.length - 1; //aller à la dernière image
  } else {
    index--;
  }
  modifierBtnclic(); // mettre à jour image, texte et bullet
});

const flecheRight = document.querySelector(".arrow_right");
flecheRight.addEventListener("click", () => {
  if (index === slides.length - 1) {
    index = 0; // revenir au début
  } else {
    index++;
  }
  modifierBtnclic();
});

//créer des bullet points au slider
let bulletPoints = document.querySelector(".dots");
console.log("bulletPoints =", bulletPoints);

for (let i = 0; i < slides.length; i++) {
  let dot = document.createElement("div"); // créer un élément div
  dot.classList.add("dot"); // ajouter une class dot à div
  if (i === 0) {
    dot.classList.add("dot_selected"); // si i =0; on ajoute une nouvelle class dot_selected
  }

	// ajouter un événement (au clic sur un point)
	dot.addEventListener("click",() => { 
		index = i; //metter à jour l'index en fonction du point cliqué
		modifierBtnclic() //appeler la fonction 
	})

  bulletPoints.appendChild(dot);
}

//modifier le slide au clic sur le bouton
function modifierBtnclic() {
  //mise à jour de l'image et du texte en fonction de l'index actuel
  image.src = "./assets/images/slideshow/" + slides[index].image;
  text.innerHTML = slides[index].tagLine;

  // mise à jour des bullet points : un seul point actif
  let dots = document.querySelectorAll(".dot");
  for (let i = 0; i < dots.length; i++) {
    if (i === index) {
      dots[i].classList.add("dot_selected");
    } else {
      dots[i].classList.remove("dot_selected");
    }
  }
}
