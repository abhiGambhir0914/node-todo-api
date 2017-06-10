// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,db)=>{
  if(error)
  {
    return console.log('Unable to connect to mongoDB server.');
  }
  console.log('Connected to mongoDB server successfully.');

  // db.collection('Todos').find().toArray().then((documents)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(documents,undefined,2));
  //   // throw error;
  // }).catch((error)=>{
  //   console.log('Unable to fetch the todos data',error);
  // });

  // db.collection('Todos').find().count().then((docs_count)=>{
  //   console.log('no of docs are: ',docs_count);
  // }).catch((error)=>{
  //   console.log('Unable to fetch the todos data',error);
  // });

  db.collection('Users').find({
    name:'Abhi Gambhir'
  }).toArray().then((docs)=>{
    console.log('Users');
    console.log(JSON.stringify(docs,undefined,2));
  }).catch((error)=>{
    console.log('Unable to fetch the users data',error);
  });

  db.collection('Users').find().count().then((count)=>{
    console.log('-------------------------------------------------------');
    console.log('Total number of Users in the Database: ',count);
  }).catch((error)=>{
    console.log('Unable to fetch the users data',error);
  });

  // db.close();
});
