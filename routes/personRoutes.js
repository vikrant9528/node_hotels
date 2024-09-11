const express = require('express');
const router = express.Router();
const person = require('./../models/person');

router.post('/',async (req,res)=>{
  try{
      const data = req.body;//assuming the request body containing the person data and that data is gone to the data now

      //create a new person document using the mongoose model
        const newPerson = new person(data);
    //save the new person to the database
        const response = await newPerson.save();
        console.log("data saved");
        res.status(200).json(response);

  }catch(err){
    console.log(err);
    res.status(500).json({error:'internal server error'});

  }
})

//get method to get the data of person
router.get('/',async(req,res)=>{
  try{
    const data = await person.find();
    console.log("data fetched");
    res.status(200).json(data);
  }catch(err){
    console.log(err);
    res.status(500).json({error:'internal server error'});
  }
})

router.get('/:workType',async(req,res)=>{
  try{
    const workType = req.params.workType;
    if(workType=='chef'||workType=='manager'||workType=='waiter'){
      const response = await person.find({work:workType});
      console.log("response  fetched");
      res.status(200).json(response);
    }else{
      res.status(404).json("invalid not found")
    }
  }catch(err){
    console.log(err);
    res.status(500).json({error:'internal server error'});
  }
})

router.put('/:id',async (req,res)=>{
 try{
  const upid = req.params.id;//extract the id from the url parameter
  const data = req.body;//updated data for the person
  const response = await person.findByIdAndUpdate(upid,data,{
    new:true,//return the updated document
    runValidators:true//run mongoose validation
  })
  if(!response){
    res.status(404).json("not found");
  }
  console.log("data updated");
  res.status(200).json(response);
 }catch(err){
  console.log(err);
    res.status(500).json({error:'internal server error'});
 }

})

router.delete('/:id',async (req,res)=>{
  try{
    const delId = req.params.id;
    const response = await person.findByIdAndDelete(delId);
    if(!response){
      res.status(404).json("not found");
    }
    console.log("data deleted");
    res.status(200).json({message:"person deleted successfully"});
  }catch(err){
    console.log(err);
    res.status(500).json({error:'internal server error'});
  }
})
module.exports = router;