const test = require('node:test');
const assert = require('node:assert');


test('can run lottie svg renderer without specifying animation data in node', (t) => {

    const lottie = require('..');
    const { document } = lottie;
    const container = document.createElement('div');
    const animation = lottie.loadAnimation({
        container,
        renderer: 'svg',
        loop: false,
        autoplay: false,
    });
    animation.goToAndStop(0, true);

    assert.strictEqual(animation.renderer.svgElement.outerHTML, '<svg><defs></defs><g></g></svg>');
});
