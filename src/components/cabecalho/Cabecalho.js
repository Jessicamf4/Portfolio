import React from "react";
import "./Cabecalho.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";


export default function Cabecalho(){
    return(
        <nav className="navbar">
            <span className="nome">Jéssica Marques, 18 anos</span>
            <a className="buttonGit" href="https://github.com/Jessicamf4" target="_blank">
                <AiFillGithub size={25} color="FFF"/>
            </a>   

            <a className="buttonLinke" href="https://www.linkedin.com/in/jéssica-marques-fialho/" target="_blank">
                <AiFillLinkedin size={25} color="FFF"/>
            </a>    
        </nav>
    );
}

