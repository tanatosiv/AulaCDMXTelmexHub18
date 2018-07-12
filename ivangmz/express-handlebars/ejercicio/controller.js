let mongo = require("mongodb")
let client = mongo.MongoClient
const url = 'mongodb://localhost:27017'
const dbName = 'telmex'

function findBlogByNum (req, res) {
    client.connect(url, (err, conn) => {
        if (err) console.log(err)
        let db = conn.db(dbName)
        db.collection('blogs')
        .findOne(
            {num: req.params.num},
            function (err, data) {
                res.render('blog', data)
            }
        )
    })
}

function findAllBlogs (req, res) {
    client.connect(url, (err, conn) => {
        if (err) console.log(err)
        let db = conn.db(dbName)
        db.collection('blogs')
        .find({})
        .toArray(function (err, data) {
            res.send(data)
        })
    })
}

function renderNewBlog (req, res) {
    res.render('new-blog')
}
function renderHome (req, res) {
    res.render('home')
}

function insertBlog (req, res) {
    console.log('body', req.body)
    client.connect(url, (err, conn) => {
        if (err) console.log(err)
        let db = conn.db(dbName)        
        db.collection('blogs')
        .insert(
            req.body,
            function (err, data) {
                console.log(data)
                res.send(data)
            }
        )
    })
}

module.exports = {
    findAllBlogs,
    findBlogByNum,
    renderNewBlog,
    renderHome,
    insertBlog
}
