import React from 'react';

import styles from './Footer.module.css';
import logo from '../images/octopus.png';

class Footer extends React.Component {
    render(){
        return (
            <div className={styles.container}>
                <a href="https://www.octopusagencia.com.ar">Desarrollado por</a>
                <img className={styles.logo} src={logo} alt="Logo" />
            </div>
        )
    }
}

export default Footer;