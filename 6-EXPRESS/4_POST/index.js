import express from 'express'
import { fileURLToPath } from 'url'
import {dirname, join} from 'path'

const app = express()
const port = 3000 //Variável de ambiente

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const basePath = join(__dirname, 'templates')

//ler o body
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

app.get('/users/add', (req, res) =>{
    res.sendFile(`${basePath}/userform.html`)
})

app.post('/users/save', (req, res) => {
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do usuário é ${name} e ele tem ${age} anos`)
    res.sendFile(`${basePath}/userform.html`)
})



app.get('/users/:id', (req, res) =>{
    const id = req.params.id

    //leitura da tabela de usuarios, resgatar um usuario do banco
    console.log(`Estamos buscando pelo usuário: ${id}`)
    
    res.sendFile(`${basePath}/users.html`)
})

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})
