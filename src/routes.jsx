import React from "react";
import Home from './Pages/Agenda/Home'
import HomeAdm from './Pages/Administrador/Home'
import Agendamentos from "./Pages/Agendamentos/Agendamentos";
import Login from "./Pages/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/administrador" element={<HomeAdm/>}/>
                <Route path="/agendamentos" element={<Agendamentos/>}/>
                <Route path="login" element={<Login/>}/>
            </Routes>
        </Router>        
    )
}

export default AppRoutes