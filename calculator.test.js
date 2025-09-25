const calculate = require("./calculator");

describe("Calculator tests", () => {
  test("Soma de inteiros", () => {
    expect(calculate(2, 3, "+")).toBe(5);
  });

  test("Soma de decimais", () => {
    expect(calculate(2.5, 3.1, "+")).toBeCloseTo(5.6);
  });

  test("Subtração simples", () => {
    expect(calculate(10, 4, "-")).toBe(6);
  });

  test("Multiplicação simples", () => {
    expect(calculate(3, 4, "*")).toBe(12);
  });

  test("Divisão simples", () => {
    expect(calculate(8, 2, "/")).toBe(4);
  });

  test("Divisão por zero", () => {
    expect(calculate(5, 0, "/")).toBeNull();
  });

  test("Potenciação simples", () => {
    expect(calculate(2, 3, "^")).toBe(8);
  });

  test("Potenciação com expoente zero", () => {
    expect(calculate(5, 0, "^")).toBe(1);
  });

  test("Potenciação com base negativa", () => {
    expect(calculate(-2, 3, "^")).toBe(-8);
  });

  test("Entrada inválida - string", () => {
    expect(calculate("a", 3, "+")).toBeNull();
  });

  test("Entrada inválida - operação inexistente", () => {
    expect(calculate(2, 3, "%")).toBeNull();
  });

  test("Valores negativos na soma", () => {
    expect(calculate(-5, -3, "+")).toBe(-8);
  });

  test("Valores negativos na multiplicação", () => {
    expect(calculate(-4, 2, "*")).toBe(-8);
  });

  test("Valores decimais na multiplicação", () => {
    expect(calculate(1.5, 2.2, "*")).toBeCloseTo(3.3);
  });

  test("Valores decimais na divisão", () => {
    expect(calculate(5.5, 2.2, "/")).toBeCloseTo(2.5);
  });

  test("Zero na soma", () => {
    expect(calculate(0, 7, "+")).toBe(7);
  });

  test("Zero na multiplicação", () => {
    expect(calculate(0, 5, "*")).toBe(0);
  });

  test("Número negativo na divisão", () => {
    expect(calculate(-10, 2, "/")).toBe(-5);
  });

  test("Expoente decimal", () => {
    expect(calculate(9, 0.5, "^")).toBe(3);
  });
});
