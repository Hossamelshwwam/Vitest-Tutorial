function sum(a, b) {
  return a + b;
}

function divide(a, b) {
  if (b === 0) throw new Error("Division by zero");
  return a / b;
}

function capitalize(str) {
  if (!str) throw new Error("No string provided");
  return str[0].toUpperCase() + str.slice(1);
}

export { sum, divide, capitalize };
