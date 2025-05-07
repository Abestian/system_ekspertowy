import './sass/main.scss';

const sliderBox = document.querySelector('.hero__slider-box');
const slider = document.querySelector('.hero__slider');
const question = document.querySelector('.question');
const btnArea = document.querySelector('.btnArea');

const carouselWidth = 600;

let index = 0;

const changeItem = () => {
	if (index < 2) {
		index++;
	}
	sliderBox.style.transform = `translateX(${-index * carouselWidth}px)`;
};

function fQuestion0() {
	question.innerHTML = "Leeet's go, first question";
	btnArea.innerHTML =
		"<button onclick = 'fQuestion1();'> Yes </button> <button onclick = 'fQuestion2();'> No </button>";
}

window.fQuestion0 = fQuestion0;
window.changeItem = changeItem;

// fQuestion0()

// console.log('hello');

// slider.addEventListener('click', changeItem);
