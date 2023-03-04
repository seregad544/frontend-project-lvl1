import startGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => (number % 2 === 0);
const getTask = () => {
  const questionNumber = getRandomNumber();
  const answer = isEven(questionNumber) ? 'yes' : 'no';
  return [questionNumber, answer];
};
export default () => startGame(rule, getTask);
