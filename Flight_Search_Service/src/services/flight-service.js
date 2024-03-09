const {FlightRepository,AirplaneRepository}=require('../repository/index')

class FlightService{
constructor(){
    this.airplaneRepository=new AirplaneRepository();
this.flightRepository=new FlightRepository();
}

    async createFlight(data){
        try {
            // const airplaneRepository=new AirplaneRepository();

            const airplane=await this.airplaneRepository.getAirplane(data.airplaneId);
            // console.log(airplane)
const flight=await this.flightRepository.createFlight({
    ...data,totalSeats:airplane.capacity
});
return flight;
            // return airplane;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw{error};
        }
    }
    async getFlightData(){
//todo
    }
}

module.exports=FlightService;

/**
 * {
 * flightNumber,
 * airplaneId
 * departureAirportId
 * arrivalAirportId,
 * arrivalTime,
 * departureTime,
 * price
 * totalseats->airplane  (fetch total seats from airplane repo)
 * }
 * 
 */