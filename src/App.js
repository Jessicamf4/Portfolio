import React from 'react';
import './style.css';
import Cabecalho from './components/cabecalho/Cabecalho'

import { FaBeer } from 'react-icons/fa';
import Menu from './components/menu/Menu';
import Sobre from './components/sobre/Sobre';
import Habilidades from './components/habilidades/Habilidade';
import Projetos from './components/projetos/Projetos';

class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FaBeer />? </h3>
  }
}


export default function App(){

  return (
    <div className='App'>
      <Cabecalho />
      <Menu />
      <Sobre />
      <Habilidades />
      <Projetos />
      <div className='container'>
      </div>
    </div>
  );
}