import first from '../assets/Images/entrega1.jpg';
import second from '../assets/Images/entrega2.jpg';
import third from '../assets/Images/entrega3.jpg';
import forth from '../assets/Images/entrega4.jpg';
import Cards from "./Cards";
import './services.css';

const cardssData2 = [
    {
        imagem: first,
        titulo: 'Receba quentim',
        descricao: 'No confor da sua cas',
        preco: 'Pedinum tantão a entregé gratis '
    },
    {
        imagem: second,
        titulo: 'Rápidim',
        descricao: 'Fique tranquilim',
        preco: 'Se pedir poquim é baratim'
    },
    {
        imagem: third,
        titulo: 'Minerim delivery',
        descricao: 'Minerim entrega na ',
        preco: 'velocidade que a fome pede'
    },
    {
        imagem: forth,
        titulo: 'Experimente ',
        descricao: 'Na entrega ou em nosso ',
        preco: 'estabelacimento'
    }
] 
export default function Services() {
    return (
        <div id="services"><br />
            <h1>ENTREGAS</h1>
            <p>Experimente a conveniência de receber a nossa deliciosa comida no conforto da sua casa! Com o nosso serviço de entregas, garantimos que cada prato chegue até você fresco e saboroso. Faça seu pedido agora e descubra como transformamos cada refeição em uma experiência especial, onde quer que você esteja.</p>
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
