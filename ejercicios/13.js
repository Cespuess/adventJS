function calculateTime(deliveries) {
/*  Los elfos están preparando la víspera de Navidad y necesitan tu ayuda para calcular si van sobrados o no de tiempo ⏳.

Para ello te pasan un array con la duración de cada entrega. El formato de la duración es HH:mm:ss, las entregas empiezan a las 00:00:00 y el límite de tiempo es 07:00:00.

Tu función debe devolver el tiempo que les faltará o el tiempo que les sobrará para terminar las entregas. El formato de la duración devuelta debe ser HH:mm:ss.

Si terminan antes de las 07:00:00, el tiempo restante hasta las 07:00:00 debe ser mostrado con un signo negativo. Por ejemplo, si sobran 1 hora y 30 minutos, devuelve -01:30:00
*/

function getTime(countSeconds) {
  const hours = Math.floor(countSeconds / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((countSeconds % 3600) / 60).toString().padStart(2, '0');
  const seconds = (countSeconds % 60).toString().padStart(2, '0');

  return [hours, minutes, seconds];
}
  const hoursLimit = 7;
  const secondsLimit = hoursLimit * 3600;
  let res = '';
  let totalSeconds = 0;
  
  deliveries.forEach(deliverie => {
    const hourSplited = deliverie.split(':');
    let hoursToSeconds = parseInt(hourSplited[0]) * 3600;
    let minutesToSeconds = parseInt(hourSplited[1]) * 60;
    totalSeconds += parseInt(hourSplited[2]) + minutesToSeconds + hoursToSeconds;    
  }); 
  

  if (totalSeconds > secondsLimit) res = getTime((totalSeconds - secondsLimit)).join(':');
  else if (totalSeconds < secondsLimit) res = `-${getTime(secondsLimit - totalSeconds).join(':')}`;
  else res = '00:00:00';
  
  return res
}

module.exports = {calculateTime};