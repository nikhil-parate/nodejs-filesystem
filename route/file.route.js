
const express = require('express');
const router = express.Router();

const authservice = require("../service/file.service"); 
console.log("work");
router.get('/register',async (req,res)=>{
    await authservice.register(req.body, res);
    console.log("work");
    //res.send({message: "successfully registered"});
})

router.get('/',async(req,res)=>{
  await authservice.files(req.body,res);
})

  module.exports = router;