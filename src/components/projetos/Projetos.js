import React from "react";

import "./Projetos.css";
import JV from "./../img/jogoVelha.jpg"
import JM from "./../img/memoria.jpg"
import Cal from "./../img/calculadora2.jpg"
import Dados from "./../img/dados.jpg"
import Lista from "./../img/listaTarefas.jpg"
import Proj from "./../img/projRe.jpg"
import Bot from "./../img/bot.jpg"

export default function Projetos(){
    return(
        <nav className="projetos">
            <section id="Projetos"><h2 className="titulo">Projetos</h2></section>

        
            <div className="g1">
            <div className="container">
                    <p className="tituloProjeto">Bot Telegram </p> 
                    <img className="img2" src={Bot} />
                    <button><a className="link" href="https://github.com/Jessicamf4/Bot-Investimento-Telegram" target='_blank'>Site</a></button>
                </div>
                    <p className="quebra">.</p>

                <div className="container">
                    <p className="tituloProjeto">Buscador de CEP</p>
                    <img className="img2" src={JM} />
                    <button><a className="link" href="https://github.com/Jessicamf4/Buscador-Cep" target='_blank'>Site</a></button>
                </div>
                <p className="quebra">.</p>

                <div className="container">
                    <p className="tituloProjeto">Jogo da Velha </p> 
                    <img className="img2" src={JV} />
                    <button><a className="link" href="https://jessicamf4.github.io/Jogo-da-Velha/" target='_blank'>Site</a></button>
                </div>
                    <p className="quebra">.</p>

                <div className="container">
                    <p className="tituloProjeto">Jogo da Memória</p>
                    <img className="img2" src={JM} />
                    <button><a className="link" href="https://jessicamf4.github.io/Jogo-da-Memoria/" target='_blank'>Site</a></button>
                </div>
                <p className="quebra">.</p>

                <div className="container">
                    <p className="tituloProjeto">Análise de Dados</p>
                    <img className="img2" src={Dados} />
                    <button><a className="link" href="https://github.com/Jessicamf4/Analise-de-Dados" target='_blank'>Site</a></button>
                </div>
                <p className="quebra">.</p>

                <div className="container">
                    <p className="tituloProjeto">Calculadora </p> 
                    <img className="img2" src={Cal} />
                    <button><a className="link" href="https://jessicamf4.github.io/Calculadora" target='_blank'>Site</a> </button>
                </div>
                <p className="quebra">.</p>

                <div className="container">
                    <p className="tituloProjeto">Lista de Tarefas</p>
                    <img className="img2" src={Lista} />
                    <button> <a className="link" href="https://jessicamf4.github.io/Dark-Mode/" target='_blank'>Site</a></button>
                </div>
                <p className="quebra">.</p>
                
                <div className="container">
                    <p className="tituloProjeto">Controle de Estoque</p>
                    <img className="img2" src={Proj} />
                    <button><a className="link" href="https://github.com/Jessicamf4/controleEstoque" target='_blank'>Site</a> </button>
                </div>
            </div>
        </nav>
    );
}

//Tela de Login (python)

//Controle de estoque python

// Dashboard(react)