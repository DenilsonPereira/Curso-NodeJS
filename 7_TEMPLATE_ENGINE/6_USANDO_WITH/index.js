import express from 'express'
import {engine} from 'express-handlebars'

const app = express()
const porta = 3000;

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {

    const items = ['item 1', 'item 2', 'item 3']

    res.render('dashboard', {items})
})

app.get('/post', (req, res) => {
    const post = {
        title: 'Apendendo JS',
        category: 'JavaScript',
        body: "Este artigo vai te ajudar a aprender Node.js...",
        comments: 4,
    }
    res.render('blogpost', {post})
})

app.get('/', (req, res) => {

    const user = {
        name: 'Denilson',
        surname: 'Silva',
    }

    const palavra = 'Teste'

    const auth = true
    
    res.render('home', {user: user, palavra, auth})
})

app.listen(porta, () => {
    console.log('App rodando!')
})