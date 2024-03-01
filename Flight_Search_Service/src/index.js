const express=require("express");
const bodyParser=require('body-parser');

const {City}=require('./models/index');


const {PORT}=require('./config/serverconfig');

const ApiRoutes=require('./routes/index');



const setupAndStartServer=async()=>{
    //create an express object
const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use('/api',ApiRoutes);

app.listen(PORT,async()=>{
    console.log(`server started at ${PORT}`);

})

};


setupAndStartServer();
