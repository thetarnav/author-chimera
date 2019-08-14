const {
   valToP,
   random,
   setCssProperties,
   clamp
} = require('./helpers');

function wiggle() {
   let lastX = 0;
   let lastY = 0;
   move();

   function move() {
      const maxX = window.innerWidth / 300 + 5,
         maxY = window.innerHeight / 300 + 5;

      let moveX,
         moveY,
         dist;
      
      do {
         moveX = valToP(Math.random(), 0, 1, .5) * maxX;
         moveY = valToP(Math.random(), 0, 1, .5) * maxX;
         dist = Math.abs(moveX - lastX) + Math.abs(moveY - lastY);
      } while (dist < window.innerWidth / 300 + 5);

      let t = clamp(
         random(200, 700) * dist / 2,
         1000,
         3000
      );

      setCssProperties(document.documentElement,
         ['--x', moveX + 'px'],
         ['--y', moveY + 'px'],
         ['--t', (t / 1000 - .02) + 's']);

      lastX = moveX;
      lastY = moveY;
      setTimeout(move, t);
   }
}

wiggle();