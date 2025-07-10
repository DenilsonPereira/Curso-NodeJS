const fs = require('fs');

fs.rename('Arquivo.txt', 'Renomeado.txt', function(err){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('Arquivo renomeado com sucesso!');
    }
});