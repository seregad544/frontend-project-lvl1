const calc = () => {
  const randomNumberRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const symbolArray = ['+', '-', '*'];
  const firstNumber = randomNumberRange(1, 100);
  const secondNumber = randomNumberRange(1, 100);
  const symbol = randomNumberRange(0, 2);
  const questionOut = `Question: ${firstNumber}${symbolArray[symbol]}${secondNumber}`;
  let rightAnswer;
  switch (symbol) {
    case 0:
      rightAnswer = firstNumber + secondNumber;
      break;
    case 1:
      rightAnswer = firstNumber - secondNumber;
      break;
    case 2:
      rightAnswer = firstNumber * secondNumber;
      break;
  }
  console.log(questionOut);
  return rightAnswer;
};

export default calc;
