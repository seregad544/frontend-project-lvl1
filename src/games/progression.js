import { getRandomNumber, getProgression } from '../utils.js';

export const conditionsGame = 'What number is missing in the progression?';
export const progression = () => {
  const progressions = getProgression();
  const lowRangeProgression = 0;
  const highRangeProgression = progressions.length - 1;
  const hideNumber = getRandomNumber(highRangeProgression, lowRangeProgression);
  const rightAnswer = progressions[hideNumber];
  progressions[hideNumber] = '..';
  console.log(`Question: ${progressions.join(' ')}`);
  return rightAnswer.toString();
};
