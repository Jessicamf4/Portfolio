import React from "react";
import "./Projetos.css";

export default function Projetos(){
    return(
        <nav className="projetos">
            <h2 className="titulo">Projetos</h2>
            <div className="g1">
                <p>Bot Telegram <img src="imgJV.png" ></img></p>
                <p>Jogo da Memória</p>
                <p>Análise de Dados</p>
            </div>
        </nav>
    );
}