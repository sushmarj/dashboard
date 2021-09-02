const express = require('express');
const mongoose = require('mongoose');
const config = require('config');
const cors= require('cors');

const blogRouter= require('./router/blog.router');
const referralRouter = require('./router/referral.router')
const draftRouter =require('./router/draft.router')
const postRouter= require('./router/post.router')
const post2Router= require('./router/post2.router')
const disRouter= require('./router/discussion.router')
const log=require('./middleware/log.middleware')

const app = express();

mongoose.connect(config.get('mongoConnectString'));
mongoose.connection.on("connected", ()=>{
    console.log("connected to mongodb on port 27017");
})
mongoose.connection.on("error", (error)=>{
    console.log(error);
})

app.use(express.json());
app.use(cors());
app.use('/api/blog/', blogRouter);
app.use('/api/referral/', referralRouter);
app.use('/api/draft/', draftRouter);
app.use('/api/post/', postRouter);
app.use('/api/post2/', post2Router);
app.use('/api/dis/', disRouter);
app.use(log);
app.use(function(req, res, next){
    console.log('time:', Date.now());
    next();
})



const port = process.env.PORT||config.get('port')
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})