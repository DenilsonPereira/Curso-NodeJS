import express from 'express'
import {engine} from 'express-handlebars'

const app = express()
const porta = 3000;

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

app.get('/', (req, res) => {

    const user = {
        name: 'Denilson',
        surname: 'Silva',
    }

    const palavra = 'Teste'

    const auth = false
    
    res.render('home', {user: user, palavra, auth})
})

app.listen(porta, () => {
    console.log('App rodando!')
})