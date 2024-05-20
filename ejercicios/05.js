function cyberReindeer(road, time) {
  /*
    Santa 🎅 está probando su nuevo trineo eléctrico, el CyberReindeer, en una carretera del Polo Norte. La carretera se representa con una cadena de caracteres, donde:

    . = Carretera
    S = Trineo de Santa
    * = Barrera abierta
    | = Barrera cerrada
    Ejemplo de carretera: S...|....|.....

    Cada unidad de tiempo, el trineo avanza una posición a la derecha. Si encuentra una barrera cerrada, se detiene hasta que la barrera se abra. Si está abierta, la atraviesa directamente.
    
    Todas las barreras empiezan cerradas, pero después de 5 unidades de tiempo, se abren todas para siempre.
    
    Crea una función que simule el movimiento del trineo durante un tiempo dado y devuelva un array de cadenas representando el estado de la carretera en cada unidad de tiempo:
    */
  function advanceS(s) {
    let temp = arrayRoad[s];
    if (arrayRoad[s + 1] === "*") {
      arrayRoad[s] = ".";
      barrier = !barrier;
    } else if (barrier) {
      arrayRoad[s] = "*";
      barrier = !barrier;
    } else {
      arrayRoad[s] = arrayRoad[s + 1];
    }
    arrayRoad[s + 1] = temp;
    road = arrayRoad.join("");
  }

  let result = [];
  let arrayRoad = road.split("");
  let open = true;
  let barrier = false;
  for (let i = 0; i < time; i++) {
    let indexS = arrayRoad.indexOf("S");
    result.push(road);
    if (i === 4) {
      open = !open;
      road = road.replaceAll("|", "*");
      arrayRoad = road.split("");
    }
    if (arrayRoad[indexS + 1] === "|" && open) {
      open = !open;
      continue;
    } else {
      if (open) {
        advanceS(indexS);
      }
    }
  }
  return result;
}

module.exports = { cyberReindeer };
