import '../../styles/card-habilidade.css';

const CardHabilidade = ({imagem}) => {
    return(
        <div className='container-card-habilidade'>
            <div className='conteudo-card-habilidade'> 
                <img src={imagem} alt='aa'/>
            </div>
        </div>
    )
}
export default CardHabilidade;