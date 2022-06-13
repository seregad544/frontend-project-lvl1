import readlineSync from 'readline-sync';

const randomGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer /"yes/" if the number is even, otherwise answer /"no/".');
  let n = 0;
  while (n !== 3) {
    const randomNumber = (Math.random() * 100).toFixed(0);
    console.log(`Question: ${randomNumber}`);
    const UserAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = (randomNumber % 2 === 0) ? 'yes' : 'no';
    if (UserAnswer === rightAnswer) {
      console.log('Correct!');
      n += 1;
    } else {
      console.log(`"${UserAnswer}" is wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (n === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default randomGame;
