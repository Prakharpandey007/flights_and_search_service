const {Op}=require('sequelize');
const {City}=require('../models/index');

class CityRepository{


    async createCity({name}){  //{"name:"new delhi"}

        try{
            const city=await City.create({
                name
            });
            return city;
        }
        catch(error){
console.log("something went wrong in repositoryt");
throw{error};
        }
    }



async deleteCity(cityId){
    try{
        await City.destroy({
            where:{
                id:cityId
            }
        });
        return true;
    }catch(error){
        console.log("something went wrong in repositoryt");
        throw{error};
    }

}
async updateCity(cityId,data){
try{
//the below approach also works but will not return updated object 
//if u r using pgsql then returning true can be used else not.

// const city=await City.update(data,{
//     where:{
//         id:cityId
//     }
    
// });
//for getting updating data in mysql we use the below approch
const city=await City.findByPk(cityId);
city.name=data.name;
await city.save();
return city;
}
catch(error){
    console.log("something went wrong in repositoryt");
    throw{error};
}
}

async getCity(cityId){
    try{
        console.log("inside repo layer")
const city=await City.findByPk(cityId);
return city;
    } catch(error){

        console.log("something went wrong in repository layer", error);
throw{error};
    }

}
async getAllCities(filter){   //filter can be empty slso
    try {
        if(filter.name){
            const cities=await City.findAll({
                where:{
                    name:{
                        [Op.startsWith]:filter.name

                    }
                }
            });
            return cities;
        }
     const cities=await City.findAll();
     return cities;   
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({
            data:{},
            success:false,
            message:'not able to update the city',
            err:error
        });
    }
}


}
module.exports=CityRepository;








