const path = require('path');

//path absoluto
console.log(path.resolve("teste.txt"));

//formar path

const midFolder = "relatorios";
const fileName = "denilson.txt";

const finalPath = path.join("/", 'arquivos', midFolder, fileName)
console.log(finalPath);