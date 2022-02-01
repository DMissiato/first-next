
import Particles from 'react-tsparticles';
import LayoutDefault from '../layout/index';

const Esperimenti = () => 
{
    return (
        <LayoutDefault>
            <div>
                <h1>Esperimenti</h1>
                <Particles
                    id="tsparticles"
                    options={{
                        background: {
                        color: {
                            value: "#0d47a1",
                        },
                        },
                        fpsLimit: 60,
                        interactivity: {
                        events: {
                            onClick: {
                            enable: true,
                            mode: "push",
                            },
                            onHover: {
                            enable: true,
                            mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                            distance: 400,
                            duration: 2,
                            opacity: 0.8,
                            size: 40,
                            },
                            push: {
                            quantity: 10,
                            },
                            repulse: {
                            distance: 120,
                            duration: 0.4,
                            },
                        },
                        },
                        particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: true,
                            speed: 3,
                            straight: false,
                        },
                        number: {
                            density: {
                            enable: true,
                            area: 1000,
                            },
                            value: 200,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "square",
                        },
                        size: {
                            random: true,
                            value: 4,
                        },
                        },
                        detectRetina: true,
                    }}
                />
            </div>
        </LayoutDefault>
    );
};

export default Esperimenti;