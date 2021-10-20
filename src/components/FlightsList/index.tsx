import React from 'react';
import styles from './FlightsList.module.scss'
import arrivalIcon from '../../assets/arrival_yellow.svg'
import departurelIcon from '../../assets/departure_yellow.svg'
import {FlightItem} from "../FlightItem";

type Props = {};

export const FlightsList: React.FC<Props> = () => {
    return (
        <div className={styles.list}>
            <div className={styles.list_title}>
                <h2>ПРИЛІТ</h2>
                <img src={arrivalIcon} alt=""/>
            </div>
            <table className={styles.list_shedule}>
                <tr>
                    <th>{'Рейс'}</th>
                    <th>{ 'Час'}</th>
                    <th>{ 'Призначення'}</th>
                    <th>{ 'Перевізник'}</th>
                    <th>{ 'Термінал'}</th>
                    <th>{'Статус'}</th>
                </tr>
                <FlightItem/>
                <FlightItem/>
                <FlightItem/>
                <FlightItem/>
                <FlightItem/>
                <FlightItem/>
                <FlightItem/>
                <FlightItem/>
                <FlightItem/>
                <FlightItem/>
                <FlightItem/>
                <FlightItem/>
                <FlightItem/>
                <FlightItem/>
                <FlightItem/>
                <FlightItem/>
                <FlightItem/>
                <FlightItem/>
                <FlightItem/>
                <FlightItem/>
                <FlightItem/>
            </table>
        </div>
    );
};