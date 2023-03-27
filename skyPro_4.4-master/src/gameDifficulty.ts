import { renderGameScreen } from './renderItems';

export function gameDifficulty(): void {
    const buttons = document.querySelectorAll('.buttons');
    const boxButtons = document.querySelector('.level__content') as HTMLElement;
    const labelsButtons = document.querySelectorAll('.buttons-label');

    boxButtons.addEventListener('click', (event) => {
        setTimeout(() => {
            const target = event.target as Element;
            if (event.target === boxButtons) {
                return;
            }
            target.classList.add('background');
        }, 0);

        labelsButtons.forEach((elements) => {
            elements.classList.remove('background');
        });

        buttons.forEach((elements) => {
            elements.classList.remove('background');
        });
    });
}
export function gameStart(): void {
    const buttons = document.querySelectorAll('.buttons');
    for (const control of buttons) {
        if ((control as HTMLInputElement).checked === true) {
            window.application.levels = (control as HTMLInputElement).value;
            switch (window.application.levels) {
                case '1':
                    renderGameScreen('body', 6);
                    break;
                case '2':
                    renderGameScreen('body', 12);
                    break;
                case '3':
                    renderGameScreen('body', 18);
                    break;
                default:
                    break;
            }
        }
    }
}
