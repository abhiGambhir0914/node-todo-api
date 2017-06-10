// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,db)=>{
  if(error)
  {
    return console.log('Unable to coonect to mongoDB server.');
  }
  console.log('Connected to mongoDB server successfully.');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // },(error,result)=>{
  //   if(error){
  //     return console.log('Unable to insert todo',error);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  // db.collection('Users').insertOne({
  //   // _id:123,
  //   name: 'Abhi Gambhir',
  //   age: 20,
  //   location: 'New Delhi'
  // },(error,result)=>{
  //   if(error){
  //     return console.log('Unable to insert user',error);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});
