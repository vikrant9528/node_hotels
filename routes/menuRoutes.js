const express = require('express');
const router = express.Router();
const menu = require('./../models/menuItem');


router.post('/menu',async (req,res)=>{
  try{
      const data = req.body;//assuming the request body containing the person data and that data is gone to the data now

      //create a new person document using the mongoose model
        const newmenu = new menu(data);
    //save the new person to the database
        const response = await newmenu.save();
        console.log("data saved");
        res.status(200).json(response);

  }catch(err){
    console.log(err);
    res.status(500).json({error:'internal server error'});

  }
})

router.get('/menu',async(req,res)=>{
  try{
    const data = await menu.find();
    console.log("data fetched");
    res.status(200).json(data);
  }catch(err){
    console.log(err);
    res.status(500).json({error:'internal server error'});
  }
})

router.get('/menu/:taste',async(req,res)=>{
  try{
    const tasty = req.params.taste;
    if(tasty=='spicy'||tasty=='sweet'){
      const response = await menu.find({taste:tasty})
      res.status(200).json(response);
    }else{
      res.status(404).json("invalid not found");
    }
  }catch(err){
    console.log(err);
    res.status(500).json({error:'internal server error'});
  }
})


module.exports = router;