const path = require('path');
const fs = require('fs');
const { JSDOM } = require('jsdom');
const lottiePath = require.resolve("lottie-web/build/player/lottie.js")

const { window } = new JSDOM(``, { runScripts: "dangerously" });
const { document } = window;

// TODO: this is a simplest possible mock for canvas
// need to implement a proper mock
window.HTMLCanvasElement.prototype.getContext = () => ({
    fillRect: () => {},
    fillStyle: () => {},
});

// https://github.com/jsdom/jsdom/wiki/Don't-stuff-jsdom-globals-onto-the-Node-global#running-code-inside-the-jsdom-context
const src = fs.readFileSync(path.resolve(__dirname, lottiePath), "utf8");
const scriptEl = window.document.createElement("script");
scriptEl.textContent = src;
window.document.body.appendChild(scriptEl);

window.lottie.document = document;

module.exports = window.lottie;
