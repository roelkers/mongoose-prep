'use strict'

const mongodb = require('mongodb');
const mongoose = require('mongoose');

const username=process.env.USERNAME;
const pw= process.env.PW;

//mongodb://<dbuser>:<dbpassword>@ds141328.mlab.com:41328/mongo_sandbox
mongoose.connect(`mongodb://${username}:${pw}@ds141328.mlab.com:41328/mongo_sandbox`);

const db = mongoose.connection;

db.on('error', console.error.bind(console,'connection error:'))
db.once('open', function() {
  console.log("connected!");
});

let personPrototype = mongoose.Schema({
  name: String,
  age: Number,
  favouriteFoods : [String]
})

let person = mongoose.model('person',personPrototype);

/*person.create([{name : "Jack", age: 14, favoriteFoods: ["Ice Cream", "Pasta", "Salad"]},{name : "Jude", age: 17, favoriteFoods: ["Ice Cream", "Pasta", "Salad"]}],function(err,data){
  if(err) throw err;
})
*/

/*
person.findById("59282f5e9c7b3e3f9201f65d"
    ).exec(function(err,person){
  if(err) throw err;
  person.favouriteFoods.push("Hamburger");
  person.save(function(err,data){
    if(err) throw err;
    console.log(data);
  })
})
*/

/*
person.findOneAndUpdate({name : "Jack"},{age : 18},function(err,data){
  if(err) throw err;
  console.log(data);
})
*/

/*person.findByIdAndRemove("59282f5e9c7b3e3f9201f65d",function(err,data){
  if(err) throw err;
  console.log(data);
})
*/

/*
person.remove({name : "Jude"},function(err,data){
  if(err) throw err;
  console.log(data);
});
*/

person.create({name: "Jenny", age: 22, favouriteFoods : ["Rice","Steak"]});


person.find({favouriteFoods : "Rice"}).sort().limit(2).select('-age').exec(function(err,data){
  if(err) throw err;
  console.log(data);
})
