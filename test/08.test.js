const {organizeGifts} = require("../ejercicios/08");

describe("organizeGifts", () => {
    test("advent", () => {
        expect(organizeGifts("76a11b")).toBe("[a]{a}{a}(aaaaaa){b}(b)")
    });
    test("sin pallets", () => {
        expect(organizeGifts("43v23i")).toBe("{v}{v}{v}{v}(vvv){i}{i}(iii)")
    });
    test("sin boxes", () => {
        expect(organizeGifts("51h8d")).toBe("[h](h)(dddddddd)")
    });
    test("sin bags", () => {
        expect(organizeGifts("110f20p")).toBe("[f][f]{f}{p}{p}")
    });
})