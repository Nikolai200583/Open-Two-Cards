import { gameDifficulty, gameStart } from './gameDifficulty';
import { getImage } from './cards-array';
import { reloadGame, reloadSession } from './util';
import { gameLogick } from './gameScreen';

export function renderBlockChoice(container: Element): void {
    const buttonsName = ['1', '2', '3'];
    buttonsName.forEach((elements) => {
        const buttonsLevels = document.createElement('input');
        buttonsLevels.setAttribute('type', 'radio');
        buttonsLevels.setAttribute('value', elements);
        buttonsLevels.setAttribute('id', elements);
        buttonsLevels.setAttribute('name', 'group-buttons');
        buttonsLevels.classList.add('buttons');
        const buttonsLabel = document.createElement('label');
        buttonsLabel.setAttribute('for', elements);
        buttonsLabel.classList.add('buttons-label');
        buttonsLabel.textContent = elements;
        container.appendChild(buttonsLevels);
        container.appendChild(buttonsLabel);
        gameDifficulty();
    });
}

export function renderScreenChoice() {
    const app = document.querySelector('.app') as Element;
    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Выбери сложность';
    const levelContent = document.createElement('div');
    levelContent.classList.add('level__content');
    app.appendChild(title);
    app.appendChild(levelContent);
    renderButtonStart(app, 'Старт', gameStart);

    window.application.renderBlock('blockChoice', levelContent);
}

export function renderGameScreen(container: string, numbers: number) {
    const elementConst = document.querySelector(container) as HTMLElement;
    elementConst.textContent = '';
    const utilContainer = document.createElement('div');
    utilContainer.classList.add('util__container');
    const timerHeading = document.createElement('div');
    timerHeading.classList.add('timer__heading');
    const cardsContainer = document.createElement('div');
    cardsContainer.classList.add('cards__container');
    elementConst.appendChild(utilContainer);
    utilContainer.appendChild(timerHeading);
    elementConst.appendChild(cardsContainer);

    renderButtonStart(utilContainer, 'Начать заново', reloadSession);

    function shuffle(array: string[]): string[] {
        let currentIndex = array.length,
            randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex],
                array[currentIndex],
            ];
        }
        return array;
    }

    const cardsArray = getImage(numbers);
    const duplicateCardsArray = [...cardsArray, ...cardsArray];

    shuffle(duplicateCardsArray);

    duplicateCardsArray.forEach((element) => {
        const cardsItem = document.createElement('div');
        cardsItem.classList.add('cards', 'flip');

        const notFlippedCardI = document.createElement('div');
        const flippedCardI = document.createElement('div');

        notFlippedCardI.classList.add('notflipped');
        flippedCardI.classList.add(element, 'flipped');

        notFlippedCardI.style.backgroundImage = 'url(./static/Maskgroup.png)';
        flippedCardI.style.backgroundImage = `url(./static/img/${element}`;

        cardsItem.append(flippedCardI, notFlippedCardI);
        cardsContainer.appendChild(cardsItem);
    });
    gameLogick();
}

export function renderScreenEndGame(titleGame: string, Image: string) {
    const body = document.querySelector('body') as Element;
    // body.textContent = '';
    const backDiv = document.createElement('div');
    backDiv.classList.add('backDiv');
    const app = document.createElement('div');
    app.classList.add('app');
    const image = document.createElement('div');
    image.classList.add('image__game');
    image.style.backgroundImage = Image;
    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = titleGame;
    const timer = document.createElement('div');
    timer.classList.add('timer');
    const min = window.application.result.pop();
    timer.textContent = `${min}`;

    body.appendChild(backDiv);
    body.appendChild(app);
    app.appendChild(image);
    app.appendChild(title);
    app.appendChild(timer);
    renderButtonStart(app, 'Играть снова', reloadGame);
}

function renderButtonStart(
    container: Element,
    text: string,
    callback: () => void
) {
    const buttonStart = document.createElement('button');
    buttonStart.classList.add('buttonStart');
    buttonStart.textContent = text;
    container.appendChild(buttonStart);
    buttonStart.addEventListener('click', callback);
}
