export function getImage(numbers: number): string[] {
    let diffCards = [];
    const rang = ['6', '7', '8', '9', '10', 'j', 'q', 'k', 't'];
    const suit = ['b', 'c', 'k', 'p'];
    for (let i = 0; i < numbers / 2; i++) {
        const randomRang = Math.floor(Math.random() * rang.length);
        const randomSuit = Math.floor(Math.random() * suit.length);
        const randomCard = rang[randomRang] + suit[randomSuit] + '.png';
        diffCards.push(randomCard);
    }
    return diffCards;
}
