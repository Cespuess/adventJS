const {adjustLights} = require("../ejercicios/09")

describe("adjustLights", () => {
    test("uno", () => {
        expect(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])).toBe(1)
    });
    test("dos", () => {
        expect(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])).toBe(2)
    });
    test("ninguno", () => {
        expect(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])).toBe(0)
    });
    test("el que falla", () => {
        expect(adjustLights(["🔴", "🔴", "🟢", "🔴", "🟢"])).toBe(1)
    });
})