function getIndexsForPalindrome(word) {
  /*
  En el taller de Santa, los elfos aman los acertijos 🧠. Este año, han creado uno especial: un desafío para formar un palíndromo navideño.

  Un palíndromo es una palabra que se lee igual hacia adelante y hacia atrás. Los elfos quieren saber si es posible formar un palíndromo haciendo, como mucho, un intercambio de letras.

  Crea una función getIndexsForPalindrome que reciba una cadena de caracteres y devolverá:

  Si ya es un palíndromo, un array vacío.
  Si no es posible, null.
  Si se puede formar un palíndromo con un cambio, un array con las dos posiciones (índices) que se deben intercambiar para poder crearlo.
  Por ejemplo:

  getIndexsForPalindrome('anna') // []
  getIndexsForPalindrome('abab') // [0, 1]
  getIndexsForPalindrome('abac') // null
  getIndexsForPalindrome('aaaaaaaa') // []
  getIndexsForPalindrome('aaababa') // [1, 3]
  getIndexsForPalindrome('caababa') // null
  Si se puede formar el palíndromo con diferentes intercambios, siempre se debe devolver el primero que se encuentre.
  */

  let res = [];

  if (!isPalindrome(word)) {

    res = changeIndex(word)
  }

  return res;
}

function isPalindrome(word) {
  // Recibe una palabra y devuelve true o false dependiendo de si es palíndromo 
  let i = 0;
  let f = word.length - 1;

  while (i <= f) {
    if (word[i] !== word[f]) return false;
    i++;
    f--;
  }

  return true;
}

function changeIndex(word) {
  //recibe la palabra no palíndroma y cambia la letra para ver si con un cambio puede ser palíndroma.
  let i = 0;
  let f = word.length - 1;

  while (i <= f) {
    if (word[i] !== word[f] && getIndice(word, word[f], 0).length === 1 ) {
      let indexF = getIndice(word, word[i], i);

      for (let j = 0; j < indexF.length; j++) {
        let newWord = changeLetter(word, f, indexF[j]);
        if (isPalindrome(newWord)) return [indexF[j], f];
      }
    }    
    else if (word[i] !== word[f]) {
      let indexF = getIndice(word, word[f], i);

      for (let j = 0; j < indexF.length; j++) {
        let newWord = changeLetter(word, i, indexF[j]);
        if (isPalindrome(newWord)) return [i, indexF[j]];
      }
    }
    
    i++;
    f--;
  }

  return null
}

function changeLetter(word, index1, index2) {
  // convierte la palabra en array para cambiar los caracteres de sitio
  let wordArray = word.split('');

  let temp = wordArray[index1];
  wordArray[index1] = wordArray[index2];
  wordArray[index2] = temp;

  let changedWord = wordArray.join('');

  return changedWord;

}

function getIndice(word, character, i) {
  // devuelve una array con los índices de donde se encuentra el carácter, si no hay coincidencias devuelve array vacío.
  let indexArray = [];
  let index = word.indexOf(character, i);

  while (index !== -1) {
    indexArray.push(index);
    index = word.indexOf(character, index + 1);
  }

  return indexArray;
}

getIndexsForPalindrome('rotaratov')

module.exports = {getIndexsForPalindrome, isPalindrome, changeLetter, changeIndex, getIndice}