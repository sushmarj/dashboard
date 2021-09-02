const express= require('express');
const router =express.Router();
const joi =require('joi')
const validate=require('../model/draft.model');
const Draft= require('../model/draft.model');

router.get('/', (req, res)=>{
    Draft.find((err, result)=>{
        if(err)
        res.status(404).send(err)
        else
        res.status(200).send(result);
    })
})
router.get('/:id', (req, res)=>{
    Draft.findById({_id:req.params.id},(err, result)=>{
        if(err)
        res.status(404).send(err)
        else
        res.status(200).send(result);
    })
})
router.delete('/:id',(req,res)=>{
    Draft.findByIdAndDelete({_id:req.params.id},(err,result)=>{
    if(err) console.log(err);
    else res.status(200).send(result);
    console.log("Draft has been deleted")
   })
})
router.post('/', (req,res)=>{
    const { error} = validate(req.body)
    if(error) {
        return res.status(404).send(error.details[0].message);
    }
      
        let newTask= new Draft({
        subject:req.body.subject,
        message:req.body.message
        });
        newTask.save((err,result)=>{
            if(err) console.log(err);
            else res.status(200).send(result);
        })
  })
router.put('/:_id', (req, res)=>{
    Draft.findByIdAndUpdate({_id:req.params._id}, {$set:{
        subject:req.body.subject,
        message:req.body.message
    }}, 
    (err, result)=>{
        if(err)
        res.status(404).send(err)
        else
        res.status(200).send(result);
    })
})
module.exports=router