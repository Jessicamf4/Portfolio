import React from "react";
import "./Sobre.css";

import My from "./../img/fotom.jpg"

export default function Sobre(){
    return(
        <nav className="sobre">
          <br></br>
        <div className="square">
          <img className="img1" src={My} /></div>
        <p className="textSobre">
        Atualmente, estou no 3º período de Ciência da Computação. Faço estágio com uma Equipe de Quality Assurance, na empresa 
        SUporte Tecnologias. Meu maior objetivo no momento é começar a atuar na área de desenvolvimento de Software, a fim de que isso 
        aconteça me dedico constantemente para me tornar uma profissional cada vez mais qualificada e preparada. Meu grande fascínio pela 
        tecnologia surgiu quando tive a oportunidade de participar da <a href="https://www.youtube.com/watch?v=Vn6Xg6plHk8&ab_channel=J%C3%A9ssicaMarques" target="_blank"> Olimpíada Brasileira de Robótica</a>. Desde então, me envolvo cada vez mais com esta área tão pertinente
        e significante para o mundo.
        </p>   

        </nav>
    );
}