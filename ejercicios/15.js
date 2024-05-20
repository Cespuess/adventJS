function autonomousDrive(store, movements) {
  /*Estamos programando unos robots llamados giftbot 🤖🎁 que navegan de forma autónoma por los almacenes de regalos.

  Estamos creando una función a la que le pasamos: el almacén 🏬 que deben navegar y los movimientos ↔️ que pueden realizar.

  El almacén se representa como un array de cadenas de texto, donde:

  . significa que hay vía libre.
  * significa que hay un obstáculo.
  ! es la posición inicial del robot.
  Los movimientos son un array de cadenas de texto, donde:

  R mueve al robot una posición a la derecha.
  L mueve al robot una posición a la izquierda.
  U mueve al robot una posición hacia arriba.
  D mueve al robot una posición hacia abajo.
  Hay que tener en cuenta que el robot no puede superar los obstáculos ni los límites del almacén.

  Dados un almacén y los movimientos, debemos devolver el array con la posición final de nuestro robot.

  Ten en cuenta que la store es un array que puede ser de un número de filas que va de 1 a 100, ya que tenemos almacenes de todos los tamaños.

  También que el robot es posible que termine en su posición inicial si no puede moverse o si está dando vueltas. */

  movements.forEach((mov) => {
    const direction = mov.toLowerCase();
    const [posRobotArray, posRobotElement] = findRobot(store);

    if (direction === 'r') {
      store = turnRight(store, posRobotArray, posRobotElement);
    } else if (direction === 'l') {
      store = turnLeft(store, posRobotArray, posRobotElement);
    } else if (direction === 'u') {
      store = goUp(store, posRobotArray, posRobotElement);
    } else if (direction === 'd') {
      store = goDown(store, posRobotArray, posRobotElement);
    }
  });

  return store;
}

function findRobot(store) {
  for (let iArray = 0; iArray < store.length; iArray++) {
    const iElement = store[iArray].indexOf('!');
    if (iElement !== -1) return [iArray, iElement];
  }
}

function turnRight(store, posRobotArray, posRobotElement) {
  if (posRobotElement === store[0].length - 1) return store;
  else if (store[posRobotArray][posRobotElement + 1] === '*') return store;
  else if (store[posRobotArray][posRobotElement + 1] !== '*') {
    let tempArray = store[posRobotArray].split('');
    [tempArray[posRobotElement + 1], tempArray[posRobotElement]] = [
      tempArray[posRobotElement],
      tempArray[posRobotElement + 1]
    ];
    store[posRobotArray] = tempArray.join('');
    return store;
  }
}

function turnLeft(store, posRobotArray, posRobotElement) {
  if (posRobotElement === 0) return store;
  else if (store[posRobotArray][posRobotElement - 1] === '*') return store;
  else if (store[posRobotArray][posRobotElement - 1] !== '*') {
    let tempArray = store[posRobotArray].split('');
    [tempArray[posRobotElement - 1], tempArray[posRobotElement]] = [
      tempArray[posRobotElement],
      tempArray[posRobotElement - 1]
    ];
    store[posRobotArray] = tempArray.join('');
    return store;
  }
}

function goUp(store, posRobotArray, posRobotElement) {
  if (posRobotArray === 0) return store;
  else if (store[posRobotArray - 1][posRobotElement] === '*') return store;
  else if (store[posRobotArray - 1][posRobotElement] !== '*') {
    let upperFloor = store[posRobotArray - 1].split('');
    let robotFloor = store[posRobotArray].split('');
    [upperFloor[posRobotElement], robotFloor[posRobotElement]] = [
      robotFloor[posRobotElement],
      upperFloor[posRobotElement]
    ];
    [store[posRobotArray - 1], store[posRobotArray]] = [
      upperFloor.join(''),
      robotFloor.join('')
    ];
    return store;
  }
}

function goDown(store, posRobotArray, posRobotElement) {
  if (posRobotArray === store.length - 1) return store;
  else if (store[posRobotArray + 1][posRobotElement] === '*') return store;
  else if (store[posRobotArray + 1][posRobotElement] !== '*') {
    let lowerFloor = store[posRobotArray + 1].split('');
    let robotFloor = store[posRobotArray].split('');
    [lowerFloor[posRobotElement], robotFloor[posRobotElement]] = [
      robotFloor[posRobotElement],
      lowerFloor[posRobotElement]
    ];
    [store[posRobotArray], store[posRobotArray + 1]] = [
      robotFloor.join(''),
      lowerFloor.join('')
    ];
    return store;
  }
}

module.exports = {
  autonomousDrive,
  findRobot,
  turnRight,
  turnLeft,
  goUp,
  goDown
};
