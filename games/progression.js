import randomNumberRange from '../src/random.js';

const progression = () => {
  const progressionArr = [];
  const step = randomNumberRange(1, 9);
  const lenProgression = randomNumberRange(5, 15);
  let numberprogression = randomNumberRange(1, 100);
  let n = 1;
  progressionArr.push(numberprogression);
  while (n !== lenProgression) {
    numberprogression += step;
    progressionArr.push(numberprogression);
    n += 1;
  }
  const hideNumber = randomNumberRange(0, lenProgression - 1);
  const rightAnswer = progressionArr[hideNumber];
  progressionArr[hideNumber] = '..';
  const questionOut = `Question: ${progressionArr.join(' ')}`;
  console.log(questionOut);
  return rightAnswer;
};
export default progression;
