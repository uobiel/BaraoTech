import React, { useState } from "react";
import Menu from '../Menu/Menu';
import styles from './Header.module.css'; // Certifique-se de que o caminho está correto

const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <>
            <header>
                <div className={styles.left}>
                    <div className={styles.headerImg}></div>
                    <div className={styles.menus}>
                        <p>Gabriel Antunes</p>
                    </div>
                </div>
                <button className={`btn btn-primary ${styles.buttonCustom}`} type="button" onClick={toggleMenu}>
                    <i className="bi bi-list"></i>
                </button>
            </header>
            <Menu isVisible={menuVisible} />
        </>
    );
};

export default Header;
