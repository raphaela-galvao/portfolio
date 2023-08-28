import '../../styles/introducao.css';
import icon from '../../img/icon2.jpeg'
import Linkedin from '../../img/linkedin.png'
import Git from '../../img/github.png'

function Introducao() {
    return (
        <div className="container-introducao">
            <div className='conteudo-introducao'>
                <div className='textos-container'>
                    <h1>Olá<br/>Sou a <span className="introducao-nome">Raphaela</span>,<br/>Desenvolvedora FullStack  <span role="img" aria-label="Emoji menina no computador" style={{ fontSize: '2rem', color: 'white' }}>
                        👩‍💻
                    </span></h1>
                    <button className='btn-contato-introducao'>Entrar em contato</button>
                </div>
                
                <div className="imagem-redonda-container">
                    <img src={icon} alt='Imagem da desenvolvedora'/>
                </div>
            </div>
            
            <div className='icons'>
                <img src={Linkedin}/>
                <img src={Git}/>
            </div>
        </div>
    );
}

export default Introducao;