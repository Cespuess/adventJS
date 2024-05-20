function maxGifts(houses) {
  /*
  Con el tema de las redes sociales, Santa Claus tiene pánico que los niños se despierten mientras él está repartiendo regalos en sus casos, usen el móvil para grabarlo y se haga viral en TikTok.

  Quiere evitarlo a toda costa. Cada casa en esa calle tiene un número de regalos preparados. Sin embargo, las casas tienen un sistema de seguridad conectado entre casas adyacentes, por lo que no puede dejar los regalos en dos casas seguidas, o se activará la alarma que alertará a los niños.

  Dada un array de enteros no negativos regalos que representa la cantidad de regalos en cada casa, tu tarea es ayudar a Papá Noel a determinar la máxima cantidad de regalos que puede entregar en una noche sin activar ninguna alarma.
  */
  if (houses.length === 0) return 0;
  if (houses.length === 1) return houses[0];
  if (houses.length === 2) return Math.max(houses[0], houses[1]);

  let progressiveSums = Array(houses.length);
  progressiveSums[0] = houses[0];
  progressiveSums[1] = Math.max(houses[0], houses[1]);

  for (let i = 2; i < houses.length; i++) {
    progressiveSums[i] = Math.max(progressiveSums[i - 2] + houses[i], progressiveSums[i - 1]);
  }

  return progressiveSums[houses.length - 1];
}

module.exports = { maxGifts };

// recorrer el array y guardar cada núm con el índice en un object
