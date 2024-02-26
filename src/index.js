const express=require("express");
const {PORT}=require('./config/serverconfig');



const setupAndStartServer=async()=>{
    //create an express object
const app=express();


app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);


});
}

setupAndStartServer();
