import '../../styles/portfolio.css';
import QRCode from '../../img/qr-code.png'
import Card from '../Card';

const projetos = [
    {
        titulo: 'Gerador QR CODE',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum has been the industry',
        imagem: QRCode,
    },
    {
        titulo: 'Gerador QR CODE',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum has been the industry',
        imagem: QRCode,
    },
    {
        titulo: 'Gerador QR CODE',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum has been the industry',
        imagem: QRCode,
    },
    {
        titulo: 'Gerador QR CODE',
        descricao: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum has been the industry',
        imagem: QRCode,
    },
    // Adicione mais objetos de projetos conforme necessário
];

function Portfolio() {
    return (
        <div className='container-portfolio'>
            <div className='conteudo-portfolio' id='projetos'>
                <div className='titulo-portfolio'>
                    <h3>Projetos</h3>
                    <p>Conheça meus Portfólio :)</p>
                </div>
                <div className='cards-portfolio'>
                    {projetos.map((projeto, index) => (
                        <Card 
                            key={index}
                            titulo={projeto.titulo}
                            descricao={projeto.descricao}
                            imagem={projeto.imagem}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;