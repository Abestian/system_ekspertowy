# Guitar Picker

![](./src/assets/images/guitar_acoustic.jpg)
_Pictures used from [Pixabay](https://pixabay.com/)_

_Guitar Picker_ is a simple expert system created as an academic assignment. The main feature of this system is to provide a helpful person to someone who wants to choose their next (or first) guitar.

Live project page available at [Link to Page](https://abestian.github.io/system_ekspertowy/)

**DISCLAIMER - I am in no way an expert in this issue, I only created it based on my own point of view after reading through some of the 'How to choose a first guitar' articles available on the internet.**

## Running the system

After cloning the repo, run the package manager [npm](https://www.npmjs.com/) to install dependencies.

```bash
npm install
```

When the installation of needed packages finishes, you can run the developer mode, which will be available at localhost port _5173_.

```bash
npm run dev
```

## Built with

-   Semantic HTML5 markup
-   SCSS custom properties
-   Flexbox
-   SASS pre-processor
-   [BEM methodology](https://getbem.com/)
-   [Vite](https://vite.dev/)

## Functions

The main expert system function are called by using `onclick` attribute in HTML.

```html
<button class="expert-system__button" onclick="question1()">Zaczynamy!</button>
```

When the function is called, the innerHTML is changed based on the users answer.

```js
function question1() {
	question.innerHTML = 'Jaki jest Twój poziom doświadczenia z grą na gitarze?';
	btnArea.innerHTML = `
	${addButton('Początkujący', 'question2()')}
	${addButton('Średnio zaawansowany / Zaawansowany', 'fQuestion3()')}`;
}
```

I also created 2 helper functions; `verdict` and `addButton`, to reduce the code repetition.

```js
const verdict = (guitarType, guitarImage) => {
	question.innerHTML = '';
	btnArea.innerHTML = ``;
	verdictName.innerHTML = `${guitarType}!`;
	verdictImage.innerHTML = `<img src="${guitarImage}" alt="${guitarType}">`;
};

const addButton = (buttonAnswer, callFunction) => {
	return `<button class="expert-system__button" onclick = "${callFunction}">${buttonAnswer}</button>`;
};
```

## Author

Sebastian Kliś, 51491
