const express= require('express');
const router =express.Router();
const joi =require('joi')
const validate=require('../model/referral.model');
const Referral= require('../model/referral.model');

router.get('/', (req, res)=>{
    Referral.find((err, result)=>{
        if(err)
        res.status(404).send(err)
        else
        res.status(200).send(result);
    })
})
router.get('/:id', (req, res)=>{
    Referral.findById({_id:req.params.id},(err, result)=>{
        if(err)
        res.status(404).send(err)
        else
        res.status(200).send(result);
    })
})
router.delete('/:id',(req,res)=>{
    Referral.findByIdAndDelete({_id:req.params.id},(err,result)=>{
    if(err) console.log(err);
    else res.status(200).send(result);
    console.log("referral has been deleted")
   })
})
router.post('/', (req,res)=>{
    const { error} = validate(req.body)
    if(error) {
        return res.status(404).send(error.details[0].message);
    }
      
        let newTask= new Referral({
        name:req.body.name,
        count:req.body.count
        });
        newTask.save((err,result)=>{
            if(err) console.log(err);
            else res.status(200).send(result);
        })
  })
router.put('/:_id', (req, res)=>{
    Referral.findByIdAndUpdate({_id:req.params._id}, {$set:{
        name:req.body.name,
        count:req.body.count
    }}, 
    (err, result)=>{
        if(err)
        res.status(404).send(err)
        else
        res.status(200).send(result);
    })
})
module.exports=router