const particleConfig = {
  background: {
    color: {
      value: "#000000",
    },
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
  },
  fullScreen: {
    zIndex: 1,
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "slow",
        parallax: {
          force: 60,
        },
      },
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      grab: {
        distance: 400,
      },
      slow: {
        radius: 100,
      },
    },
  },
  particles: {
    color: {
      value: ["#cd64c0", "#ebdf27", "#4952d7", "#d23939"],
    },
    links: {
      color: {
        value: "#ffffff",
      },
      distance: 150,
      enable: true,
      opacity: 0.7,
    },
    move: {
      attract: {
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      enable: true,
      outModes: {
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
      speed: 6,
    },
    number: {
      density: {
        enable: true,
      },
      value: 80,
    },
    opacity: {
      value: 0.7,
      animation: {
        speed: 0.4,
        minimumValue: 0.1,
      },
    },
    size: {
      random: {
        enable: true,
      },
      value: {
        min: 6,
        max: 9,
      },
      animation: {
        speed: 20,
        minimumValue: 0.5,
      },
    },
  },
};
export default particleConfig;
