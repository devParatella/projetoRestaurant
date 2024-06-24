import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';
import slide1 from "../assets/Images/slide1.jpg";
import slide2 from "../assets/Images/slide2.jpg";
import slide3 from "../assets/Images/slide3.jpg";

export default function MySlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
    };

    return (
        <div className="slider-container">
            <div className="slider-text">
                <h3>Experiência Familiar</h3>
                <h1>UM VERDADEIRO PARAÍSO CULINÁRIO ONDE A QUALIDADE É NOSSA ESPECIALIDADE</h1>
                <p>Um restaurante acolhedor conhecido por suas deliciosas refeições caseiras, que capturam o conforto e o sabor da comida feita em casa. Com receitas tradicionais transmitidas ao longo do tempo, cada prato é uma celebração da simplicidade e do amor pela boa comida.</p>
            </div>
            <div className="slider-images">
                <Slider {...settings}>
                    <div className="slide">
                        <img src={slide1} alt="Slide 1" />
                    </div>
                    <div className="slide">
                        <img src={slide2} alt="Slide 2" />
                    </div>
                    <div className="slide">
                        <img src={slide3} alt="Slide 3" />
                    </div>
                </Slider>
            </div>
        </div>
    );
}
