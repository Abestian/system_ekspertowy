import './sass/main.scss';

const question = document.querySelector('#question');
const btnArea = document.querySelector('#button-area');
const verdictName = document.querySelector('#verdict-name');
const verdictImage = document.querySelector('#verdict-image');

const verdict = (guitarType, guitarImage) => {
	question.innerHTML = '';
	btnArea.innerHTML = ``;
	verdictName.innerHTML = `${guitarType}!`;
	verdictImage.innerHTML = `<img src="./src/images/${guitarImage}" alt="${guitarType}">`;
};

const addButton = (buttonAnswer, callFunction) => {
	return `<button class="expert-system__button" onclick = "${callFunction}">${buttonAnswer}</button>`;
};

function fQuestion1() {
	question.innerHTML = 'Jaki jest Twój poziom doświadczenia z grą na gitarze?';
	btnArea.innerHTML = `
	${addButton('Początkujący', 'fQuestion2()')}
	${addButton('Średnio zaawansowany / Zaawansowany', 'fQuestion3()')}`;
}

function fQuestion2() {
	question.innerHTML = 'Czy zależy Ci na łatwym starcie i delikatnych strunach?';
	btnArea.innerHTML = `
	${addButton('Tak', "verdict('Gitara klasyczna', 'guitar_classic.jpg')")} 
	${addButton('Nie', 'fQuestion4()')}`;
}

function fQuestion3() {
	question.innerHTML = 'Jaki rodzaj muzyki najbardziej chcesz grać?';
	btnArea.innerHTML = `
	${addButton('Muzyka klasyczna / Flamenco', "verdict('Gitara klasyczna', 'guitar_classic.jpg')")} 
	${addButton('Rock / Metal / Punk', "verdict('Gitara elektryczna', 'guitar_electric.jpg')")}
	${addButton('Jazz / Blues / Funk', 'fQuestion5()')}
	${addButton('Pop / Folk / Indie', 'fQuestion6()')}
	${addButton('Reggae / Hawajska / Luźna', "verdict('Ukulele', 'guitar_ukulele.jpg')")}`;
}

function fQuestion4() {
	question.innerHTML = 'Czy zależy Ci na prostym i małym instrumencie?';
	btnArea.innerHTML = `
	${addButton('Tak', "verdict('Ukulele', 'guitar_ukulele.jpg')")} 
	${addButton('Nie', 'fQuestion6()')}`;
}

function fQuestion5() {
	question.innerHTML = 'Czy planujesz grać solówki lub improwizacje?';
	btnArea.innerHTML = `
	${addButton('Tak', "verdict('Gitara elektryczna', 'guitar_electric.jpg')")} 
	${addButton('Nie', "verdict('Gitara basowa', 'guitar_bass.jpg')")}`;
}

function fQuestion6() {
	question.innerHTML = 'Czy chcesz jednocześnie grać i śpiewać?';
	btnArea.innerHTML = `
	${addButton('Tak', 'fQuestion7()')} 
	${addButton('Nie', 'fQuestion8()')}`;
}

function fQuestion7() {
	question.innerHTML = 'Czy bardzo Ci zależy, aby instrument był łatwy do zabrania w podróż lub na ognisko?';
	btnArea.innerHTML = `
	${addButton('Tak', "verdict('Gitara akustyczna lub ukulele', 'guitar_bonfire.jpg')")} 
	${addButton('Nie', "verdict('Gitara akustyczna', 'guitar_acoustic.jpg')")}`;
}

function fQuestion8() {
	question.innerHTML = 'Czy planujesz grać z zespołem lub występować publicznie?';
	btnArea.innerHTML = `
	${addButton('Tak', 'fQuestion9()')} 
	${addButton('Nie', 'fQuestion10()')}`;
}

function fQuestion9() {
	question.innerHTML = 'Czy wolisz być "liderem dźwięku" czy "bazą rytmiczną"?';
	btnArea.innerHTML = `
	${addButton('Lider', "verdict('Gitara elektryczna', 'guitar_electric.jpg')")} 
	${addButton('Baza rytmiczna', "verdict('Gitara basowa', 'guitar_bass.jpg')")}`;
}

function fQuestion10() {
	question.innerHTML = 'Czy chcesz grać muzykę instrumentalną?';
	btnArea.innerHTML = `
	${addButton('Tak', 'fQuestion11()')} 
	${addButton('Nie', 'fQuestion6()')}`;
}

function fQuestion11() {
	question.innerHTML = 'Czy interesuje Cię fingerstyle lub muzyka klasyczna?';
	btnArea.innerHTML = `
	${addButton('Tak', "verdict('Gitara klasyczna lub akustyczna', 'guitar_classic.jpg')")} 
	${addButton('Nie', "verdict('Gitara elektryczna lub basowa', 'guitar_bass.jpg')")}`;
}

function fQuestion12() {
	question.innerHTML = 'Czy zależy Ci na cichym instrumencie do ćwiczeń w mieszkaniu?';
	btnArea.innerHTML = `
	${addButton('Tak', "verdict('Gitara klasyczna lub ukulele', 'guitar_ukulele.jpg')")} 
	${addButton('Nie', 'fQuestion13()')}`;
}

function fQuestion13() {
	question.innerHTML = 'Czy chcesz używać efektów dźwiękowych i wzmacniacza?';
	btnArea.innerHTML = `
	${addButton('Tak', "verdict('Gitara elektryczna', 'guitar_electric.jpg')")} 
	${addButton('Nie', 'fQuestion14()')}`;
}

function fQuestion14() {
	question.innerHTML = 'Czy zależy Ci na głębokim, niskim brzmieniu?';
	btnArea.innerHTML = `
	${addButton('Tak', "verdict('Gitara basowa', 'guitar_bass.jpg')")} 
	${addButton('Nie', 'fQuestion15()')}`;
}

function fQuestion15() {
	question.innerHTML = 'Czy zależy Ci na uniwersalnym brzmieniu, które pasuje do wielu stylów?';
	btnArea.innerHTML = `
	${addButton('Tak', "verdict('Gitara akustyczna', 'guitar_acoustic.jpg')")} 
	${addButton('Nie', 'fQuestion1()')}`;
}

window.fQuestion1 = fQuestion1;
window.fQuestion2 = fQuestion2;
window.fQuestion3 = fQuestion3;
window.fQuestion4 = fQuestion4;
window.fQuestion5 = fQuestion5;
window.fQuestion6 = fQuestion6;
window.fQuestion7 = fQuestion7;
window.fQuestion8 = fQuestion8;
window.fQuestion9 = fQuestion9;
window.fQuestion10 = fQuestion10;
window.fQuestion11 = fQuestion11;
window.fQuestion12 = fQuestion12;
window.fQuestion13 = fQuestion13;
window.fQuestion14 = fQuestion14;
window.fQuestion15 = fQuestion15;

window.verdict = verdict;

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
