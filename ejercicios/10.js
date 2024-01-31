function createChristmasTree(ornaments, height) {
  /*
  ¡Vaya idea ha tenido Sam Elfman! Quiere ofrecer un servicio que te crea un árbol de Navidad 🎄 personalizado en cuestión de segundos.

  Para crearlo nos pasan una cadena de caracteres para formar el árbol y un número que indica la altura del mismo.

  Cada carácter de la cadena representa un adorno del árbol, y vamos utilizándolos de forma cíclica hasta llegar a la altura indicada. Como mínimo siempre nos pasarán uno.

  Debemos devolver un string multilínea con el árbol de Navidad formado con los adornos, la altura indicada más una última línea con el tronco formado por el carácter | en el centro y, finalmente, un salto de línea \n.
  */
  function decorate(treeFloor, i, subRes) {
    subRes += space.repeat(spacesIni);
    while (treeFloor <= i) {
      if (treeFloor === i) {
        subRes += `${ornaments[turnOrnament]}\n`
      } else {
        subRes += `${ornaments[turnOrnament]}${space}`;
      }        
      if (turnOrnament === (ornaments.length - 1)) {
        turnOrnament = 0
      } else {
        turnOrnament++;
      }
      treeFloor++;
    }
    res += subRes;
  }

  let res = '';
  let spacesIni = height - 1;
  let turnOrnament = 0;
  let space = ' ';

  for (let i = 0; i <= height; i++) {
    let treeFloor = 0;
    let subRes = '';

    if (i === 0) {
      res += `${space.repeat(spacesIni)}${ornaments[0]}\n`;
      if (ornaments.length != 1) turnOrnament++;
      spacesIni--;
      continue;
    }
    if (i === height) {
      res += `${' '.repeat(height - 1)}|\n`;
    } else {
      decorate(treeFloor, i, subRes);
    }
    spacesIni--;
  }

  return res;
  
}

createChristmasTree('x',3);

module.exports = {createChristmasTree}