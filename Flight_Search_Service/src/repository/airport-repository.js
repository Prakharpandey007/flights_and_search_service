const CrudRepository=require('./crud-repository');
const {Airport}=require('../models/index');
//we have same fn as of crud repository we use the extends fn.
class AirportRepository extends CrudRepository{
    constructor(){

        super(Airport);
    }
}
module.exports=AirportRepository;
