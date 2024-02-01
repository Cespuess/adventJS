function createChristmasTree(ornaments, height) {
  /*
  ¡Vaya idea ha tenido Sam Elfman! Quiere ofrecer un servicio que te crea un árbol de Navidad 🎄 personalizado en cuestión de segundos.

  Para crearlo nos pasan una cadena de caracteres para formar el árbol y un número que indica la altura del mismo.

  Cada carácter de la cadena representa un adorno del árbol, y vamos utilizándolos de forma cíclica hasta llegar a la altura indicada. Como mínimo siempre nos pasarán uno.

  Debemos devolver un string multilínea con el árbol de Navidad formado con los adornos, la altura indicada más una última línea con el tronco formado por el carácter | en el centro y, finalmente, un salto de línea \n.
  */
  function decorate(index, espacioInicial, espacio) {
    let treeFloor = 0;
    let subRes = espacio.repeat(espacioInicial);
    
    while (treeFloor <= index) {
      if (treeFloor === index) {
        subRes += `${ornaments[turnOrnament]}\n`
      } else {
        subRes += `${ornaments[turnOrnament]}${espacio}`;
      }        
      if (turnOrnament === (ornaments.length - 1)) {
        turnOrnament = 0
      } else {
        turnOrnament++;
      }
      treeFloor++;
    }
    return subRes;
  }
  
  let res = '';
  let spacesIni = height - 1;
  let space = ' ';
  let turnOrnament = 0;

  for (let i = 0; i <= height; i++) {
    if (i === height) {
      res += `${' '.repeat(height - 1)}|\n`;
    } else {
      res += decorate(i, spacesIni, space);
    }
    spacesIni--;
  }

  return res;
  
}

module.exports = {createChristmasTree}