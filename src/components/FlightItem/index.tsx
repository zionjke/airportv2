import React from 'react';
import {AirlineType, AirportType, ArrivalFlightType, CityType} from "../../types";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import moment from "moment";


type Props = {
    obj: ArrivalFlightType
};

export const FlightItem: React.FC<Props> = (props) => {

    const {obj} = props
    const airport = useSelector<RootState, AirportType[]>(state => {
        return state.app.airports.filter(airport => airport.codeIataAirport === obj.departure.iataCode)
    })
    const city = useSelector<RootState, CityType[]>(state => {
        return state.app.cities.filter(city => city.codeIataCity === airport[0].codeIataCity)
    })
    const airline = useSelector<RootState, AirlineType[]>(state => {
        return state.app.airlines.filter(airline => airline.codeIataAirline === obj.airline.iataCode)
    })


    return (
        <tr>
            <td>{obj.flight.iataNumber}</td>
            <td>{moment(obj.arrival.scheduledTime).format('HH:mm')}</td>
            <td>{city.length && city[0].nameCity}</td>
            <td>{airline.length && airline[0].nameAirline}</td>
            <td>{obj.arrival.terminal}</td>
            <td>
                {
                    obj.arrival.estimatedTime !== null
                        ? `Очiкується о ${moment(obj.arrival.estimatedTime).format('HH:mm')}`
                        : 'За розкладом'

                }
            </td>
        </tr>
    );
};
