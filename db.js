

const mongoose = require('mongoose');
require('dotenv').config();
// const mongourl = 'mongodb://localhost:27017/hotels'
const  uri = process.env.MONGODB_URI;
// const  uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('MONGODB_URI environment variable is not set');
}

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const db = mongoose.connection;

db.on('connected',()=>{
  console.log('connected to mongodb server');
  console.log('MONGODB_URI:', process.env.MONGODB_URI);
})
db.on('error',(err)=>{
  console.error('connected error',err);
})
db.on('disconnected',()=>{
  console.log('connected disconnected');
})
//export
module.exports = db;