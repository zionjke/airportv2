import React from 'react';
import styles from './Footer.module.scss'
import logo from '../../assets/KLO logo.png'


export const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_text}>
                <span>*Текст отказа от ответсвенности</span>
            </div>
            <img src={logo} alt=""/>
        </div>
    );
};
