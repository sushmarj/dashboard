const express= require('express');
const router =express.Router();
const validate=require('../model/blog.model');
const blog= require('../model/blog.model');

router.get('/', (req, res)=>{
    blog.find((err, result)=>{
        if(err)
        res.status(404).send(err)
        else
        res.status(200).send(result);
    })
})
router.get('/:id', (req, res)=>{
    blog.findById({_id:req.params.id},(err, result)=>{
        if(err)
        res.status(404).send(err)
        else
        res.status(200).send(result);
    })
})
router.delete('/:id',(req,res)=>{
    blog.findByIdAndDelete({_id:req.params.id},(err,result)=>{
    if(err) console.log(err);
    else res.status(200).send(result);
    console.log("blog has been deleted")
   })
})
router.post('/',async(req,res)=>{
    const { error} = validate(req.body)
    if(error) 
       return res.status(400).send(error.details[0].message);
        let newTask=new blog({
        name:req.body.name,
        count:req.body.count,
        value:req.body.value
        
        });
        newTask.save((err,result)=>{
            if(err) console.log(err);
            else res.status(200).send(result);
        })
  })
router.put('/:_id', (req, res)=>{
    blog.findByIdAndUpdate({_id:req.params._id}, {$set:{
        name:req.body.name,
        count:req.body.count,
        value:req.body.value
    }}, 
    (err, result)=>{
        if(err)
        res.status(404).send(err)
        else
        res.status(200).send(result);
    })
})
module.exports=router