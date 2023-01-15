import React from "react";
import "./Menu.css";

export default function Menu(){
    return(
        <nav className="menu">
            <p><a className="text" href="#Sobre">Sobre</a></p>
            <p><a className="text" href="#Habilidades">Habilidades</a></p>
            <p><a className="text" href="#Experiência">Experiência</a></p>
            <p><a className="text" href="#Projetos">Projetos</a></p>
        </nav>
    );
}