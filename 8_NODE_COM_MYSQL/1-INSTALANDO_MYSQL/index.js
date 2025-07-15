import express from 'express'
import {engine} from 'express-handlebars'
import mysql from 'mysql'

const app = express()

app.engine('handlebars', engine(
    // {
    //     partialsDir: 'views/partials',
    //     defaultLayout: 'main',
    //     layoutsDir: 'views/layouts',
    // }
))

app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) =>{
    res.render('home')
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql',
})

conn.connect(function(err){
    if(err){
        console.log(err)
    }

    console.log('Conectou ao banco')

    app.listen(3000)
})