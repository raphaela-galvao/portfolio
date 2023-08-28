import '../../styles/habilidades.css';
import CardHabilidade from '../Card/card-habilidade';
import HTMLIcon from '../../img/html5.png'
import CSSIcon from '../../img/css3.png'
import JavascriptIcon from '../../img/js.png'
import ReactIcon from '../../img/reactjs.png'
import NodeIcon from '../../img/nodejs.png'
import MySqlIcon from '../../img/mysql.png'

const skills = [
    {imagem: HTMLIcon},
    {imagem: CSSIcon},
    {imagem: JavascriptIcon},
    {imagem: ReactIcon},
    {imagem: NodeIcon},
    {imagem:MySqlIcon}
];

function Habilidades() {
    return (
        <div className="container-habilidades">
            <div className='conteudo-habilidades'>
                <div className='textos-habilidades'>
                    <h2>Habilidades</h2>
                    <p>Aqui estão as minhas principais tecnologias:</p>
                </div>
                {skills.map((skill, index) => (
                    <CardHabilidade
                        key={index}
                        imagem={skill.imagem}
                    />
                ))}
                
            </div>
        </div>
    );
}

export default Habilidades;