import CardGrid from "./CardGrid";
import prato01 from "../assets/Images/canjiquinhaSF.png";
import prato02 from "../assets/Images/vaca-atolada.png";
import prato03 from "../assets/Images/frango-quiabo.png";
import prato04 from "../assets/Images/tutu.png";
import prato05 from "../assets/Images/feijao-tropeiro.png";
import prato06 from "../assets/Images/ora-pro-nobis-com-costelinha.png";
import './cardapio.css';

const cardsData = [
    {
        imagem: prato01,
        titulo: 'Canjiquinha com Costelinha',
        descricao: 'Canjiquinha cozida com suculentas costelinhas de porco e temperos tradicionais.',
        preco: 'R$25,00'
    },
    {
        imagem: prato02,
        titulo: 'Vaca Atolada',
        descricao: 'Costela de boi cozida lentamente à lenha com mandioca, resultando em um prato saboroso.',
        preco: 'R$29,00'
    },
    {
        imagem: prato03,
        titulo: 'Frango com Quiabo',
        descricao: 'Frango e quiabo cozidos em molho temperado, servido com angú e arroz branco.',
        preco: "R$25,00"
    },
    {
        imagem: prato04,
        titulo: 'Tutú à Mineira',
        descricao: 'Feijão cozido e refogado com temperos típicos, misturado com farinha de mandioca e servido com linguiça, bacon, ovos e couve refogada.',
        preco: 'R$15,00'
    },
    {
        imagem: prato05,
        titulo: 'Feijão Tropeiro',
        descricao: 'Feito com feijão, farinha de mandioca, linguiça, bacon e temperos.',
        preco: 'R$15,00'
    },
    {
        imagem: prato06,
        titulo: 'Ora-Pro-Nóbis e Costelinha',
        descricao: 'Folha refogada de ora-pro-nóbis com costelinha de porco.',
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