import CardGrid from "./CardGrid";
import prato01 from "../Images/prato1.jpg";
import './cardapio.css';

const cardsData = [
    {
        imagem: prato01,
        titulo: 'Prato do card1',
        descricao: 'Descrição do prato card1',
        preco: 'R$15,00'
    },
    {
        imagem: prato01,
        titulo: 'Prato do card2',
        descricao: 'Descrição do prato card2',
        preco: 'R$15,00'
    },
    {
        imagem: prato01,
        titulo: 'Prato do card3',
        descricao: 'Descrição do prato card3',
        preco: 'R$15,00'
    },
    {
        imagem: prato01,
        titulo: 'Prato do card4',
        descricao: 'Descrição do prato card4',
        preco: 'R$15,00'
    },
    {
        imagem: prato01,
        titulo: 'Prato do card5',
        descricao: 'Descrição do prato card5',
        preco: 'R$15,00'
    },
    {
        imagem: prato01,
        titulo: 'Prato do card6',
        descricao: 'Descrição do prato card6',
        preco: 'R$15,00'
    },
    {
        imagem: prato01,
        titulo: 'Prato do card7',
        descricao: 'Descrição do prato card7',
        preco: 'R$15,00'
    },
    {
        imagem: prato01,
        titulo: 'Prato do card8',
        descricao: 'Descrição do prato card8',
        preco: 'R$15,00'
    }
];

export default function Cardapio() {
    return (
        <div className="cardapio">
            <div className="cardapio-head">
                <h3 className="titulo-resturnte">Cardápio</h3>
            </div>
            <div className='card-grid-container'>

                <CardGrid cardsData={cardsData} />
            </div>
        </div>
    );
}