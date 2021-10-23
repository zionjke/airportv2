import React, {useEffect} from 'react';
import styles from './FlightsList.module.scss'
import arrivalIcon from '../../assets/arrival_yellow.svg'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from '../../store';
import {ArrivalFlightType} from "../../types";
import {fetchArrivalFlights} from "../../store/appReducer";
import {FlightItem} from "../FlightItem";
import moment from "moment";


type Props = {};

export const FlightsList: React.FC<Props> = (props) => {
    const [count, setCount] = React.useState<number>(1)
    const [page,setPage] = React.useState<boolean>(false)
    const arrivalFlights = useSelector<RootState, ArrivalFlightType[]>(state => state.app.arrivalFlights)
    const dispatch = useDispatch()

    let now = moment().subtract('10', "minutes").format('YYYY-MM-DDTHH:mm:ss.SSS')
    let filteredFlights = arrivalFlights.filter(item => item.arrival.scheduledTime >= now).slice(0, 42)
    let FLIGHT_PER_PAGE = 21;
    let startIndex = (count - 1) * FLIGHT_PER_PAGE
    let selectedFlights = filteredFlights.slice(startIndex, startIndex + FLIGHT_PER_PAGE)

    console.log(selectedFlights)

    useEffect(() => {
        const id = setInterval(() => {
            dispatch(fetchArrivalFlights())
        }, 300000);

        dispatch(fetchArrivalFlights())

        return () => clearInterval(id);
    }, [dispatch])

    useEffect(() => {

        const intervalId = setInterval(() => {
            if (filteredFlights.length > 21) {
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
                    selectedFlights.map((obj, index) => <FlightItem key={index} obj={obj}/>)
                }
            </table>
        </div>
    );
};
