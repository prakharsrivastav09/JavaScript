var MongoClient = require('mongodb').MongoClient;
var url = "127.0.0.1:27017";
MongoClient.connect(url,function(err,db){
    if(err) throw err;
    console.log('Database Create!');
    db.close();

});