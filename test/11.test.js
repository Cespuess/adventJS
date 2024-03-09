const {getIndexsForPalindrome} = require('../ejercicios/11');
const {isPalindrome} = require('../ejercicios/11');
const {changeIndex} = require('../ejercicios/11');
const {changeLetter} = require('../ejercicios/11');
const {getIndice} = require('../ejercicios/11');

describe('palíndromos con cambios', () => {
  test('true si es palíndromo', () => {
    expect(isPalindrome('anna')).toBeTruthy();
    expect(isPalindrome('carac')).toBeTruthy();
  });
  test('false si no es paíndromo', () => {
    expect(isPalindrome('abac')).toBeFalsy();
    expect(isPalindrome('carles')).toBeFalsy();
  });
  test('encuentra los índices de la letra pedida', () => {
    expect(getIndice('banana', 'a', 0)).toEqual([1,3,5]);
    expect(getIndice('susanas', 's', 2)).toEqual([2,6]);
    expect(getIndice('furgoneta', 'c')).toEqual([]);
  })
  test('palabras nuevas con letras cambiadas', () => {
    expect(changeLetter('carles', 1, 3)).toBe('clraes');
    expect(changeLetter('leona', 3,4)).toBe('leoan');
  });
  test('index de letras a cambiar para que sea palíndromo', () => {
    expect(changeIndex('abab')).toEqual([0,1]);
    expect(changeIndex('aaababa')).toEqual([1,3]);
    expect(changeIndex('anerera')).toEqual([1, 3]);
    expect(changeIndex('taa')).toEqual([0, 1]);
    expect(changeIndex('rotaratov')).toEqual([4, 8]);// test a corregir

  });
  test('null si ni cambiando letras es palíndromo', () => {
    expect(changeIndex('caababa')).toBeNull();
    expect(changeIndex('carles')).toBeNull();
  });
  test('devuelve [] si es palíndroma inicialmente', () => {
    expect(getIndexsForPalindrome('anna')).toEqual([]);
    expect(getIndexsForPalindrome('reconocer')).toEqual([]);
  });
  test('devuelve los índices de los cambios para que sea palíndroma', () => {
    expect(getIndexsForPalindrome('aaababa')).toEqual([1, 3]);
    expect(getIndexsForPalindrome('anerera')).toEqual([1, 3]);
    expect(getIndexsForPalindrome('rotaratov')).toEqual([4, 8]);// test a corregir

  });
  test('null si ni con cambios en palíndroma', () => {
    expect(getIndexsForPalindrome('caababa')).toBeNull();
    expect(getIndexsForPalindrome('carles')).toBeNull();
  })
})