function findFirstRepeated(gifts) {
    // recibe una lista y devuelve el primer número repetido, sinó devuelve -1
    let result = -1
    let newArray = []
    for (let i=0; i < gifts.length; i++){
        if (newArray.includes(gifts[i])) return gifts[i]
        newArray.push(gifts[i])
    }
    return result
}

findFirstRepeated([2, 1, 3, 5, 3, 2])

module.exports = {findFirstRepeated}