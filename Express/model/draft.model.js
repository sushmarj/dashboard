const mongoose =require("mongoose");

const DraftSchema =mongoose.Schema({
    subject:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
    
    
})
const Draft= module.exports= mongoose.model('Draft', DraftSchema);