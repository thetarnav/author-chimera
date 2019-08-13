const bodyScrollLock = require('body-scroll-lock');
bodyScrollLock.disableBodyScroll(window);

const SVGInject = require('@iconfu/svg-inject');
const debounce = require('lodash.debounce');

document.querySelectorAll('img.inject-svg').forEach(img => SVGInject(img));

const main = document.querySelector('#main'),
   mainCopy = document.querySelector('#main-copy'); 
   
let tl,
   lastTouchY;

window.onload = () => {
   TweenLite.set(document.body, {scrollTo: 0});
};

window.addEventListener('touchstart', e => lastTouchY = e.touches[0].clientY);

window.addEventListener('touchmove', debounce(e => {
   let distToMove = 60;

   e.touches[0].clientY - distToMove > lastTouchY && scrollUp();
   e.touches[0].clientY + distToMove < lastTouchY && scrollDown();
   lastTouchY = e.touches[0].clientY;
},
   30, {
      leading: true,
      maxWait: 30
   }
));

function scrollDown() {
   if (typeof tl != 'undefined' && tl.isActive()) return;

   tl = new TimelineLite();
   tl.set(document.body, {
         scrollTo: 0
      })
      .to(document.body, .5, {
         ease: Power2.easeInOut,
         scrollTo: mainCopy.offsetTop
      })
      .set(document.body, {
         scrollTo: 0
      });
}

function scrollUp() {
   if (typeof tl != 'undefined' && tl.isActive()) return;

   tl = new TimelineLite();
   tl.set(document.body, {
         scrollTo: mainCopy.offsetTop
      })
      .to(document.body, .5, {
         ease: Power2.easeInOut,
         scrollTo: 0
      });
}

