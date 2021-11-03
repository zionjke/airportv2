import * as React from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {FLightType} from "../../types";
import moment from "moment";
import {fetchDepartureFlights} from "../../store/appReducer";
import styles from "../Arrival/Arrival.module.scss";
import departureIcon from "../../assets/departure_yellow.svg";
import {FlightItemDeparture} from "../../components/FlightItemDeparture";

type Props = {

};

export const Departure = (props: Props) => {
    const [count, setCount] = React.useState<number>(1)
    const [page,setPage] = React.useState<boolean>(false)
    const departureFlights = useSelector<RootState, FLightType[]>(state => {
        return state.app.departureFlights.filter(flight => flight.departure.gate !== null)
    })
    const dispatch = useDispatch()

    let now = moment().format('YYYY-MM-DDTHH:mm:ss.SSS')
    let filteredFlights = departureFlights.filter(item => item.departure.scheduledTime >= now).slice(0, 46)
    let FLIGHT_PER_PAGE = 23;
    let startIndex = (count - 1) * FLIGHT_PER_PAGE
    let selectedFlights = filteredFlights.slice(startIndex, startIndex + FLIGHT_PER_PAGE)


    useEffect(() => {
        const id = setInterval(() => {
            dispatch(fetchDepartureFlights())
        }, 300000);

        dispatch(fetchDepartureFlights())

        return () => clearInterval(id);
    }, [dispatch])

    useEffect(() => {

        const intervalId = setInterval(() => {
            if (filteredFlights.length > 23) {
                if (startIndex === FLIGHT_PER_PAGE) {
                    setCount(1)
                } else {
                    setCount(count + 1)
                }
            }
            setPage(!page)
        }, 30000)

        return () => clearInterval(intervalId)

    }, [page])


    return (
        <div className={styles.list}>
            <div className={styles.list_title}>
                <h2>ВІДЛІТ</h2>
                <img src={departureIcon} alt=""/>
            </div>
            <table className={styles.list_shedule}>
                <tr>
                    <th>{'Рейс'}</th>
                    <th>{'Час'}</th>
                    <th>{'Призначення'}</th>
                    <th>{'Перевізник'}</th>
                    <th>{'Термінал'}</th>
                    <th>{'Гейт'}</th>
                    <th>{'Статус'}</th>
                </tr>
                {
                    selectedFlights.map((obj, index) => <FlightItemDeparture key={index} obj={obj}/>)
                }
            </table>
        </div>
    );
};
