import '../../styles/card.css';
import GitPreto from '../../img/git-preto-card.png'
import GitBranco from '../../img/git-branco-card.png'
import Visualizar from '../../img/visualizar-preto-card.png'
import VisualizarBranco from '../../img/visualizar-branco-card.png'

const Card = ({imagem, titulo, descricao}) => {
    return(
        <div className='container-card'>
            <div className='conteudo-card'>
                {/* imagem */}
                <div className='img-card'> 
                    <img src={imagem} alt={titulo}/>
                </div>
                {/* textos */}
                <div className='texto-card'>
                    <h4>{titulo}</h4>
                    <p>{descricao}</p>
                </div>
                {/* icones */}
                <div className='icones-card'>
                    <button>
                        <img className='icone-preto' src={Visualizar}/>
                        <img className='icone-branco' src={VisualizarBranco}/>
                        <span>Visualizar</span>
                    </button>
                    <button>
                        <img className='icone-preto' src={GitPreto}/>
                        <img className='icone-branco' src={GitBranco}/>
                        <span>Git</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Card