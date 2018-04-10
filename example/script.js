const Edgecast = require('../');

const edgecastService = new Edgecast('your-edgecast-token', 'your-edgecast-account-id');

// pass an array of url strings
edgecastService.purge(['first-url', 'second-url', 'nth-url']);

// or just a single url string
edgecastService.purge('single-url');
