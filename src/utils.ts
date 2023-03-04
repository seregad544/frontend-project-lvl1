const getRandomNumber = (max = 100, min = 1): number => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomIndex = (data: any[]): number => {
  const lowRange = 0;
  const highRange = data.length - 1;
  return getRandomNumber(highRange, lowRange);
};

export { getRandomIndex, getRandomNumber };
