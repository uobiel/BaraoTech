import { React, useEffect, useRef } from "react";
import ScrollReveal from 'scrollreveal';
import styles from './Login.module.css';
import { useNavigate } from "react-router-dom";
import { exibeToast } from "../Toast";

const Login = () => {
    const inputCpf = useRef();
    const inputSenha = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        ScrollReveal().reveal('.effect', {
            delay: 0,
            distance: '200px',
            easing: 'ease-in-out',
            origin: 'left',
            duration: 500,
            reset: false
        });
    }, []);

    const usuario = {
        cpf: "05452208070",
        senha: "261213"
    }

    const validaLogin = () => {
        const cpf = inputCpf.current.value;
        const senha = inputSenha.current.value;

        if (cpf === usuario.cpf && senha === usuario.senha) {
            navigate('/administrador');
        } else if(cpf === '' || senha === ''){
            exibeToast("error", "Preencha todos os campos.");
        } else {
            exibeToast("error", "Credenciais incorretas.");
        }
    }

    return (
        <>
            <div className={`container-fluid ${styles.containerCustom}`}>
                <form className="effect">
                    <h1>Acesse sua conta</h1>
                    <input type="text" name="cpf" id="cpf" placeholder="Digite seu CPF" ref={inputCpf} autoComplete="off"/>
                    <input type="password" name="senha" id="senha" placeholder="Digite sua senha" ref={inputSenha} autoComplete="off"/>
                    <div className={styles.containerBotoes}>
                        <input className={styles.buttonLoginPage} type="button" value="Voltar" onClick={() => navigate('/home')}/>
                        <input className={styles.buttonLoginPage} type="button" value="Acessar" onClick={validaLogin} />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login