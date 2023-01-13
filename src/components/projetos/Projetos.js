import React from "react";
import "./Projetos.css";
import JV from "./../img/jogoVelha.jpg"
import JM from "./../img/memoria.jpg"
import Cal from "./../img/calculadora2.jpg"
import Dados from "./../img/dados.jpg"
import Lista from "./../img/listaTarefas.jpg"
import Proj from "./../img/projRe.jpg"

export default function Projetos(){
    return(
        <nav className="projetos">
            <h2 className="titulo">Projetos</h2>

            <div className="g1">
                <div className="container">
                    <p className="tituloProjeto">Jogo da Velha </p> 
                    <img className="img2" src={JV} />
                    <button href="https://jessicamf4.github.io/Calculadora/" target="_blank">Site</button>
                </div>
                    <p className="quebra">.</p>
                <div className="container">
                    <p className="tituloProjeto">Jogo da Memória</p>
                    <img className="img2" src={JM} />
                    <button href="https://jessicamf4.github.io/Calculadora/" target="_blank">Site</button>
                </div>
                <p className="quebra">.</p>

                <div className="container">
                    <p className="tituloProjeto">Análise de Dados</p>
                    <img className="img2" src={Dados} />
                    <button href="https://github.com/Jessicamf4/Analise-de-Dados" target="_blank">Site</button>
                </div>
                <p className="quebra">.</p>

                <div className="container">
                    <p className="tituloProjeto">Calculadora </p> 
                    <img className="img2" src={Cal} />
                    <button href="https://jessicamf4.github.io/Calculadora/" target="_blank">Site</button>
                </div>
                <p className="quebra">.</p>

                <div className="container">
                    <p className="tituloProjeto">Lista de Tarefas</p>
                    <img className="img2" src={Lista} />
                    <button href="https://jessicamf4.github.io/Calculadora/" target="_blank">Site</button>
                </div>
                <p className="quebra">.</p>
                
                <div className="container">
                    <p className="tituloProjeto">Projeto Reciclagem</p>
                    <img className="img2" src={Proj} />
                    <button href="https://jessicamf4.github.io/Projeto-Reciclagem/" target="_blank">Site</button>
                </div>
            </div>
        </nav>
    );
}

//https://github.com/Jessicamf4/Buscador-Cep

//https://github.com/Jessicamf4/Bot-Telegram