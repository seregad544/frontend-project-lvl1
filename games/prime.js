import randomNumberRange from '../src/random.js';

const prime = () => {
  let rightAnswer;
  let n = 2;
  const randomNumber = randomNumberRange(1, 999);
  const questionOut = `Question: ${randomNumber}`;
  while (n !== randomNumber) {
    if (randomNumber % n === 0) {
      rightAnswer = 'no';
      break;
    }
    n += 1;
  }
  if (n === randomNumber) {
    rightAnswer = 'yes';
  }
  console.log(questionOut);
  return rightAnswer;
};

export default prime;
