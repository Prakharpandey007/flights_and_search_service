const express=require("express");
const bodyParser=require('body-parser');

const {City,Airport}=require('./models/index');


const {PORT}=require('./config/serverconfig');

const ApiRoutes=require('./routes/index');

const db=require('./models/index');

// const {Airplane}=require('./models/index');
const setupAndStartServer=async()=>{
    //create an express object
const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use('/api',ApiRoutes);

app.listen(PORT,async()=>{
    console.log(`server started at ${PORT}`);
if(process.env.SYNC_DB){
    db.sequelize.sync({alter:true});
    
}
// await Airplane.create({
//     modelNumber:'Bombardier CRJ'
// });




// const city=await City.findOne({
//     where:{
//         id:10
//     }
// });
// const airports=await city.getAirports();
// // const newAirport=await Airport.findOne({
// //     where:{
// //         id:5
// //     }
// // });
// // await city.addAirport(newAirport);
// console.log(city,airports);


});

}
setupAndStartServer();
