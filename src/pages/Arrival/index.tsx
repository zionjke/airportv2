import * as React from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {FLightType} from "../../types";
import moment from "moment";
import {fetchArrivalFlights} from "../../store/appReducer";
import styles from './Arrival.module.scss'
import arrivalIcon from "../../assets/arrival_yellow.svg";
import {FlightItemArrival} from "../../components/FlightItemArrival";

type Props = {

};

export const Arrival: React.FC<Props> = () => {
    const [count, setCount] = React.useState<number>(1)
    const [page,setPage] = React.useState<boolean>(false)
    const arrivalFlights = useSelector<RootState, FLightType[]>(state => state.app.arrivalFlights)
    const dispatch = useDispatch()

    let now = moment().subtract('10', "minutes").format('YYYY-MM-DDTHH:mm:ss.SSS')
    let filteredFlights = arrivalFlights.filter(item => item.arrival.scheduledTime >= now).slice(0, 46)
    let FLIGHT_PER_PAGE = 23;
    let startIndex = (count - 1) * FLIGHT_PER_PAGE
    let selectedFlights = filteredFlights.slice(startIndex, startIndex + FLIGHT_PER_PAGE)


    useEffect(() => {
        const id = setInterval(() => {
            dispatch(fetchArrivalFlights())
        }, 300000);

        dispatch(fetchArrivalFlights())

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
                <h2>ПРИЛІТ</h2>
                <img src={arrivalIcon} alt=""/>
            </div>
            <table className={styles.list_shedule}>
                <tr>
                    <th>{'Рейс'}</th>
                    <th>{'Час'}</th>
                    <th>{'Призначення'}</th>
                    <th>{'Перевізник'}</th>
                    <th>{'Термінал'}</th>
                    <th>{'Статус'}</th>
                </tr>
                {
                    selectedFlights.map((obj, index) => <FlightItemArrival key={index} obj={obj}/>)
                }
            </table>
        </div>
    );
};
