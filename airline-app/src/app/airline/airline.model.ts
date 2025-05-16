export interface Flight {
    id: string;
    departureAirport: string;
    departureCountry: string;
    departureCity: string;
    arrivalAirport: string;
    arrivalCountry: string;
    arrivalCity: string;
    departureTime: string;
    flightDuration: number;
    image: string;
  }
  
  export interface Airline {
    id: string;
    airlineName: string;
    country: string;
    city: string;
    address: string;
    identityColor: string;
    slogan: string;
    // flights puede omitirse para vista general
  }
  
  export interface AirlineDetail extends Airline {
    flights: Flight[];
  }