import express from "express"
const app = express()
const port = 3000

const path = require(path)

app.use(
    express.urlencoded({
        extended: true;
    }),
)

app.use(express.json())

const basePath = path.join(__dirname, 'templates')

app.get('/users/add', (req, res) => {
    res.sendFile('Olá, Mundo!')
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})