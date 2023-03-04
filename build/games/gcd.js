import startGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const rule = 'Find the greatest common divisor of given numbers.';
const getGcd = (a, b) => {
  let number1 = a;
  let number2 = b;
  while (number1 % number2 !== 0) {
    const divisionRemainder = number1 % number2;
    number1 = number2;
    number2 = divisionRemainder;
  }
  return number2;
};
const getTask = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const question = `${number1} ${number2}`;
  const answer = getGcd(number1, number2).toString();
  return [question, answer];
};
export default () => startGame(rule, getTask);
