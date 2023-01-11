import React from "react";
import "./Sobre.css";
import Img from 'react-image';

export default function Sobre(){
    return(
        <nav className="sobre">
          <br></br>
        <div className="square"><img src={my.jpg} /></div>
        <p className="textSobre">
        Meu objetivo é conseguir experiência na área de desenvolvimento e, dessa forma, poder colocar todo o meu conhecimento adquirido até então com a programação. Além de almejar aprender ferramentas e técnicas novas e de poder contribuir para o crescimento pessoal e profissional tanto meu quanto da empresa
        </p>   

        </nav>
    );
}