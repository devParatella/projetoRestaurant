import first from '../Images/suco1.png';
import second from '../Images/prato1.jpg';
import third from '../Images/prato1.jpg';
import Cards from "./Cards";
import './services.css';

const cardssData2 = [
    {
        imagem: first,
        titulo: 'Prato do cards1',
        descricao: 'Descrição do prato cards1',
        preco: 'R$15,00'
    },
    {
        imagem: second,
        titulo: 'Prato do cards2',
        descricao: 'Descrição do prato cards2',
        preco: 'R$15,00'
    },
    {
        imagem: third,
        titulo: 'Prato do cards3',
        descricao: 'Descrição do prato cards3',
        preco: 'R$15,00'
    },
    {
        imagem: third,
        titulo: 'Prato do cards3',
        descricao: 'Descrição do prato cards3',
        preco: 'R$15,00'
    }
] 
export default function Services() {
    return (
        <div id="services"><br />
            <h1>Delivery</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur temporibus quibusdam, dolores reiciendis ut aliquam dolorum, officiis, mollitia expedita similique harum! Reiciendis culpa ipsum laborum numquam, vel minus ratione nulla?</p>
            <div className="cards-container">
                {cardssData2.map((cards, index) => (
                    <Cards
                        key={index}
                        titulo={cards.titulo}
                        preco={cards.preco}
                        descricao={cards.descricao}
                        imagem={cards.imagem}
                    />
                ))}
            </div>
        </div>
    )
}
