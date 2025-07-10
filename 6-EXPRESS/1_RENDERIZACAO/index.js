import express from 'express'
import { fileURLToPath } from 'url'
import {dirname, join} from 'path'

const app = express()
const port = 3000 //Variável de ambiente

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const basePath = join(__dirname, 'templates')

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})