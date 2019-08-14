const debounce = require('lodash.debounce');
const {
   valToP,
   setCssProperties,
} = require('./helpers');

window.addEventListener('mousemove', debounce(e => {
   if (getComputedStyle(document.documentElement).getPropertyValue('--aX') == '') return

   let pX = valToP(e.x, 0, window.innerWidth, window.innerWidth / 2),
      pY = valToP(e.y, 0, window.innerHeight, window.innerHeight / 2),
      maxAngleX = 6,
      maxAngleY = 6,
      angleX = Math.round(pY * maxAngleX),
      angleY = Math.round(pX * maxAngleY);

   setCssProperties(document.documentElement,
      ['--aX', -angleX + 'deg'],
      ['--aY', angleY + 'deg']);
},
   60,
   {
      maxWait: 60,
      leading: true
   }
));

document.onmouseout = function (e) {
   if (e.relatedTarget !== this.parentNode) return;
   setCssProperties(
      document.documentElement,
      ['--aX', ''],
      ['--aY', '']
   );
};
document.onmouseover = function (e) {
   if (e.relatedTarget !== this.parentNode) return;
   setCssProperties(
      document.documentElement,
      ['--aX', '0'],
      ['--aY', '0']
   );
};