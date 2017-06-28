const {ObjectID}= require('mongodb');

const {User}=require('./../server/models/user.js');
const {mongoose}=require('./../server/db/mongoose.js');
const {Todo}=require('./../server/models/todo.js');

// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

// Todo.findOneAndRemove({_id:'59536de2714a2306f5a1ed3f'}).then((result)=>{
//
// });

Todo.findByIdAndRemove('59536de2714a2306f5a1ed3f').then((result)=>{
  console.log(result);
});
