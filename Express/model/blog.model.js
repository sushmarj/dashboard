const mongoose =require("mongoose");

const blogSchema =mongoose.Schema({
    name:{
        type:String
    },
    count:{
        type:Number
    },
    value:{
        type:String
    }
    
})
const blog= module.exports= mongoose.model('blog', blogSchema);