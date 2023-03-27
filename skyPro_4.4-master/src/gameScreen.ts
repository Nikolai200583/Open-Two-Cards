import { renderScreenEndGame } from './renderItems';
import { start, stop } from './util';

export function gameLogick(): void {
    let firstCard: number | null = null;
    let secondCard: number | null = null;
    let clickable: boolean = true;

    const cards = document.querySelectorAll('.cards');

    cards.forEach((card) => {
        setTimeout(() => {
            card.classList.remove('flip');

            start();
            cards.forEach((card, index) =>
                card.addEventListener('click', () => {
                    if (
                        clickable === true &&
                        !card.classList.contains('successfully')
                    ) {
                        card.classList.add('flip');

                        if (firstCard === null) {
                            firstCard = index;
                        } else {
                            if (index !== firstCard) {
                                secondCard = index;
                                clickable = false;
                            }
                        }

                        if (
                            firstCard !== null &&
                            secondCard !== null &&
                            firstCard !== secondCard
                        ) {
                            if (
                                cards[firstCard].firstElementChild
                                    ?.className ===
                                cards[secondCard].firstElementChild?.className
                            ) {
                                setTimeout(() => {
                                    firstCard = null;
                                    secondCard = null;
                                    clickable = true;
                                }, 500);
                            } else {
                                setTimeout(() => {
                                    if (!firstCard || !secondCard) {
                                        return;
                                    }
                                    cards[firstCard].classList.remove('flip');
                                    cards[secondCard].classList.remove('flip');

                                    firstCard = null;
                                    secondCard = null;
                                    clickable = true;
                                    renderScreenEndGame(
                                        'Вы проиграли',
                                        'url(../static/img/lose.png)'
                                    );
                                    stop();
                                }, 500);
                            }
                        }

                        if (
                            Array.from(cards).every((card) =>
                                card.className.includes('flip')
                            )
                        ) {
                            renderScreenEndGame(
                                'Вы выиграли',
                                'url(../static/img/image.png)'
                            );
                            stop();
                        }
                    }
                })
            );
        }, 3000);
    });
}
