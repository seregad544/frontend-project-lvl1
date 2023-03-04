import startGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  const maxDivisible = Math.sqrt(number);
  for (let i = 2; i <= maxDivisible; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const getTask = () => {
  const maxNumber = 999;
  const questionNumber = getRandomNumber(maxNumber);
  const answer = isPrime(questionNumber) ? 'yes' : 'no';
  return [questionNumber, answer];
};
export default () => startGame(rule, getTask);
