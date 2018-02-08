const edgecast = require(`../`);

// pass an array of url strings
edgecast.purge([`first-url`, `second-url`, `nth-url`]);

// or just a single url string
edgecast.purge(`single-url`);
