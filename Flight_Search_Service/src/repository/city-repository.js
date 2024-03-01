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
const city=await City.update(data,{
    where:{
        id:cityId
    }
});
return city;
}
catch(error){
    console.log("something went wrong in repositoryt");
    throw{error};
}
}

async getCity(cityId){
    try{
const city=await City.findByPk(cityId);
return city;
    } catch(error){
        console.log("something went wrong in repositoryt");
throw{error};
    }

}



}
module.exports=CityRepository;








