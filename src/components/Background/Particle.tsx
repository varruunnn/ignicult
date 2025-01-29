import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // Ensure this package is installed

const Particle: React.FC = () => {
  const [init, setInit] = useState(false);

  // Initialize particles engine once
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Properly typed callback function when particles are loaded
  const particlesLoaded = useCallback(async (container?: Container) => {
    if (container) {
      console.log("Particles container loaded:", container);
    }
  }, []);

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
              "particles": {
                "number": {
                  "value": 80,
                  "density": {
                    "enable": true,
                    "width": 800,
                    "height":800,
                  }
                },
                "color": {
                  "value": "#82E300"
                },
                "shape": {
                  "type": "circle",
                },
                "opacity": {
                  "value": 0.1,

                },
                "size": {
                  "value": 5,

                },
                "line_linked": {
                  "enable": true,
                  "distance": 150,
                  "color": "#ffffff",
                  "opacity": 0.4,
                  "width": 1
                },
                "move": {
                  "enable": true,
                  "speed": 6,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "attract": {
                    "enable": false,
                  }
                }
              },
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onHover": {  // ✅ Corrected from "onhover" to "onHover"
                    "enable": true,
                    "mode": "repulse"
                  },
                  "onClick": {  // ✅ Corrected from "onclick" to "onClick"
                    "enable": true,
                    "mode": "push"
                  }
                },
                "modes": {
                  "grab": {
                    "distance": 400,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 400,
                    "size": 20,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 1
                  },
                  "repulse": {
                    "distance": 200
                  },
                  "push": {
                    "particles_nb": 4
                  },
                  "remove": {
                    "particles_nb": 2
                  }
                }
              },
              "retina_detect": true,
              "config_demo": {
                "hide_card": false,
                "background_color": "#b61924",
                "background_image": "",
                "background_position": "50% 50%",
                "background_repeat": "no-repeat",
                "background_size": "cover"
              }
            }}
        />
      )}
    </>
  );
};

export default Particle;
