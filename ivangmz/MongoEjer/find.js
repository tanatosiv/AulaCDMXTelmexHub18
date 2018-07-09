// let mongo = require("mongodb")
// let client = mongo.MongoClient
// const url = 'mongodb://localhost: 27017'
// const dbName= 'telmex' 

// client.connect(url, function (err, con) {
//     if (err) console.log(err)
//     console.log('Por fin me conecte a la BD')
//     const db = con.db(dbName)    

let mongo = require("mongodb")
let client = mongo.MongoClient
const url = 'mongodb://localhost:27017'
const dbName = 'telmex'

client.connect(url, function (err, con) {
    if (err) console.log(err)
    console.log('Connected successfully to server')

    const db = con.db(dbName)

//imprime todos los documentos de la coleccion
    db.collection('personas')
    .find({})
    .toArray(function(err, data){
        console.log("Find Todos")
        if (err) console.log(err)
        console.log(data)
    })


//imprime solo una persona

db.collection('personas')
    .findOne({name: 'Pedro'})
    .toArray(function(err, data){
        console.log("Una persona")
        if (err) console.log(err)
        console.log(data)
    })
})