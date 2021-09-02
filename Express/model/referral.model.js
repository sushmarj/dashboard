const mongoose =require("mongoose");

const referralSchema =mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    count:{
        type:Number,
        required:true
    }
    
    
})
const Referral= module.exports= mongoose.model('Referral', referralSchema);