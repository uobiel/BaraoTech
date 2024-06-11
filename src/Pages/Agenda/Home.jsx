import { React, useEffect } from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
    useEffect(() => {
        ScrollReveal().reveal('.effect', {
            delay: 0,
            distance: '200px',
            easing: 'ease-in-out',
            origin: 'left',
            duration: 1000,
            reset: false
        });
    }, []);


    return (
        <>
            <header className={`${styles.header}`}>
                <div className={`${styles.left} effect`}>
                    <div className={styles.headerImg}>
                    </div>
                    <div className={styles.menus}>
                        <Link className={styles.font} to="/login">Administrador</Link>
                    </div>
                </div>
                <div className={`${styles.agendaHeader} effect`}>
                    <input type="button" className={styles.buttonAgenda} value="Agendar horário" />
                </div>
            </header>
            <main>
                <div className={styles.imagemPrincipal}>
                </div>
                <div className={`${styles.container} effect`}>
                    <h1>ESTILO É UM REFLEXO DA SUA ATITUDE E SUA <br />PERSONALIDADE</h1>
                    <h2 style={{ marginTop: "30px", fontSize: "20px" }}>Horário de funcionamento: 09:00 às 18:00</h2>
                    <button style={{ marginTop: "40px" }} className={styles.buttonAgenda}>Agendar horário</button>
                </div>
            </main>
        </>
    )
}

export default Home;
