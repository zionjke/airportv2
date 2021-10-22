import React, {useEffect} from 'react';
import styles from './FlightsList.module.scss'
import arrivalIcon from '../../assets/arrival_yellow.svg'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from '../../store';
import {ArrivalFlightType} from "../../types";
import {fetchArrivalFlights} from "../../store/appReducer";
import {FlightItem} from "../FlightItem";


type Props = {};

export const FlightsList: React.FC<Props> = (props) => {
    const arrivalFlights = useSelector<RootState, ArrivalFlightType[]>(state => state.app.arrivalFlights)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchArrivalFlights())
    }, [])

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
                {arrivalFlights.map(obj => <FlightItem obj={obj}/>)}
            </table>
        </div>
    );
};
