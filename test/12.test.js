const {checkIsValidCopy} = require('../ejercicios/12');

describe('fotocopias válidas', () => {
  test('es copia', () => {
    expect(checkIsValidCopy('Santa Claus is coming',
    'sa#ta Cl#us i+ comin#')).toBeTruthy();
    expect(checkIsValidCopy('Hola que tal', 'h#l  +:e t. ')).toBeTruthy();
  }),

  test('no es copia', () => {
    expect(checkIsValidCopy('s#nta Cla#s is coming',
    'p#nt: cla#s #s c+min#')).toBeFalsy();
    expect(checkIsValidCopy('Hola que tal', 'hOl  +:e t. ')).toBeFalsy();
    expect(checkIsValidCopy('hola', 'hol')).toBeFalsy();
    expect(checkIsValidCopy('hol3', 'hol+')).toBeFalsy();
  }),

  test('degradación por orden', () => {
    expect(checkIsValidCopy('s+#:.#c:. s', 's#+:.#c:. s')).toBeFalsy;
  })
})