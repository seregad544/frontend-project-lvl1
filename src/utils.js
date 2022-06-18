export const getRandomNumber = (maxNumber = 100, minNumber = 1) => {
  const result = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  return result;
};

export const getProgression = () => {
  const progression = [];
  const maxStepProgression = 9;
  const minStepProgression = 1;
  const maxLengthProgression = 15;
  const minLengthProgression = 5;
  const stepProgression = getRandomNumber(maxStepProgression, minStepProgression);
  const lengthProgression = getRandomNumber(maxLengthProgression, minLengthProgression);
  let numberProgression = getRandomNumber();
  let n = 1;
  progression.push(numberProgression);
  while (n !== lengthProgression) {
    numberProgression += stepProgression;
    progression.push(numberProgression);
    n += 1;
  }
  return progression;
};

export const isEven = (number) => (number % 2 === 0);

export const getGcd = (a, b) => {
  let firstNumber = a;
  let secondNumber = b;
  while (firstNumber % secondNumber !== 0) {
    const divisionRemainder = firstNumber % secondNumber;
    firstNumber = secondNumber;
    secondNumber = divisionRemainder;
  }
  return secondNumber;
};

export const isSimple = (number) => {
  let n = 2;
  while (n !== number) {
    if (number % n === 0) {
      break;
    }
    n += 1;
  }
  return (n === number);
};
