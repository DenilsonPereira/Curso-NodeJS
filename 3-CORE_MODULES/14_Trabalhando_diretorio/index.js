const fs = require('fs');

if(!fs.existsSync('./minhapasta')){
    console.log('Diretório não existe!');
    fs.mkdirSync('./minhapasta')
}else if(fs.existsSync('./minhapasta')){
    console.log('Diretório existe!');
}