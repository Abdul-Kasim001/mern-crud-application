const express =require('express')
const router = express.Router()

const mongoose = require('mongoose')
const schema = mongoose.schema
const postschema = new schema({
    title:String,
    imageurl:String,
    description:String,
    postid: String
})
const postmodel = mongoose.model('posts',postschema)


router.post('/addnewpost',(req , res=>{

    const newpost = new postmodel({
    title:req.body.title,
    imageurl:req.body.imageurl,
    description:req.body.description,
    postid :req.body.title,

})
newpost.save(function(err){
    if(!err){
        res.send('Newpost added sucessful')
    }
    else{
        res.send(err)
    }
})
})
)

module.exports=router