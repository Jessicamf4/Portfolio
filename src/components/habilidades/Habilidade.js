import React from "react";
import "./Habilidades.css";
import { DiPython, DiJava,DiJavascript1,DiNodejsSmall,DiReact,DiHtml5,DiCss3,DiMysql } from "react-icons/di";



export default function Habilidades(){
    return(
        
        <div className="frame">
            <h2 className="Hard">HardSkills </h2>
            <br></br>
<div className="top">
            <div className="topicos">
            <p className="circulo1"><DiPython size={25} color="414535"/>   Python</p>
            <p className="circulo1"><DiJava size={25} color="414535"/>   Java</p>
            <p className="circulo1"><DiJavascript1 size={25} color="414535"/>   JavaScript</p>
            </div>

           <div className="topicos2">
            <p className="circulo1"><DiNodejsSmall size={25} color="414535"/>   Node.js</p>
            <p className="circulo1"><DiReact size={25} color="414535"/>   React</p>
            <p className="circulo1"><DiHtml5 size={25} color="414535"/>   HTML</p>   
            </div>
            
            <div className="topicos3">
            <p className="circulo1"><DiCss3 size={25} color="414535"/>   CSS</p>
            <p className="circulo1"><DiMysql size={25} color="414535"/>   MySQL</p>
            </div>
           
        </div>

</div>
    );
}