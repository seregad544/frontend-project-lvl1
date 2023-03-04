import { getRandomNumber, getRandomIndex } from '../utils';
import startGame from '../index';

const rule = 'What is the result of the expression?';

const calculateTheExpression = (firstOperand: number, secondOperand: number, operator: string): number => {
  if (operator === '+') {
    return firstOperand + secondOperand;
  }
  if (operator === '-') {
    return firstOperand - secondOperand;
  }
  return firstOperand * secondOperand;
};

const getRandomOperaror = (): string => {
  const operators = ['+', '-', '*'];
  const index = getRandomIndex(operators);
  return operators[index];
};

const getTask = (): [string, string] => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const operator = getRandomOperaror();
  const answer = calculateTheExpression(number1, number2, operator).toString();
  const question = `${number1} ${operator} ${number2}`;
  return [question, answer];
};

export default () => startGame(rule, getTask);
