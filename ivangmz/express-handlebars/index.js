let express = require('express')
let app = express()
const path = require('path')

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', function (req, res) {
    res.render('hola', {
        title: 'Hey! Amigos',
        amigos: [
            {
                name: 'Memo',
                age: 26,
                hasPets: true,
                pets: ['perro', 'gato']
            },
            {
                name: 'jorge',
                age: 48,
                hasPets: false
            },
            {
                name: 'chava',
                age: 1000,
                hasPets: true,
                pets: ['changuito']
            }
        ]
    })
})

app.listen(3000, function () {console.log('Connected in port 3000')})