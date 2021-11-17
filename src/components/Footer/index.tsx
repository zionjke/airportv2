import React from 'react';
import styles from './Footer.module.scss'
import logo from '../../assets/KLO logo.png'


export const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_text}>
                <span>Дані для відображення взяті з ресурсу Aviation-Edge. ТОВ «Урбан Менеджмент» не несе жодної відповідальності за будь-які збитки, які можуть бути заподіяні в будь-якій формі за рахунок використання, неповноти або неправильності інформації, розміщеної на цьому табло.</span>
            </div>
            <div>
                <img src={logo} alt=""/>
            </div>
        </div>
    );
};
