import axios from "axios";
import {AirlineType, AirportType, CityType, FLightType} from "../types";

const instance = axios.create({
    baseURL: 'https://aviation-edge.com/v2/public/'
})

export const api = {
    fetchArrivalFlights() {
        return instance.get<FLightType[]>(`timetable?key=${process.env.REACT_APP_API_KEY}&iataCode=KBP&arr_terminal=D&type=arrival`)
    },
    fetchDepartureFlights() {
        return instance.get<FLightType[]>(`timetable?key=${process.env.REACT_APP_API_KEY}&iataCode=KBP&dep_terminal=D&type=departure`)
    },
    fetchAirports() {
        return instance.get<AirportType[]>(`airportDatabase?key=${process.env.REACT_APP_API_KEY}`)
    },
    fetchAirlines() {
        return instance.get<AirlineType[]>(`airlineDatabase?key=${process.env.REACT_APP_API_KEY}`)
    },
    fetchCitys() {
        return instance.get<CityType[]>(`cityDatabase?key=${process.env.REACT_APP_API_KEY}&lang=uk`)
    }
}
