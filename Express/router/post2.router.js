const express= require('express');
const router =express.Router();
const validate=require('../model/post2.model');
const Post2= require('../model/post2.model');

router.get('/', (req, res)=>{
    Post2.find((err, result)=>{
        if(err)
        res.status(404).send(err)
        else
        res.status(200).send(result);
    })
})
router.get('/:id', (req, res)=>{
    Post2.findById({_id:req.params.id},(err, result)=>{
        if(err)
        res.status(404).send(err)
        else
        res.status(200).send(result);
    })
})
router.delete('/:id',(req,res)=>{
    Post2.findByIdAndDelete({_id:req.params.id},(err,result)=>{
    if(err) console.log(err);
    else res.status(200).send(result);
    console.log("Post has been deleted")
   })
})
router.post('/', (req,res)=>{
    const { error} = validate(req.body)
    if(error) {
        return res.status(404).send(error.details[0].message);
    }
      
        let newTask= new Post2({
        poster:req.body.poster,    
        subject:req.body.subject,
        message:req.body.message,
        postdate:req.body.postdate,
        tag:req.body.tag
        });
        newTask.save((err,result)=>{
            if(err) console.log(err);
            else res.status(200).send(result);
        })
  })
router.put('/:_id', (req, res)=>{
    Post2.findByIdAndUpdate({_id:req.params._id}, {$set:{
        poster:req.body.poster,    
        subject:req.body.subject,
        message:req.body.message,
        postdate:req.body.postdate,
        tag:req.body.tag
    }}, 
    (err, result)=>{
        if(err)
        res.status(404).send(err)
        else
        res.status(200).send(result);
    })
})
module.exports=router