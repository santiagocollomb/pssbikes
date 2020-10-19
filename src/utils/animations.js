import anime from "animejs"

export const animateIn = node => {
  anime({
    targets: node,
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 3000,
  })
}

export const animateOut = node => {
  anime({
    targets: node,
    opacity: [1, 0],
    translateY: [0, 30],
    duration: 3000,
  })
}
