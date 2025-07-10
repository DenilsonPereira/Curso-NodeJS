import chalk from 'chalk';
import inquirer from 'inquirer';

inquirer.prompt([
    {name: 'p1', message: 'Qual seu nome? '},
    {name: 'p2', message: 'Qual sua idade? '}
]).then((answers) =>{
    console.log(chalk.bgYellow.black(answers.p1, answers.p2))
}).catch(err => console.log(err))