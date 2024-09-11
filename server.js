const express = require('express')
const app = express();
const db = require('./db');
const bodyparser = require('body-parser');


app.use(bodyparser.json()); //store the data in req.body 
app.get('/',function(req,res){
  res.send("welcome to hotel");
})
// app.post('/person',(req,res)=>{
//   const data = req.body;//assuming the request body containing the person data and that data is gone to the data now

//   const newPerson = new person(data);


// //agr hum niche diya hua code likhne se bchna chate hai toh new person mein data pass krdenge new person(data) kyuli vo bhut bda aur complex aur bada hojaega age jyada data hoga toh

//   // newPerson.name = data.name;
//   // newPerson.age = data.age;
//   // newPerson.mobile = data.mobile;
//   // newPerson.email = data.email;
//   // newPerson.address = data.address;



//   //save the new person data into the database
//   newperson.save((error,savedperson)=>{
//     if(error){
//       console.log("error saving person",error);
//       res.status(500).json({error:'internal server error'})
//     }else{
//       console.log('data save successfully');
//       res.status(200).json(savedperson);
//     }
    
//   })
// })





//import menuRoutes
const menuRoutes = require('./routes/menuRoutes');

//use menu routes
app.use('/',menuRoutes);

// import person routes
const personroutes = require('./routes/personRoutes');

//use person routes
app.use('/person',personroutes);


app.listen(3000,()=>{
  console.log("server running on 3000")
})
//comment added for testing purpose