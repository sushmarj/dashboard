const mongoose =require("mongoose");

const Post2Schema =mongoose.Schema({
    poster:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    postdate:{
        type:String,
        required:true
    },
    tag:{
        type:String
    }
    
    
})
const Post2= module.exports= mongoose.model('Post2', Post2Schema);