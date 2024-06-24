import PropTypes from 'prop-types';
import './cards.css';

export default function Cards({ titulo, preco, descricao, imagem }) {
    return (
        <div className="cards">
            {imagem && <img src={imagem} alt="prato" className="cards-imagem" />}
            <div className="cards-corpo">
                <h2 className="cards-titulo">{titulo}</h2>
                <p className="cards-descricao">{descricao}</p>
                <p className="cards-preco">{preco}</p>
            </div>
        </div>
    );
}

Cards.propTypes = {
    titulo: PropTypes.string.isRequired,
    preco: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    descricao: PropTypes.string.isRequired,
    imagem: PropTypes.string
};
