import { getRandomNumber, getGcd } from '../utils.js';

export const conditionsGame = 'Find the greatest common divisor of given numbers.';
export const gcd = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  return getGcd(firstNumber, secondNumber).toString();
};
