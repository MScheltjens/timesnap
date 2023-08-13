import home from '../public/backgrounds/home.jpg';
import mixedArt from '../public/backgrounds/mixed-art.jpg';
import photography from '../public/backgrounds/photography.jpg';
import { Hero } from '@/components';

export default function Home() {
    return (
        <div className="flex-1 flex-col">
            <Hero
                image={home}
                id="home"
                nextId="photography"
                text="Een woord is slechts een communicatiemiddel. Een vastgelegde tijdloze term die de mens zelf heeft bepaald. Spreken is voor de meeste mensen vanzelfsprekend. Ik kan mij beter beeldend uitdrukken. Op het moment dat ik op de knop van mijn fototoestel druk, leg ik een fragment van het leven vast, terwijl ik weet dat het ondertussen alweer voorbij is.
              Hierdoor besef ik dat het leven geen 'iets' is om in een, door de mens bepaald, vakje te stoppen.
              Aan de hand van mijn foto's zoek ik het innelijke in het uiterlijke.
              Niet alleen bij dingen en bij anderen, maar ook bij mezelf.
              M'n foto's helpen om mezelf beter te begrijpen.
              De dingen waarover ik mijmer, pieker, lach, huil,... probeer ik met beeld weer te geven.
              Op het moment dat ik beelden vastleg voel ik dat ze belangrijk zijn. Toch kan ik pas later een uitleg geven bij een foto. Dat geeft me meer zekerheid bij m'n werk."
                textDark
                imgPriority
            />
            <Hero image={photography} id="photography" nextId="mixed-art" title="Photography" />
            <Hero image={mixedArt} id="mixed-art" nextId="home" title="Mixed Art" textDark />
        </div>
    );
}
