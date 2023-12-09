function decode(message) {
    /*
    En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: las letras dentro de los paréntesis deben ser leídas al revés

    Santa necesita que estos mensajes estén correctamente formateados. Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.

    Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes invertir los caracteres en el orden correcto.
    */
    let reverse = false;
    let indexRev = 0;
    let arrayMsg = message.split("");
    let result = "";
    let reverseArray = [];
    let middleArray = [];

    for (const element of arrayMsg) {
        if (element === "(") {
            if (!reverse) {
                reverse = !reverse;
            } 
            indexRev += 1;
            continue;
        } else if (element === ")"){
            if (reverse && indexRev === 0){
                reverse = !reverse;
            }
            indexRev -= 1;
            if (indexRev % 2 !== 0){
                reverseArray.unshift(middleArray.join(""));
                middleArray = [];
            } else if (indexRev === 0) {
                result += reverseArray.join("");
                reverseArray = [];
                reverse = !reverse;
            }
            continue;
        } else {
            if (reverse){
                if (indexRev % 2 === 0) {
                    middleArray.push(element)
                } else{
                    reverseArray.unshift(element);
                }
            } else {
                result += element;    
            }
        }
    }
    return result
}
decode('sa(u(cla)atn)s')

module.exports = {decode};

