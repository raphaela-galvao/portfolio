import '../../styles/header.css';

function Header() {
    return (
        <div className="container-header">
            <div className='conteudo-header'>
                <ul>
                    <li>Home</li>
                    <li>Sobre mim</li>
                    <li>Projetos</li>
                    <li>Contato</li>
                    <li>
                        <button>Curriculo</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;