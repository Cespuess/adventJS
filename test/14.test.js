const { maxGifts } = require('../ejercicios/14');

describe('maxGifts sin saltar las alarmas', () => {
  test('maxGifts', () => {
    expect(maxGifts([2, 4, 2])).toBe(4);
    expect(maxGifts([5, 1, 1, 5])).toBe(10);
    expect(maxGifts([4, 1, 1, 4, 2, 1])).toBe(9);
    expect(maxGifts([1, 3, 1, 3, 100])).toBe(103);
  })
})