/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 50,
        "density": {
          "enable": true,
          "value_area": 500
        }
      },
      "color": {
        "value": "#000000"
      },
      "shape": {
        "type": "polygon",
        "stroke": {
          "width": 1,
          "color": "#b3ff66"
        },
        "polygon": {
          "nb_sides": 8
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.3,
        "random": true,
      },
      "size": {
        "value": 8,
        "random": true,
      },
      "line_linked": {
        "enable": false,
        "distance": 200,
        "color": "#ff5722",
        "opacity": 0.2,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 5,
        "direction": "top",
        "random": true,
        "straight": true,
        "bounce":false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": ["grab","bubble"]
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 0.3
          }
        },
        "bubble": {
          "distance": 600,
          "size": 10,
          "duration": 1,
          "opacity": 0.4,
          "speed": 2
        },
        "repulse": {
          "distance": 400,
          "duration":0.4
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
  }

);