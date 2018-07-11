let mongo = require("mongodb")
let MongoClient = mongo.MongoClient
const url = 'mongodb://localhost:27017'
const dbName = 'telmex'

MongoClient.connect(url, function(err, data) {
  if (err) throw err;
  const db = data.db(dbName)
  db.collection("personas").find({}).toArray(function(err, data) {
    if (err) throw err;
        for(i=0; i<data.length;i++){

            console.log(data[i].name+' '+data[i].lastname+' tiene '+data[i].age+
            " años y vive con "+data[i].pets)

        }
  });
});