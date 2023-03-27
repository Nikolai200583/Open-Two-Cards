import './css/style.css';
import { renderScreenChoice, renderBlockChoice } from './renderItems';

declare global {
    interface Window {
        application: {
            blocks: { [key: string]: (container: HTMLElement) => void };
            screens: { [key: string]: (container?: HTMLElement) => void };
            renderScreen: (screenName: string) => void;
            renderBlock: (blockName: string, container: HTMLElement) => void;
            levels: string | [];
            timers: number [];
            result: string [];
        };
    }
}
window.application = {
    blocks: {},
    screens: {},
    renderScreen: function (screenName: string) {
        this.screens[screenName]();
    },
    renderBlock: function (blockName, container) {
        this.blocks[blockName](container);
    },
    levels: [],
    timers: [],
    result: [],
};

window.application.blocks['blockChoice'] = renderBlockChoice;
window.application.screens['screenChoice'] = renderScreenChoice;
window.application.renderScreen('screenChoice');

