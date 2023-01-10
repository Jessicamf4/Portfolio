import React from "react";
import "./Cabecalho.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";


export default function Cabecalho(){
    return(
        <nav className="navbar">
            <span>Julia Marques, 18 anos</span>
            <a className="buttonGit" href="http://google.com" target="_blank">
                <AiFillGithub size={25} color="FFF"/>
            </a>   

            <a className="buttonLinke" href="http://google.com" target="_blank">
                <AiFillLinkedin size={25} color="FFF"/>
            </a>    
        </nav>
    );
}