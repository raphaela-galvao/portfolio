import React from 'react';
import '../../styles/habilidades.css';
import CardHabilidade from '../Card/card-habilidade';
import HTMLIcon from '../../img/html5.png'
import CSSIcon from '../../img/css3.png'
import JavascriptIcon from '../../img/js.png'
import ReactIcon from '../../img/reactjs.png'
import NodeIcon from '../../img/nodejs.png'
import MySqlIcon from '../../img/mysql.png'

import PythonIcon from '../../img/python.png'
import AutomateIcon from '../../img/automate.png'

const webSkills = [
    {imagem: HTMLIcon},
    {imagem: CSSIcon},
    {imagem: JavascriptIcon},
    {imagem: ReactIcon},
    {imagem: NodeIcon},
    {imagem: MySqlIcon}
];

const rpaSkills = [
    {imagem: PythonIcon},
    {imagem: AutomateIcon}
];

function Habilidades() {
    return (
        <div className='container-habilidades'>
            <div className='conteudo-habilidades' id='tecnologias'>
                <div className='textos-habilidades'>
                    <h3>Tecnologias</h3>
                    <p>Aqui estão as minhas principais habilidades</p>
                </div>
                
                <h3>Desenvolvimento Web</h3>
                <div className='cards-habilidades'>
                    {webSkills.map((skill, index) => (
                        <CardHabilidade
                            key={index}
                            imagem={skill.imagem}
                        />
                    ))}
                </div>

                <h3>Automação de Processos (RPA)</h3>
                <div className='cards-habilidades'>
                    {rpaSkills.map((skill, index) => (
                        <CardHabilidade
                            key={index}
                            imagem={skill.imagem}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Habilidades;
