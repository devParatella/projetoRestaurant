import PropTypes from 'prop-types';
import './cardgrid.css';

const CardGrid = ({ cardsData }) => {
    return (
        <div className='card-grid'>
            {cardsData.map((card, index) => (
                <div key={index} className="card">
                    {card.imagem && <img src={card.imagem} alt="prato" className="card-imagem" />}
                    <div className="card-corpo">
                        <h2 className="card-titulo">{card.titulo}</h2>
                        <p className="card-descricao">{card.descricao}</p>
                        <p className="card-preco">{card.preco}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

CardGrid.propTypes = {
    cardsData: PropTypes.arrayOf(
        PropTypes.shape({
            titulo: PropTypes.string.isRequired,
            preco: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]).isRequired,
            descricao: PropTypes.string.isRequired,
            imagem: PropTypes.string
        })
    ).isRequired,
};

export default CardGrid;
