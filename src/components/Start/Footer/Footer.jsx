import React, { useState } from 'react';

import styles from './Footer.module.css';
import sprite from '../../../images/sprite.svg';
import Team from './Team/Team';

export default function Footer(){
  const [isOpened, setIsOpened] = useState(false);
  const handleToggleModal = () => setIsOpened(!isOpened);

return(
    <footer className={styles.footer}>
        <div className={styles.footer__container}>
            <p className={styles.footer__text}>
                {'с 2023 | All Rights Reserved | Developed with '} 
            <svg width="14" height="13">
                <use href={sprite+'#icon-heart'}></use>
            </svg>
                {' by '} 
            <span className={styles.footer__text__students}  onClick={handleToggleModal}>
                {'GoIT Students'}
            </span>
            </p>
        </div>
        {isOpened && <Team onCloseModal={handleToggleModal} />}
    </footer>
);}