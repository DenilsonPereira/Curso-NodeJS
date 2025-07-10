import express from 'express'
import {engine} from 'express-handlebars'

const app = express()
const porta = 3000;

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {

    const user = {
        name: 'Denilson',
        surname: 'Silva',
    }

    const palavra = 'Teste'
    
    res.render('home', {user: user, palavra})
})

app.listen(porta, () => {
    console.log('App rodando!')
})