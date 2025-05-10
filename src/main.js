import './sass/main.scss';

const question = document.querySelector('#question');
const btnArea = document.querySelector('#button-area');

const addButton = (buttonAnswer, followUpQuestion) => {
	return `<button class="expert-system__button" onclick = "${followUpQuestion}()">${buttonAnswer}</button>`;
};

function fQuestion0() {
	question.innerHTML = "Leeet's go, first question";
	btnArea.innerHTML = `${addButton('Yes', 'fQuestion1')} ${addButton('No', 'fQuestion1')}`;
}

function fQuestion1() {
	return console.log('ok');
}

window.fQuestion0 = fQuestion0;
window.fQuestion1 = fQuestion1;

/* unused parts of code */

/*
const carouselWidth = 600;

let index = 0;

const changeItem = () => {
	if (index < 2) {
		index++;
	}
	sliderBox.style.transform = `translateX(${-index * carouselWidth}px)`;
}; 

window.changeItem = changeItem;
*/
