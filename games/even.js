import randomNumberRange from '../src/random.js';

const even = () => {
  const randomNumber = randomNumberRange(1, 100);
  const rightAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
  console.log(`Question: ${randomNumber}`);
  return rightAnswer;
};

export default even;
