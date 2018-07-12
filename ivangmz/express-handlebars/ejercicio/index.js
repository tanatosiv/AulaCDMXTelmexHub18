let express = require('express')
let app = express()
let bodyParser = require("body-parser")

const path = require('path')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('public'))

let controller = require('./controller')

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/blogs', controller.findAllBlogs)
app.get('/blog/:num', controller.findBlogByNum)
app.get('/blog-new', controller.renderNewBlog)
app.get('/', controller.renderHome)
app.post('/blog', controller.insertBlog)

app.listen(3000, function () {console.log('Connected in port 3000')})
