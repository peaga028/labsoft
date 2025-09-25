function calculate(a, b, operation) {
  if (typeof a !== "number" || typeof b !== "number") {
    return null;
  }

  switch (operation) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : null;
    case "^":
      return Math.pow(a, b);
    default:
      return null;
  }
}

module.exports = calculate;
// comentário de teste
