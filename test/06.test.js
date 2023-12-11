const {maxDistance} = require("../ejercicios/06");

describe("maxDistance",() =>{
    test("movement right", () => {
        expect(maxDistance('>>*<')).toBe(2)
    });
    test("movement left", () => {
        expect(maxDistance('<<<>')).toBe(2)
    })
    test("movement *", () => {
        expect(maxDistance('>***>')).toBe(5)
    })
    test("movement *", () => {
        expect(maxDistance('***>')).toBe(4)
    })
})