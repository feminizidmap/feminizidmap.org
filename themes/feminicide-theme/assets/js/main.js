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
    this.setAttribute('aria-expanded', 'true');
    //this.classList.add('sr-only');
    langSwitch.classList.add('sr-only');
    logoBlack.classList.add('is-hidden');
  }
});
