const {CityRepository}=require('../repository/index');

class CityService{
    constructor(){
        this.cityRepository=new CityRepository();

    }
    async createCity(data){
try {
    const city=await this.cityRepository.createCity(data);
    return city;
} catch (error) {
    console.log("something is went wrong in service layer");
    throw {error};
}
    }


    async deleteCity(cityId){
try {
    const response =await this.cityRepository.deleteCity(cityId);
    return response;
} catch (error) {
    console.log("something is went wrong in service layer");
    throw {error};
}
    }



    async updateCity(cityId,data){
try {
    const city= await this.cityRepository.updateCity(cityId,data);
    return city;
} catch (error) {
    console.log("something is went wrong in service layer");
    throw {error};
}
    }



    async getCity(cityId){
try {
    console.log("insode the ssertvice lkayer before");
    const city=await this.cityRepository.getCity(cityId);
    console.log("insode the service layer after")
    return city;
} catch (error) {
    console.log("something is went wrong in service layer");
    throw{error};
}
    }

}
module.exports=CityService;



