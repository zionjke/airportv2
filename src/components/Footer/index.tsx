import React from 'react';
import styles from './Footer.module.scss'
import logo from '../../assets/KLO logo.png'


export const Footer: React.FC = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_text}>
                <span>
                    Шановні клієнти!
                    Інформація про прибуття та відправлення рейсів надається згідно даних ресурсу "Aviation-Edge" і надається в режимі тестової експлуатації та не є офіційним оголошенням. Вказана інформація потребує додаткового уточнення на веб-сайті https://kbp.aero та безпосередньо на табло «Міжнародного аеропорту Бориспіль». ТОВ "Урбан менеджмент" не несе відповідальності за будь-які збитки, які можуть бути заподіяні у зв’язку із використанням інформації розміщеної на цьому табло.
                    З повагою, адміністрація АЗС <span>&trade;KLO</span>
                </span>
            </div>
            <div>
                <img src={logo} alt=""/>
            </div>
        </div>
    );
};
