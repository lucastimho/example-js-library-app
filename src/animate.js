import anime from "animejs";
export function rotate(element) {
  anime({
    targets: element,
    translateX: 250,
    rotate: "1turn",
    backgroundColor: "#FFF",
    duration: 800,
  });
}
