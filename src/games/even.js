import { getRandomNumber, isEven } from '../utils.js';

export const conditionsGame = 'Answer "yes" if the number is even, otherwise answer "no".';
export const even = () => {
  const randomNumber = getRandomNumber();
  console.log(`Question: ${randomNumber}`);
  return isEven(randomNumber) ? 'yes' : 'no';
};
