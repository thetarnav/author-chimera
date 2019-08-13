const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const valToP = (value, min, max, turn = min) =>
   value < turn ?
      (value - turn) / (turn - min) :
      (value - turn) / (max - turn);

const pToVal = (p, zero, hundred) => p * (hundred - zero) + zero;

const random = (min, max) => Math.random() * (max - min) + min;

const setCssProperties = (el, ...pairs) => pairs.forEach(pair =>
   el.style.setProperty(pair[0], pair[1])
);

module.exports = {
   clamp,
   valToP,
   pToVal,
   random,
   setCssProperties
}