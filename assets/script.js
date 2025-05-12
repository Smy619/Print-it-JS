const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentSlide = 0;

// Sélectionner les éléments du DOM
const bannerImage = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const dotsContainer = document.querySelector(".dots");
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const totalSlides = slides.length;
const dotElements = [];
const dotClass = "dot";
const activeDotClass = "dot_selected";

// créer chaque solide
const createDots = () => {
	for (let i = 0; i < totalSlides; i++) {
		const dotElement = document.createElement("div");
		dotElement.classList.add(dotClass);
		dotElement.setAttribute("data-index", i);
		dotsContainer.appendChild(dotElement);
		dotElements.push(dotElement);

		// ajouter un événement de clic à chaque point
    dotElement.addEventListener("click", (event) => {
			const index = parseInt(event.target.getAttribute("data-index"));
			currentSlide = index;
			updateSlide(currentSlide);
		});
}
};
// mettre à jour l'image et le texte
const updateSlide = (index) => {
	bannerImage.src = `./assets/images/slideshow/${slides[index].image}`;
	bannerText.innerHTML = slides[index].tagLine;
	dotElements.forEach((dot, i) => {
		dot.classList.toggle(activeDotClass, i === index);
	});
};

// changer de diapositive
const nextSlide = () => {
	currentSlide = (currentSlide + 1) % totalSlides;
	updateSlide(currentSlide);
};
const prevSlide = () => {
	currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
	updateSlide(currentSlide);
};

// initialiser le diaporama
const init = () => {
  createDots();
  updateSlide(currentSlide);
};

// ajouter des événements aux flèches
leftArrow.addEventListener("click", prevSlide);
rightArrow.addEventListener("click", nextSlide);

init();
