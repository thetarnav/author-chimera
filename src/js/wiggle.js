const {
   valToP,
   random,
   setCssProperties,
   clamp
} = require('./helpers');

function wiggle() {
   // const timeout = () => Math.round(Math.random() * 400 + 300);
   let lastX = 0;
   let lastY = 0;
   move();

   function move() {
      const maxX = window.innerWidth / 300 + 5,
         maxY = window.innerHeight / 300 + 5;

      let pX,
         pY,
         moveX = pX * maxX,
         moveY = pY * maxY,
         dist = Math.abs(moveX - lastX) + Math.abs(moveY - lastY);
      
      do {
         pX = valToP(Math.random(), 0, 1, .5);
         pY = valToP(Math.random(), 0, 1, .5);
         moveX = pX * maxX;
         moveY = pY * maxY;
         dist = Math.abs(moveX - lastX) + Math.abs(moveY - lastY);
         
         
      // } while (pX < .5 && pX > -.5 && pY < .5 && pY > -.5);
      } while (dist < window.innerWidth / 300 + 5);

      console.log(dist, maxX, maxY);

      // do {
      //   pX = valToP(Math.random(), 0, 1, .5);
      //   pY = valToP(Math.random(), 0, 1, .5);
      //   moveX = Math.round(pX * maxX);
      //   moveY = Math.round(pY * maxY);
      //   dist = Math.abs(moveX - lastX) + Math.abs(moveY - lastY);
      // } while (dist < 8);

      let t = clamp(
         Math.round(random(300, 700)) * dist / 2,
         700,
         3000
      );

      setCssProperties(document.documentElement,
         ['--x', moveX + 'px'],
         ['--y', moveY + 'px'],
         ['--t', t / 1000 + 's']);

      lastX = moveX;
      lastY = moveY;
      setTimeout(move, t);
   }
}

wiggle();