import Contact from './Contact';
import Team from './Team';
import Services from './Services';
import Slider from './Slider';
import About from './About';
import Cardapio from './Cardapio';

export default function Home() {
    return (
        <div>
            <Slider />
            <About />
            <Services />
            <Cardapio />
            <Team />
            <Contact />
        </div>
    )
}
