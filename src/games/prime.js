import { getRandomNumber, isSimple } from '../utils.js';

export const conditionsGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export const prime = () => {
  const maxNumber = 999;
  const randomNumber = getRandomNumber(maxNumber);
  console.log(`Question: ${randomNumber}`);
  return isSimple(randomNumber) ? 'yes' : 'no';
};
