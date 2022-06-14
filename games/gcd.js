import randomNumberRange from '../src/random.js';

const greatestCommonDivisor = () => {
  const firstNumber = randomNumberRange(1, 100);
  const secondNumber = randomNumberRange(1, 100);
  let max;
  let min;
  if (firstNumber > secondNumber) {
    max = firstNumber;
    min = secondNumber;
  } else {
    max = secondNumber;
    min = firstNumber;
  }
  const questionOut = `Question: ${max} ${min}`;
  while (max % min !== 0) {
    const a = max % min;
    max = min;
    min = a;
  }
  const rightAnswer = min;
  console.log(questionOut);
  return rightAnswer;
};

export default greatestCommonDivisor;
