import startGame from '../index';
import { getRandomNumber } from '../utils';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number: number): boolean => {
  const maxDivisible = Math.sqrt(number);
  for (let i = 2; i <= maxDivisible; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getTask = (): [number, string] => {
  const maxNumber = 999;
  const questionNumber = getRandomNumber(maxNumber);
  const answer = isPrime(questionNumber) ? 'yes' : 'no';
  return [questionNumber, answer];
};

export default () => startGame(rule, getTask);
