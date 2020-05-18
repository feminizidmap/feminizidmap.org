/*
  barba.use(barbaCss);
  // basic default transition (with no rules and minimal hooks)
  barba.init({
  debug: true,
  transitions: [{
  name: 'foo',
  from: {
  custom: ({ trigger }) => {
  return trigger.classList && trigger.classList.contains('foo');
  },
  },
  leave({ current, next, trigger }) {
  // do something with `current.container` for your leave transition
  // then return a promise or use `this.async()`
  console.log('leavign');
  },
  enter({ current, next, trigger }) {
  // do something with `next.container` for your enter transition
  // then return a promise or use `this.async()`
  console.log('entering');
  }
  }]
  });
*/

var h = document.querySelector('html');
h.classList.remove('no-js');

var toggle = document.getElementById('toggle');
var menu = document.getElementById('menu');
var logoBlack = document.getElementById('logo');
var langSwitch = document.getElementById('langswitch')

toggle.addEventListener('click', function(){
    if (menu.classList.contains('is-active')) {
        this.setAttribute('aria-expanded', 'false');
        //this.classList.remove('sr-only');
        langSwitch.classList.remove('sr-only');
        menu.classList.remove('is-active');
        logoBlack.classList.remove('is-hidden');
    } else {
        menu.classList.add('is-active');
        menu.classList.remove('is-peeking');
        this.setAttribute('aria-expanded', 'true');
        //this.classList.add('sr-only');
        langSwitch.classList.add('sr-only');
        logoBlack.classList.add('is-hidden');
    }
});

let targetArea = document.querySelector('.l-navigation__close').getBoundingClientRect();
let senseArea = 120;
document.addEventListener('mousemove', function(ev) {
    if (!menu.classList.contains('is-active')
        && (ev.clientX < targetArea.width + senseArea)) {
        menu.classList.add('is-peeking');
    } else {
        menu.classList.remove('is-peeking');
    }
});

let murderSection = document.querySelector(".murder");
let svg = document.querySelectorAll('.strike-through');
if (murderSection) {
    document.querySelector('body').addEventListener("scroll", function (ev) {
        let rect = murderSection.getBoundingClientRect();
        if (rect.top < 270) {
            svg[0].classList.add("is-active");
        }
        if (rect.top < 150) {
            svg[1].classList.add("is-active");
        }
        if (rect.top < 50) {
            svg[2].classList.add("is-active");
        }
    });
}
