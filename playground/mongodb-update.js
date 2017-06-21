// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(error,db)=>{
  if(error)
  {
    return console.log('Unable to connect to mongoDB server.');
  }
  console.log('Connected to mongoDB server successfully.');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('594a384d965b1396145d3eaf')
  // },{
  //   $set:{completed:true}
  // },{
  //   returnOriginal: false
  // }).then((res)=>{
  //   console.log(res);
  // });


  db.collection('Users').findOneAndUpdate({
    name:'Tanusha'
  },{
    $set: {name:'Abhi'},
    $inc:{age:1}
  },{
    returnOriginal:false
  }).then((res)=>{
    console.log(res);
  });

  // db.close();
});
