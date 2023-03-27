import { renderScreenChoice } from './renderItems';
import { renderGameScreen } from './renderItems';

export function reloadGame(): void {
    const app = document.querySelector('.app') as HTMLDivElement;
    app.textContent = '';
    renderScreenChoice();
}

export function reloadSession(): void {
    stop();
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

export function start() {
    const startTime = new Date().getTime();
    const run = () => {
        const time = new Date().getTime() - startTime;
        const timerHeading = document.querySelector(
            '.timer__heading'
        ) as HTMLElement;
        timerHeading.textContent = (time / 1000).toFixed(2);
        const timeoutId = window.setTimeout(run);
        window.application.timers.push(timeoutId);
        window.application.result.push(`${(time / 1000).toFixed(2)}`);
    };
    run();
}

export function stop(): void {
    window.application.timers.forEach((timeoutId) => {
        clearInterval(timeoutId);
        window.application.timers = [];
    });
}
