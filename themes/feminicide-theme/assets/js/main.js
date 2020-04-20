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
