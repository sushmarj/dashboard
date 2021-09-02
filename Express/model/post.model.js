const mongoose =require("mongoose");

const PostSchema =mongoose.Schema({
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
const Post= module.exports= mongoose.model('Post', PostSchema);