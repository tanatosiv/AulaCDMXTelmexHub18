let mongo = require('mongodb')
let client = mongo.MongoClient
let url = "mongodb://localhost:27017"
let dbName = "telmex"

function blog (req, res) {
    res.send('Esta es la entrada númoero:' + req.params.numero + " del blog")
}

function carta (req, res) {
    res.send('Hola, ' + req.params.destinatario + '\nAtte: ' + req.params.remitente)
}

function saludo (req, res) {
    res.send('Hola, estimao ' + req.params.quien)
}

function getPersonas (req, res) {
    client.connect(url, function (err, conn) {
        if (err) console.log(err)
        let db = conn.db(dbName)
        
        db.collection('personas')
        .find({})
        .toArray( function(err, data) {
            // let nombresPersonas = data.map(function (persona) {
            //     return persona.name
            // })
            // res.send(nombresPersonas)
            res.send(data)
        })
    })
}
function getPersona (req, res) {
    client.connect(url, function (err, conn) {
        if (err) console.log(err)
        let db = conn.db(dbName)
        let o_id = mongo.ObjectId(req.params.id)
        db.collection('personas')
        .findOne(
            {'_id': o_id},
            function(err, data) {
                res.send(data)
            }
        )
    })
}
function insertPersona (req, res) {
    client.connect(url, function (err, conn) {
        if (err) console.log(err)
        let db = conn.db(dbName)
        
        db.collection('personas')
        .insert(req.body, function (err, data){
            res.send(data)
        })
    })
}
function updatePersona (req, res) {
    client.connect(url, function (err, conn) {
        if (err) console.log(err)
        let db = conn.db(dbName)
        let o_id = new mongo.ObjectId(req.params.id)
        db.collection('personas')
        .update(
            {'_id': o_id },
            {
                $set: req.body
            },
            function (err, data){
                res.send(data)
            }
        )
    })
}
function removePersona (req, res) {
    client.connect(url, function (err, conn) {
        if (err) console.log(err)
        let db = conn.db(dbName)
        let o_id = new mongo.ObjectId(req.params.id)
        db.collection('personas')
        .delete(
            {'_id': o_id },
            function (err, data){
                res.send(data)
            }
        )
    })
}

module.exports = {
    blog,
    carta,
    saludo,
    getPersonas,
    getPersona,
    insertPersona,
    updatePersona,
    removePersona
}