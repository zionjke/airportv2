import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import {AirlineType, AirportType, CityType, FLightType} from "../../types";
import moment from "moment";

type Props = {
    obj: FLightType
}

export const FlightItemDeparture: React.FC<Props> = (props) => {
    const {obj} = props
    const airport = useSelector<RootState, AirportType[]>(state => {
        return state.app.airports.filter(airport => airport.codeIataAirport === obj.arrival.iataCode)
    })
    const city = useSelector<RootState, CityType[]>(state => {
        return state.app.cities.filter(city => city.codeIataCity === airport[0].codeIataCity)
    })
    const airline = useSelector<RootState, AirlineType[]>(state => {
        return state.app.airlines.filter(airline => airline.codeIataAirline === obj.airline.iataCode)
    })

    let cityName;
    switch (city[0]?.nameCity) {
        case 'Chernovtsy':
            cityName = 'Chernivtsi'
            break;
        case 'Dnepropetrovsk':
            cityName = 'Dnipro'
            break;
        case 'Kharkov':
            cityName = 'Kharkiv'
            break;
        case 'Kiev':
            cityName = 'Kiyv'
            break;
        case 'Ivano-Frankovsk':
            cityName = 'Ivano-Frankivsk'
            break;
        case 'Kamenets-podolskiy':
            cityName = 'Kamianets-Podilskyi'
            break;
        case 'Kirovograd':
            cityName = 'Kropyvnytskyi'
            break;
        case 'Krivoy Rog':
            cityName = 'Kryvyi Rih'
            break;
        case 'Zaporozhye':
            cityName = 'Zaporizhzhia'
            break;
        case 'Rovno':
            cityName = 'Rivne'
            break;
        case 'Ternopol':
            cityName = 'Ternopil'
            break;
        case 'Nowy Dwor Mazowiecki':
            cityName = 'Nowy Dwor'
            break;
        case undefined:
            cityName = ''
            break;
        default:
            cityName = city[0].nameCity
    }

    return (
        <tr>
            <td>{obj.flight.iataNumber}</td>
            <td>{moment(obj.departure.scheduledTime).format('HH:mm')}</td>
            <td>{city.length && cityName}</td>
            <td>{airline.length && airline[0].nameAirline}</td>
            <td style={{textAlign: 'center'}}>{obj.departure.terminal}</td>
            <td>{obj.departure.gate}</td>
            <td>
                {
                    obj.departure.estimatedTime !== obj.departure.scheduledTime && obj.departure.estimatedTime !== null
                        ? `Очiкується о ${moment(obj.departure.estimatedTime).format('HH:mm')}`
                        : 'За розкладом'
                }
            </td>
        </tr>
    );
};
