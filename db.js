

const mongoose = require('mongoose');
require('dotenv').config();
// const mongourl = 'mongodb://localhost:27017/hotels'
const  mongourl = process.env.MONGODB_URL;
mongoose.connect(mongourl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const db = mongoose.connection;

db.on('connected',()=>{
  console.log('connected to mongodb server');
})
db.on('error',(err)=>{
  console.error('connected error',err);
})
db.on('disconnected',()=>{
  console.log('connected disconnected');
})
//export
module.exports = db;