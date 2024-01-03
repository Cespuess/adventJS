function adjustLights(lights) {
    /*
    Están encendiendo las luces de Navidad 🎄 en la ciudad y, como cada año, ¡hay que arreglarlas!

    Las luces son de dos colores: 🔴 y 🟢 . Para que el efecto sea el adecuado, siempre deben estar alternadas. Es decir, si la primera luz es roja, la segunda debe ser verde, la tercera roja, la cuarta verde, etc.

    Nos han pedido que escribamos una función adjustLights que, dado un array de strings con el color de cada luz (representados con los emojis 🔴 para el rojo y 🟢 para el verde), devuelva el número mínimo de luces que hay que cambiar para que estén los colores alternos.
    */
    let result = 0;
    let previous = lights[0];

    for (let i = 1; i < lights.length; i ++) {
        if (i === 1) {
            if (previous === lights[i] && lights[i] === lights[i+2]) {
                result++;
                continue;
            }
        }
        if (lights[i] === previous) {
            result++;
            (previous === "🟢" ? previous = "🔴" : previous = "🟢");
        } else {
            previous = lights[i];
        }
    }

    return result
}

module.exports = {adjustLights};