const {ObjectID}= require('mongodb');

const {User}=require('./../server/models/user.js');
const {mongoose}=require('./../server/db/mongoose.js');
const {Todo}=require('./../server/models/todo.js');

var id='59515354714a2306f5a1ed3e';

User.findById(id).then((user)=>{
  if(!user)
  {
  return  console.log('User not found');
  }
  console.log('===============USER================',user);
}).catch((err)=>console.log(err));




// if(!ObjectID.isValid(id)){
//   console.log('===============ERROR============\n ID NOT VALID');
// }

// Todo.find({
//   _id: id
// }).then((todos)=>{
//   if(!todos[0])
//   {
//     return console.log('ID not found in the database!!!!!');
//   }
//   console.log('=============TODOS=============\n',todos);
// });
//
// Todo.findOne({
//   _id:id
// }).then((todo)=>{
//   if(!todo){
//     return console.log('ID not found in the database!!!!!');
//   }
  // console.log('=================TODOO=============\n',todo);
// });

// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('ID not found in the database!!!!!');
//   }
//   console.log('=============TODOS BY ID============\n',todo);
// }).catch((err)=>console.log(err));
