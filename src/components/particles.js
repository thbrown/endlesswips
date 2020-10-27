import { Component } from "react";
import md5 from "md5";

/**
 * Looks for and adds particle effects to the provided div.
 *
 * Uses lowercase prop names so the component can be used from markdown pages.
 *
 * MD5:
 * 95a44dbfb7d763f70bd038385fcf5cf5
 * 95a44d b fb7d76 3f 70 b d 038385fcf5cf5
 *
 * 95a44d - particles.color
 * b      - particles.stroke.width (0-15)
 * fb7d76 - particles.stroke.color
 * 3f     - particles.size.value (0-255)
 * 70     - particles.opacity.value (0-15) (%)
 * b      - particles.shape.type (0-8) 0 - circle, 1 = triangle, 2 = square
 * d      - particles.move.direction (0-8)
 */
class Particles extends Component {
  componentDidMount() {
    console.log(
      this.props.targetid,
      this.props.particlestring,
      md5(this.props.particlestring)
    );
    let hash = md5(this.props.particlestring);
    let color = "#" + hash.substring(0, 6);
    let strokeWidth = parseInt("0x" + hash.substring(6, 7));
    let strokeColor = "#" + hash.substring(7, 13);
    let size = parseInt("0x" + hash.substring(13, 14)) * 3 + 10;
    let opacity = parseInt("0x" + hash.substring(15, 16)) / 15;
    let polygonSides = (parseInt("0x" + hash.substring(16, 17)) % 8) + 3; // 10 is a circle
    let direction = [
      "none",
      "top",
      "top-right",
      "right",
      "bottom-right",
      "bottom",
      "bottom-left",
      "left",
      "top-left",
      "none",
      "top",
      "top-right",
      "right",
      "bottom-right",
      "bottom",
      "bottom-left",
      "left",
    ][parseInt("0x" + hash.substring(17, 18))];
    console.log(
      "Color",
      color,
      "strokeWidth",
      strokeWidth,
      "strokeColor",
      strokeColor,
      "size",
      size,
      "opacity",
      hash.substring(15, 16),
      opacity,
      "polygonSides",
      hash.substring(16, 17),
      polygonSides,
      "direction",
      direction
    );

    direction = "none";

    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js";
    script.async = true;
    script.onload = () => this.scriptLoaded();

    document.body.appendChild(script);

    this.config = {
      particles: {
        number: {
          value: 125,
          density: {
            enable: false,
            value_area: 2051.881022468098,
          },
        },
        color: {
          value: color, //"#ac0000",
        },
        shape: {
          type: polygonSides > 9 ? "circle" : "polygon",
          stroke: {
            width: strokeWidth, //5,
            color: strokeColor, //"#000000",
          },
          polygon: {
            nb_sides: polygonSides, //4,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: opacity, //0.6890307900619321,
          random: true,
          anim: {
            enable: true,
            speed: 0.1,
            opacity_min: 0,
            sync: false,
          },
        },
        size: {
          value: size, //12.017978896429048,
          random: true,
          anim: {
            enable: false,
            speed: 0.1,
            size_min: 4.87,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 48.07191558571619,
          color: "#000000",
          opacity: 0.5445376559626874,
          width: 1.4205330155548368,
        },
        move: {
          enable: true,
          speed: 0.2,
          direction: direction, //"none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 600,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "bubble",
          },
          onclick: {
            enable: true,
            mode: "remove",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 250,
            size: 0.9,
            duration: 0.892675999188477,
            opacity: 0.5112598904443095,
            speed: 3,
          },
          repulse: {
            distance: 381.4161087441675,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: false,
    };
  }

  scriptLoaded() {
    window.particlesJS(this.props.targetid, this.config);
  }

  render() {
    return null;
  }
}
export default Particles;
