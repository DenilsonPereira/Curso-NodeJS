const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {

    const urlFile = require("url").parse(req.url, true);
    const name = urlFile.query.name;

    if(!name){
        fs.readFile('./index.html', function(err, data){
            res.writeHead(200,{"Content-type": "text/html"})
            res.write(data)
            res.end()
        })
    }else{
        fs.writeFile("Arquivo.txt", name, function(err, data){
            res.writeHead(302,{
                Location: '/'
            })
            return res.end()
        })
    }
    
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
})