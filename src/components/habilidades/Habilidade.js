import React from "react";
import "./Habilidades.css";
import { DiPython, DiJava,DiJavascript1,DiNodejsSmall,DiReact,DiHtml5,DiCss3,DiMysql } from "react-icons/di";



export default function Habilidades(){
    return(
        
        <nav className="frame">
            <h2 className="Hard">HardSkills </h2>

            <div className="top">
                
                    <p className="circulo1"><DiPython size={25} color="414535"/>   Python</p>
                    <p className="quebra">.</p>
                    <p className="circulo1"><DiJava size={25} color="414535"/>   Java</p>
                    <p className="quebra">.</p>
                    <p className="circulo1"><DiJavascript1 size={25} color="414535"/>   JavaScript</p>
                    <p className="quebra">.</p>
                    <p className="circulo1"><DiNodejsSmall size={25} color="414535"/>   Node.js</p>
                    <p className="quebra">.</p>
                    <p className="circulo1"><DiReact size={25} color="414535"/>   React</p>
                    <p className="quebra">.</p>
                    <p className="circulo1"><DiHtml5 size={25} color="414535"/>   HTML</p>   
                    <p className="quebra">.</p>
                    <p className="circulo1"><DiCss3 size={25} color="414535"/>   CSS</p>
                    <p className="quebra">.</p>
                    <p className="circulo1"><DiMysql size={25} color="414535"/>   MySQL</p>
                    <p className="quebra">.</p>         
        </div>
        </nav>
    );
}