const {findFirstRepeated} = require("../ejercicios/01")

describe("findFirstRepeat", () => {
    test("first repeated", () => {
        expect(findFirstRepeated([2, 1, 3, 5, 3, 2])).toBe(3)
    })
    test("no one repaeted", () => {
        expect(findFirstRepeated([1, 2, 3, 4])).toBe(-1)
    })
    test("other test repeat", () => {
        expect(findFirstRepeated([5,1,5,1])).toBe(5)
    })
    test("empty array", () => {
        expect(findFirstRepeated([])).toBe(-1)
    })
})