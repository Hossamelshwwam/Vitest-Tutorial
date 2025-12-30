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

async function asycnFn(value) {
  if (!value) throw new Error("Invalid value");
  return 2 + value;
}

export async function fetchUser() {
  const res = await fetch("/user");
  return res.json();
}

export async function getUserName() {
  const user = await fetchUser();
  return user.name;
}

export { sum, divide, capitalize, asycnFn, fetchUser, getUserName };
