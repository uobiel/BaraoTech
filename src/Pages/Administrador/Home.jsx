import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import styles from './Home.module.css';
import Header from '../Header/Header';

const HomeAdm = () => {
    useEffect(() => {
        ScrollReveal().reveal('.effect', {
            delay: 1,
            distance: '100px',
            easing: 'ease-in-out',
            origin: 'top',
            duration: 1000,
            reset: false
        });
    }, []);

    return (
        <>
            <Header />
            <div className={`container-fluid ${styles.containerCustom}`}>
                <div className={styles.mensagem}>
                    <h1 className="effect">Boa noite, Gabriel!</h1>
                    <h3 className="effect">Acompanhe os agendamentos <br />acessando o menu Agendamentos</h3>
                </div>
            </div>
        </>
    );
};

export default HomeAdm;
