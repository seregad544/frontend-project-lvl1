import randomNumberRange from '../src/random.js';

const progression = () => {
  const progressionArr = [];
  const stepProgression = randomNumberRange(1, 9);
  const lenProgression = randomNumberRange(5, 15);
  let numberProgression = randomNumberRange(1, 100);
  let n = 1;
  progressionArr.push(numberProgression);
  while (n !== lenProgression) {
    numberProgression += stepProgression;
    progressionArr.push(numberProgression);
    n += 1;
  }
  const hideNumber = randomNumberRange(0, lenProgression - 1);
  const rightAnswer = progressionArr[hideNumber];
  progressionArr[hideNumber] = '..';
  const questionOut = `Question: ${progressionArr.join(' ')}`;
  console.log(questionOut);
  return String(rightAnswer);
};
export default progression;
