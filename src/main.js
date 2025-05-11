import './sass/main.scss';

import guitarAcoustic from './assets/images/guitar_acoustic.jpg';
import guitarClassic from './assets/images/guitar_classic.jpg';
import guitarElectric from './assets/images/guitar_electric.jpg';
import guitarBass from './assets/images/guitar_bass.jpg';
import guitarUkulele from './assets/images/guitar_ukulele.jpg';
import guitarBonfire from './assets/images/guitar_bonfire.jpg';
import trumpet from './assets/images/trumpet.jpg';

const question = document.querySelector('#question');
const btnArea = document.querySelector('#button-area');
const verdictName = document.querySelector('#verdict-name');
const verdictImage = document.querySelector('#verdict-image');

const verdict = (guitarType, guitarImage) => {
	question.innerHTML = '';
	btnArea.innerHTML = ``;
	verdictName.innerHTML = `${guitarType}!`;
	verdictImage.innerHTML = `<img src="${guitarImage}" alt="${guitarType}">`;
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
	${addButton('Tak', "verdict('Gitara klasyczna', guitarClassic)")} 
	${addButton('Nie', 'fQuestion4()')}`;
}

function fQuestion3() {
	question.innerHTML = 'Jaki rodzaj muzyki najbardziej chcesz grać?';
	btnArea.innerHTML = `
	${addButton('Muzyka klasyczna / Flamenco', "verdict('Gitara klasyczna', guitarClassic)")} 
	${addButton('Rock / Metal / Punk', "verdict('Gitara elektryczna', guitarElectric)")}
	${addButton('Jazz / Blues / Funk', 'fQuestion5()')}
	${addButton('Pop / Folk / Indie', 'fQuestion6()')}
	${addButton('Reggae / Hawajska / Luźna', "verdict('Ukulele', guitarUkulele)")}`;
}

function fQuestion4() {
	question.innerHTML = 'Czy zależy Ci na prostym i małym instrumencie?';
	btnArea.innerHTML = `
	${addButton('Tak', "verdict('Ukulele', guitarUkulele)")} 
	${addButton('Nie', 'fQuestion12()')}`;
}

function fQuestion5() {
	question.innerHTML = 'Czy planujesz grać solówki lub improwizacje?';
	btnArea.innerHTML = `
	${addButton('Tak', "verdict('Gitara elektryczna', guitarElectric)")} 
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
	${addButton('Tak', "verdict('Gitara akustyczna lub ukulele', guitarBonfire)")} 
	${addButton('Nie', "verdict('Gitara akustyczna', guitarAcoustic)")}`;
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
	${addButton('Lider', "verdict('Gitara elektryczna', guitarElectric)")} 
	${addButton('Baza rytmiczna', "verdict('Gitara basowa', guitarBass)")}`;
}

function fQuestion10() {
	question.innerHTML = 'Czy chcesz grać muzykę instrumentalną?';
	btnArea.innerHTML = `
	${addButton('Tak', 'fQuestion11()')} 
	${addButton('Nie', 'fQuestion15()')}`;
}

function fQuestion11() {
	question.innerHTML = 'Czy interesuje Cię styl gry fingerstyle?';
	btnArea.innerHTML = `
	${addButton('Tak', "verdict('Gitara klasyczna lub akustyczna', guitarClassic)")} 
	${addButton('Nie', "verdict('Gitara elektryczna lub basowa', guitarBass)")}`;
}

function fQuestion12() {
	question.innerHTML = 'Czy chcesz używać efektów dźwiękowych i wzmacniacza?';
	btnArea.innerHTML = `
	${addButton('Tak', "verdict('Gitara elektryczna', guitarElectric)")} 
	${addButton('Nie', 'fQuestion13()')}`;
}

function fQuestion13() {
	question.innerHTML = 'Czy zależy Ci na uniwersalnym brzmieniu, które pasuje do wielu stylów?';
	btnArea.innerHTML = `
	${addButton('Tak', "verdict('Gitara akustyczna', guitarAcoustic)")} 
	${addButton('Nie', 'fQuestion14()')}`;
}

function fQuestion14() {
	question.innerHTML = 'Czy zależy Ci na głębokim, niskim brzmieniu?';
	btnArea.innerHTML = `
	${addButton('Tak', "verdict('Gitara basowa', guitarBass)")} 
	${addButton('Nie', "verdict('Gitara elektryczna', guitarElectric)")}`;
}

function fQuestion15() {
	question.innerHTML = 'Czy w ogóle chcesz grać na gitarze?';
	btnArea.innerHTML = `
	${addButton('Tak', "verdict('Gitara akustyczna', guitarAcoustic)")} 
	${addButton('Nie', "verdict('Trąbka', trumpet)")}`;
}

const fQuestions = {
	fQuestion1,
	fQuestion2,
	fQuestion3,
	fQuestion4,
	fQuestion5,
	fQuestion6,
	fQuestion7,
	fQuestion8,
	fQuestion9,
	fQuestion10,
	fQuestion11,
	fQuestion12,
	fQuestion13,
	fQuestion14,
	fQuestion15,
};

const globals = {
	verdict,
	guitarClassic,
	guitarAcoustic,
	guitarElectric,
	guitarBass,
	guitarUkulele,
	guitarBonfire,
	trumpet,
};

Object.assign(window, fQuestions);
Object.assign(window, globals);
