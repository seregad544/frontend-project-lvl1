const getRandomNumber = (max = 100, min = 1) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomIndex = (data) => {
  const lowRange = 0;
  const highRange = data.length - 1;
  return getRandomNumber(highRange, lowRange);
};

export { getRandomIndex, getRandomNumber };
