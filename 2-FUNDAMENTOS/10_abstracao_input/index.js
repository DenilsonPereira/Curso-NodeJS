const inquirer = require('inquirer')

inquirer.prompt([{name: 'p1', message: 'Digite uma nota:'}, 
    { name: 'p2', message: 'Digite outra nota:' }]).then((answers) =>{
    console.log(answers)
}).catch(err => console.log(err))