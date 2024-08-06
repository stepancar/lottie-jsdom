# lottie-jsdom
Allows you to execute your lottie animations on a server, for example, for SSR.

Use this package in the same way like you use lottie-web on a client.

```javascript
import lottieJSDOM from 'lottie-jsdom';

// in nodejs there is no document, so this package provides it for you
const container = lottieJSDOM.document.createElement('div'); 
const animation = lottieJSDOM.loadAnimation({
  container,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  animationData: require('./animation.json'),
});
```

There are similar projects:

https://github.com/chadly/lottie-to-svg

- pollutes global scope
- does not export typescript definitions
- hardcodes `svg` as renderer

https://github.com/friday/lottie-node

- pollutes global scope
- does not export typescript definitions
- hardcodes `canvas` as renderer


You can not use them in SSR environment, because they pollute global scope.

