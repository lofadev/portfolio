import Particles, { initParticlesEngine } from '@tsparticles/react';
import { useEffect, useState } from 'react';
import { loadSlim } from '@tsparticles/slim'; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { baseDarkTheme } from '~/styles';

const ParticlesBg = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    init && (
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: baseDarkTheme.bgWrapper,
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: { enable: true },
            },
            modes: {
              push: {
                quantity: 5,
              },
              repulse: {
                distance: 200,
                duration: 1,
              },
            },
          },
          particles: {
            color: {
              value: '#fff',
            },
            links: {
              color: '#fff',
              distance: 120,
              enable: true,
              opacity: 0.5,
              width: 0.8,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 90,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 4 },
            },
          },
          detectRetina: true,
        }}
      />
    )
  );
};

export default ParticlesBg;
