#!/usr/bin/env node
var prerender = require('./lib');

var server = prerender({
    chromeLocation : '/usr/bin/chromium',
    chromeFlags: [
        '--no-sandbox',
        '--headless',
        '--disable-gpu',
        '--remote-debugging-port=9222',
        '--hide-scrollbars'
    ]
});

server.use(prerender.sendPrerenderHeader());
server.use(prerender.browserForceRestart());
// server.use(prerender.blockResources());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());

server.start();
