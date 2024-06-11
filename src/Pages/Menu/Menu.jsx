import React from "react";
import styles from './Menu.module.css';
import { Link } from "react-router-dom";

const Menu = ({ isVisible }) => {
    return (
        <div className={`${styles.containerMenu} ${isVisible ? styles.menuVisible : ''}`}>
            <div className={styles.perfil}>
                <div className={styles.icone}></div>
                <p>Gabriel Antunes</p>
            </div>
            <nav><a href="/administrador">Home</a></nav>
            <nav><a href="/agendamentos">Agendamentos</a></nav>
            <nav><a href="#">Profissionais</a></nav>
            <nav><a href="#">Configurações</a></nav>
            <Link  style={{ position: "absolute", bottom: "30px" }} to="/home">Sair</Link>
        </div>
    );
};

export default Menu;
