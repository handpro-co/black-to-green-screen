let changed = false;

document.addEventListener('DOMContentLoaded', () => {
  const target = document.getElementById('screen');
  const text = document.getElementById('text');
  const img = document.getElementsByTagName('img')[0];
  let pressTimer;
  const longPressDuration = 2000; // 1000 ms = 1 second

  const startPress = (event) => {
    event.preventDefault();

    if (changed) return;

    target.classList.add('scan');
    pressTimer = setTimeout(() => {
      changed = true;
      target.style.backgroundColor = '#52BA12';
      target.classList.remove('scan');
      text.classList.add('reveal');
      text.innerHTML = 'Ehurteemj албан ёсоор нээгдлээ';
      img.classList.remove('hide');
      img.classList.add('reveal');
      confetti();
    }, longPressDuration);
  };

  const cancelPress = () => {
    clearTimeout(pressTimer);
    target.classList.remove('scan');
  };

  target.addEventListener('mousedown', startPress);
  target.addEventListener('touchstart', startPress);

  target.addEventListener('mouseup', cancelPress);
  target.addEventListener('mouseleave', cancelPress);
  target.addEventListener('touchend', cancelPress);
  target.addEventListener('touchcancel', cancelPress);
});

function confetti() {
  tsParticles.load({
    id: 'tsparticles',
    options: {
      fullScreen: {
        zIndex: 100,
      },
      particles: {
        number: {
          value: 0,
        },
        color: {
          value: ['#00FFFC', '#FC00FF', '#fffc00'],
        },
        shape: {
          type: ['circle', 'square'],
          options: {},
        },
        opacity: {
          value: {
            min: 0,
            max: 1,
          },
          animation: {
            enable: true,
            speed: 2,
            startValue: 'max',
            destroy: 'min',
          },
        },
        size: {
          value: {
            min: 2,
            max: 4,
          },
        },
        links: {
          enable: false,
        },
        life: {
          duration: {
            sync: true,
            value: 5,
          },
          count: 1,
        },
        move: {
          enable: true,
          gravity: {
            enable: true,
            acceleration: 10,
          },
          speed: {
            min: 10,
            max: 20,
          },
          decay: 0.1,
          direction: 'none',
          straight: false,
          outModes: {
            default: 'destroy',
            top: 'none',
          },
        },
        rotate: {
          value: {
            min: 0,
            max: 360,
          },
          direction: 'random',
          move: true,
          animation: {
            enable: true,
            speed: 60,
          },
        },
        tilt: {
          direction: 'random',
          enable: true,
          move: true,
          value: {
            min: 0,
            max: 360,
          },
          animation: {
            enable: true,
            speed: 60,
          },
        },
        roll: {
          darken: {
            enable: true,
            value: 25,
          },
          enable: true,
          speed: {
            min: 15,
            max: 25,
          },
        },
        wobble: {
          distance: 30,
          enable: true,
          move: true,
          speed: {
            min: -15,
            max: 15,
          },
        },
      },
      emitters: {
        life: {
          count: 0,
          duration: 0.1,
          delay: 0.4,
        },
        rate: {
          delay: 0.1,
          quantity: 150,
        },
        size: {
          width: 0,
          height: 0,
        },
      },
    },
  });
}
