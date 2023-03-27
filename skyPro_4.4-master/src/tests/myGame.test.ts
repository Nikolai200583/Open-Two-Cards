import { it } from '@jest/globals';
const assert = require('assert').strict;
import { getImage } from '../cards-array';

it('should returns created cards array', () => {
    const num = 16;
    const expected = num / 2;
    const cards = getImage(num);
    assert.equal(cards.length, expected);
});

it('should returns created cards array 2.0', () => {
    expect(getImage(16).length).toBe(8);
});
