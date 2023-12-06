const {manufacture} = require("../ejercicios/02")

describe("manufacture", () => {
    test("two answers", () => {
        expect(manufacture(['tren', 'oso', 'pelota'], "tronesa")).toStrictEqual(["tren", "oso"])
    })
    test("one answer", () => {
        expect(manufacture(['juego', 'puzzle'], "jlepuz")).toStrictEqual(["puzzle"])
    })
    test("no answer", () => {
        expect(manufacture(['libro', 'ps5'], 'psli')).toStrictEqual([])
    })
    test("empty gifts array", () => {
        expect(manufacture([], "hjeo")).toBe("No hay ningún regalo pedido.")
    })
    test("empty str materials", () => {
        expect(manufacture(["juego", "puzzle"], "")).toBe("No hay materiales con los que fabricar los regalos.")
    })
})