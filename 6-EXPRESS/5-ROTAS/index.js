import express from 'express'
import { fileURLToPath } from 'url'
import {dirname, join} from 'path'
import fs from 'fs/promises' 

const app = express()
const port = 3000 //Variável de ambiente

//ler o body
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const basePath = join(__dirname, 'templates')

const routersPath = join(__dirname, 'users')
const files = await fs.readdir(routersPath)

files.forEach(async (file) => {
    if(file.endsWith('.js')){
        const route = await import(`./users/${file}`)
        app.use('/users', route.default)
    }
})

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})
