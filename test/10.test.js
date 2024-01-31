const {createChristmasTree} = require('../ejercicios/10');

describe('arbol de navidad', () => {
  test('con 4', () => {
    expect(createChristmasTree('123', 4)).toBe('   1\n  2 3\n 1 2 3\n1 2 3 1\n   |\n')
  });
  test('con 3', () => {
    expect(createChristmasTree('*@o', 3)).toBe('  *\n @ o\n* @ o\n  |\n')
  });
});