const mongoose =require("mongoose");

const discussionSchema =mongoose.Schema({
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
    }
    
    
})
const dis= module.exports= mongoose.model('dis', discussionSchema);