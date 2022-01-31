const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/merncrud',{useNewurlparser:true,useUnifiedToplogy:true});

const dboject=mongoose.connection

dboject.on('connected',()=>{console.groupCollapsed('mongo db connection sucessfull')})
dboject.on('error',()=>{console.groupCollapsed('mongo db connection failed')})
module.exports =mongoose
