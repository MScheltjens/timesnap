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
                text="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
                textDark
                imgPriority
                header
            />
            <Hero
                image={photography}
                id="photography"
                nextId="mixed-art"
                title="Photography"
                text="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
            />
            <Hero
                image={mixedArt}
                id="mixed-art"
                nextId="home"
                title="Mixed Art"
                textDark
                text="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
            />
        </div>
    );
}
