import React from "react";
import "./Projetos.css";
import JV from "./../img/imgJV.png"

export default function Projetos(){
    return(
        <nav className="projetos">
            <h2 className="titulo">Projetos</h2>

            <div className="g1">
                <div className="container">
                    <p className="tituloProjeto">Bot do Telegram </p> 
                    <img className="img2" src={JV} />
                    <button>Site</button>
                </div>
                    <p className="quebra">.</p>
                <div className="container">
                    <p className="tituloProjeto">Jogo da Memória</p>
                    <img className="img2" src={JV} />
                    <button>Site</button>
                </div>
                <p className="quebra">.</p>

                <div className="container">
                    <p className="tituloProjeto">Análise de Dados</p>
                    <img className="img2" src={JV} />
                    <button>Site</button>
                </div>
                <p className="quebra">.</p>

                <div className="container">
                    <p className="tituloProjeto">Bot Telegram </p> 
                    <img className="img2" src={JV} />
                    <button>Site</button>
                </div>
                <p className="quebra">.</p>

                <div className="container">
                    <p className="tituloProjeto">Jogo da Memória</p>
                    <img className="img2" src={JV} />
                    <button>Site</button>
                </div>
                <p className="quebra">.</p>
                
                <div className="container">
                    <p className="tituloProjeto">Análise de Dados</p>
                    <img className="img2" src={JV} />
                    <button>Site</button>
                </div>
            </div>
        </nav>
    );
}