const { findNaughtyStep } = require("../ejercicios/03");

describe("findNaughtyStep", () => {
  test("add step", () => {
    expect(findNaughtyStep("abcd", "abcde")).toBe("e");
    expect(findNaughtyStep("qwerty", "qwersty")).toBe("s");
  });
  test("del step", () => {
    expect(findNaughtyStep("stepfor", "stepor")).toBe("f");
    expect(findNaughtyStep("promesa", "promes")).toBe("a");
  });
  test("empty original", () => {
    expect(findNaughtyStep("", "e")).toBe("e");
  });
  test("same str", () => {
    expect(findNaughtyStep("hola", "hola")).toBe("");
  });
});
