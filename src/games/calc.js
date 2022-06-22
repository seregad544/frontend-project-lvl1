import { getRandomNumber, getRandomIndex } from '../utils.js';
import startGame from '../index.js';

const rule = 'What is the result of the expression?';

const calculateTheExpression = (number1, number2, operator) => {
  if (operator === '+') {
    return number1 + number2;
  }
  if (operator === '-') {
    return number1 - number2;
  }
  return number1 * number2;
};

const operators = ['+', '-', '*'];
const getRandomOperaror = () => {
  const index = getRandomIndex(operators);
  return operators[index];
};

const getTask = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const operator = getRandomOperaror();
  const answer = calculateTheExpression(number1, number2, operator).toString();
  const question = `${number1} ${operator} ${number2}`;
  return [question, answer];
};

export default () => startGame(rule, getTask);
