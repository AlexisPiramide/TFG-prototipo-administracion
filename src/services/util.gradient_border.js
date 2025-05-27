// util.gradient_border.js

const reverseGradients = gradients =>
  gradients.map(pair => [...pair].reverse());

const baseGradients = [
  ['#43e97b', '#38f9d7'],   // green to teal
  ['#11998e', '#38ef7d'],   // dark green to light green
  ['#56ccf2', '#2f80ed'],   // light blue to blue
  ['#1e3c72', '#2a5298'],   // deep blue gradients
  ['#00c6fb', '#005bea'],   // cyan to blue
  ['#43cea2', '#185a9d'],   // greenish to blue
];

const gradientConfigs = {
  top: {
    name: "basic-gradient-top",
    direction: "left-right",
    gradients: baseGradients,
  },
  bottom: {
    name: "basic-gradient-bottom",
    direction: "left-right",
    gradients: reverseGradients(baseGradients),
  },
  left: {
    name: "basic-gradient-left",
    direction: "top-bottom",
    gradients: baseGradients,
  },
  right: {
    name: "basic-gradient-right",
    direction: "top-bottom",
    gradients: reverseGradients(baseGradients),
  },
};

export default gradientConfigs;
