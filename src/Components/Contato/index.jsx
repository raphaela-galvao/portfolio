import '../../styles/contato.css';

function Contato() {
    return (
        <div className='container-contato'>
            <div className='conteudo-contato' id='contato'>
                <h3>Vamos conversar sobre <span>o seu projeto!</span></h3>
                <form>
                    <label>Nome:</label>
                    <input type='text'/>
                    <label>Email:</label>
                    <input type='email'/>
                    <label>Sua ideia:</label>
                    <textarea name="mensagem" cols="50" rows="10" wrap="hard"></textarea>

                    <div className='btn-contato'>
                        <button type='submit'>Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contato;