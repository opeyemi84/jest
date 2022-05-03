const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const div = (a, b) => {
  return b === 0 ? null : a / b;
};

const mul = (a, b) => {
  return a * b;
};

export { add, sub, div, mul };
