function manufacture(gifts, materials) {
    // recibe una lista de str (regalos) y un material, y devuelve una lista con los nombres de los regalos que contengan todas sus letras en el str material.
    if (gifts.length === 0) return "No hay ningún regalo pedido."

    if (materials == "") return "No hay materiales con los que fabricar los regalos." 

    let result = [];
    for (const gift of gifts) {
        let isOk = true;            
        for (const word of gift) {
            if (!materials.includes(word)) {
                isOk = false;
                break;
            }
        }
        if (isOk) result.push(gift);
    }
    return result
  }

module.exports = {manufacture}