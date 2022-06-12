import readlineSync from 'readline-sync';

const HelloMan = () => {
    const UserName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${UserName}`)
};
export default HelloMan;