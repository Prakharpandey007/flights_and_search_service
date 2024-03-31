const { FlightRepository,AirplaneRepository } = require("../repository/index");
// const FlightRepository = require ('../repository/flight-repository');
const { compareTime } = require("../utils/helper");
class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }

  async createFlight(data) {
    try {
      // const airplaneRepository=new AirplaneRepository();

      if (!compareTime(data.arrivalTime, data.departureTime)) {
        throw { error: "arrival time not less than departure time" };
      }

      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );
      // console.log(airplane)
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
      // return airplane;
    } catch (error) {
      console.log("something went wrong in service layer");
      throw { error };
    }
  }
  async getFlightData(data) {
    //todo
    try {
      const flights = await this.flightRepository.getAllFlights(data);
      return flights;
    } catch (error) {
      console.log("something went wrong in service layer");
      throw { error };
    }
  }

  async getFlight(flightId){
    try {
      
      const flight =await this.flightRepository.getFlight(flightId);
    
      return flight;
      
    } catch (error) {
      console.log("something went wrong in service layer");
      throw { error };
    }
  }
 async updateFlight(flightId,data){
  try {
      
    const response =await this.flightRepository.updateFlights(flightId,data);
  
    return response;
    
  } catch (error) {
    console.log("something went wrong in service layer");
    throw { error };
  }
 }
}

module.exports = FlightService;

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
