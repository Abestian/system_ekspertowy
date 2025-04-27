import './sass/main.scss';

const sliderBox = document.querySelector('.hero__slider-box');
const slider = document.querySelector('.hero__slider');

const carouselWidth = 600;

let index = 0;

const changeItem = () => {
	if (index < 2) {
		index++;
	}
	sliderBox.style.transform = `translateX(${-index * carouselWidth}px)`;
};

slider.addEventListener('click', changeItem);
