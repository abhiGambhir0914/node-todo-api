// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,db)=>{
  if(error)
  {
    return console.log('Unable to connect to mongoDB server.');
  }
  console.log('Connected to mongoDB server successfully.');

  // =========TODOS===============

  //deleteMany
  // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((res)=>{
  //   console.log(res);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((res)=>{
  //   console.log(res);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((res)=>{
  //   console.log(res);
  // });

  // =========USERS===============

  // db.collection('Users').deleteMany({name:'Abhi Gambhir'}).then((res)=>{
  //   console.log(res);
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('593af751514286bc2e5d182f')
  }).then((res)=>{
    console.log(res);
  });


  // db.close();
});
