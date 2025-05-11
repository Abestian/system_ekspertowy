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

function question1() {
	question.innerHTML = 'Jaki jest Twój poziom doświadczenia z grą na gitarze?';
	btnArea.innerHTML = `
	${addButton('Początkujący', 'question2()')}
	${addButton('Średnio zaawansowany / Zaawansowany', 'question3()')}`;
}

function question2() {
	question.innerHTML = 'Czy zależy Ci na łatwym starcie i delikatnych strunach?';
	btnArea.innerHTML = `
	${addButton('Tak', "verdict('Gitara klasyczna', guitarClassic)")} 
	${addButton('Nie', 'question4()')}`;
}

function question3() {
	question.innerHTML = 'Jaki rodzaj muzyki najbardziej chcesz grać?';
	btnArea.innerHTML = `
	${addButton('Muzyka klasyczna / Flamenco', "verdict('Gitara klasyczna', guitarClassic)")} 
	${addButton('Rock / Metal / Punk', "verdict('Gitara elektryczna', guitarElectric)")}
	${addButton('Jazz / Blues / Funk', 'question5()')}
	${addButton('Pop / Folk / Indie', 'question6()')}
	${addButton('Reggae / Hawajska / Luźna', "verdict('Ukulele', guitarUkulele)")}`;
}

function question4() {
	question.innerHTML = 'Czy zależy Ci na prostym i małym instrumencie?';
	btnArea.innerHTML = `
	${addButton('Tak', "verdict('Ukulele', guitarUkulele)")} 
	${addButton('Nie', 'question12()')}`;
}

function question5() {
	question.innerHTML = 'Czy planujesz grać solówki lub improwizacje?';
	btnArea.innerHTML = `
	${addButton('Tak', "verdict('Gitara elektryczna', guitarElectric)")} 
	${addButton('Nie', "verdict('Gitara basowa', 'guitar_bass.jpg')")}`;
}

function question6() {
	question.innerHTML = 'Czy chcesz jednocześnie grać i śpiewać?';
	btnArea.innerHTML = `
	${addButton('Tak', 'question7()')} 
	${addButton('Nie', 'question8()')}`;
}

function question7() {
	question.innerHTML = 'Czy bardzo Ci zależy, aby instrument był łatwy do zabrania w podróż lub na ognisko?';
	btnArea.innerHTML = `
	${addButton('Tak', "verdict('Gitara akustyczna lub ukulele', guitarBonfire)")} 
	${addButton('Nie', "verdict('Gitara akustyczna', guitarAcoustic)")}`;
}

function question8() {
	question.innerHTML = 'Czy planujesz grać z zespołem lub występować publicznie?';
	btnArea.innerHTML = `
	${addButton('Tak', 'question9()')} 
	${addButton('Nie', 'question10()')}`;
}

function question9() {
	question.innerHTML = 'Czy wolisz być "liderem dźwięku" czy "bazą rytmiczną"?';
	btnArea.innerHTML = `
	${addButton('Lider', "verdict('Gitara elektryczna', guitarElectric)")} 
	${addButton('Baza rytmiczna', "verdict('Gitara basowa', guitarBass)")}`;
}

function question10() {
	question.innerHTML = 'Czy chcesz grać muzykę instrumentalną?';
	btnArea.innerHTML = `
	${addButton('Tak', 'question11()')} 
	${addButton('Nie', 'question15()')}`;
}

function question11() {
	question.innerHTML = 'Czy interesuje Cię styl gry fingerstyle?';
	btnArea.innerHTML = `
	${addButton('Tak', "verdict('Gitara klasyczna lub akustyczna', guitarClassic)")} 
	${addButton('Nie', "verdict('Gitara elektryczna lub basowa', guitarBass)")}`;
}

function question12() {
	question.innerHTML = 'Czy chcesz używać efektów dźwiękowych i wzmacniacza?';
	btnArea.innerHTML = `
	${addButton('Tak', "verdict('Gitara elektryczna', guitarElectric)")} 
	${addButton('Nie', 'question13()')}`;
}

function question13() {
	question.innerHTML = 'Czy zależy Ci na uniwersalnym brzmieniu, które pasuje do wielu stylów?';
	btnArea.innerHTML = `
	${addButton('Tak', "verdict('Gitara akustyczna', guitarAcoustic)")} 
	${addButton('Nie', 'question14()')}`;
}

function question14() {
	question.innerHTML = 'Czy zależy Ci na głębokim, niskim brzmieniu?';
	btnArea.innerHTML = `
	${addButton('Tak', "verdict('Gitara basowa', guitarBass)")} 
	${addButton('Nie', "verdict('Gitara elektryczna', guitarElectric)")}`;
}

function question15() {
	question.innerHTML = 'Czy w ogóle chcesz grać na gitarze?';
	btnArea.innerHTML = `
	${addButton('Tak', "verdict('Gitara akustyczna', guitarAcoustic)")} 
	${addButton('Nie', "verdict('Trąbka', trumpet)")}`;
}

const questions = {
	question1,
	question2,
	question3,
	question4,
	question5,
	question6,
	question7,
	question8,
	question9,
	question10,
	question11,
	question12,
	question13,
	question14,
	question15,
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

Object.assign(window, questions);
Object.assign(window, globals);
