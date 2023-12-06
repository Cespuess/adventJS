function findNaughtyStep(original, modified) {
    /* 
    Recibe dos str, uno original y otro con una modificación, y devuelve el primer carácter modificado, puede estar añadido o eliminado de la original. 
    Si son dos str iguales devuelve ""
    */
    
    let trimOriginal = original.trim();
    let trimModified = modified.trim();

    if (trimOriginal === trimModified) {
        return "";
    } else if (trimOriginal === "") {
        return trimModified[0];
    } else { 
        if (trimOriginal.length > trimModified.length) {
            for (let i = 0; i < trimModified.length; i++){
                if (trimOriginal[i] !== trimModified[i]){
                    return trimOriginal[i];                    
                }
            }
            return trimOriginal[trimOriginal.length - 1];
        } else { 
            for (let i = 0; i < trimOriginal.length; i++){
                if (trimOriginal[i] !== trimModified[i]) {
                    return trimModified[i];
                }
            }
            return trimModified[trimModified.length - 1]
            }
        }
    }

  module.exports = {findNaughtyStep}