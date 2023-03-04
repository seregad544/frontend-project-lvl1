import startGame from '../index';
import { getRandomNumber } from '../utils';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number: number) => (number % 2 === 0);

const getTask = (): [number, 'yes' | 'no'] => {
  const questionNumber = getRandomNumber();
  const answer = isEven(questionNumber) ? 'yes' : 'no';
  return [questionNumber, answer];
};

export default () => startGame(rule, getTask);
