import React, {useEffect} from 'react';
import styles from './Header.module.scss'
import headerImage from '../../assets/Слой 9.png'
import moment from "moment";
import 'moment/locale/uk'


type Props = {};

export const Header: React.FC<Props> = () => {
    const [time,setTime] = React.useState(moment().locale("uk").format('HH:mm '))

    useEffect(() => {
        let interval = setInterval(() => {
            let currentTime = moment().locale("uk").format('HH:mm ')
            setTime(currentTime)
        },6000)
        return () => clearInterval(interval)
    }, [time])

    return (
        <div className={styles.header}>
            <span>
                {time}
            </span>
            <img src={headerImage} alt="Header Image"/>
        </div>
    );
};