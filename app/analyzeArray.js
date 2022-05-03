const arr = [1, 8, 3, 4, 2, 6];

const min = (arr) => {
  return Math.min(...arr);
};

const max = (arr) => {
  return Math.max(...arr);
};

const Average = (arr) => {
  return (
    arr.reduce((prev, cur) => {
      return prev + cur;
    }, 0) / arr.length
  );
};

const len = (arr) => {
  return arr.length;
};

export { min, max, Average, len };
