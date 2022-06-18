import { getRandomNumber } from '../utils.js';

export const conditionsGame = 'What is the result of the expression?';
export const calc = () => {
  let rightAnswer;
  const mathOperators = ['+', '-', '*'];
  const lowRangeOperators = 0;
  const highRangeOperators = 2;
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const randomOperators = mathOperators[getRandomNumber(highRangeOperators, lowRangeOperators)];
  switch (randomOperators) {
    case '+':
      rightAnswer = firstNumber + secondNumber;
      break;
    case '-':
      rightAnswer = firstNumber - secondNumber;
      break;
    case '*':
      rightAnswer = firstNumber * secondNumber;
      break;
    default:
      break;
  }
  console.log(`Question: ${firstNumber}${randomOperators}${secondNumber}`);
  return rightAnswer.toString();
};
