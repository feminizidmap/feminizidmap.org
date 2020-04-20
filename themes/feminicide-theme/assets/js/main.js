async function supportsWebp() {
  if (!self.createImageBitmap) return false;

  const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
  const blob = await fetch(webpData).then(r => r.blob());
  return createImageBitmap(blob).then(() => true, () => false);
}

(async () => {
  if(await supportsWebp()) {
    document.querySelector('body').classList.add('has-webp');
  } /*
  else {
    console.log('does not support');
  }
*/
})();



barba.use(barbaCss);
// basic default transition (with no rules and minimal hooks)
barba.init({
  debug: true,
  transitions: [{
    name: 'switch-language',
    from: {
      custom: ({ trigger }) => {
        return trigger.classList && trigger.classList.contains('language-switch');
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
