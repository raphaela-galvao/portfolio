import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import '../../styles/header.css';

function Header() {
    return (
        <div className="container-header">
            <div className='conteudo-header'>
                <ul>
                    <li>
                        <Link
                            activeClass="active"
                            to="sobre-mim"
                            spy={true}
                            smooth={true}
                            offset={-70} // Ajuste o deslocamento conforme necessário
                            duration={500}
                        >
                            Sobre mim
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="projetos"
                            spy={true}
                            smooth={true}
                            offset={-70} // Ajuste o deslocamento conforme necessário
                            duration={500}
                        >
                            Projetos
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="tecnologias"
                            spy={true}
                            smooth={true}
                            offset={-70} // Ajuste o deslocamento conforme necessário
                            duration={500}
                        >
                            Tecnologias
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="contato"
                            spy={true}
                            smooth={true}
                            offset={-70} // Ajuste o deslocamento conforme necessário
                            duration={500}
                        >
                            Contato
                        </Link>
                    </li>
                    <li>
                        <button>Curriculo</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
