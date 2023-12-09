const {decode} = require("../ejercicios/04")

describe("decode", () => {
    test("one reversed word", () => {
        expect(decode('hola (odnum)')).toBe("hola mundo");
        expect(decode("(aloh) mundo")).toBe("hola mundo");
    })
    test("two reversed words", () => {
        expect(decode('(olleh) (dlrow)!')).toBe("hello world!");
        expect(decode("(aloh) (odnum)")).toBe("hola mundo")
    })
    test("anidados", () => {
        expect(decode('sa(u(cla)atn)s')).toBe("santaclaus")
    })
    
   
})