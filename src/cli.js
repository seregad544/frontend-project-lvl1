import readlineSync from 'readline-sync';

const HelloMan = () => {
  console.log('Welcome to the Brain Games!');
  const UserName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${UserName}`);
};
export default HelloMan;
