import readlineSync from 'readline-sync';

const nameQuestion = () => {
    const question = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${question}!`);
}; 

export default nameQuestion;
