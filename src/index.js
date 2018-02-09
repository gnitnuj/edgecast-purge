const https = require('https');
const path = require('path');
const winston = require('winston');

// winston/logging configuration
const tsFormat = () => new Date().toLocaleTimeString();
const logger = new winston.Logger({
  transports: [
    // colorize the output to the console
    new winston.transports.Console({
      timestamp: tsFormat,
      colorize: true,
    }),
  ],
});

class EdgeCastPurge {
  /**
   * constructor
   * @param {string} token - the api token
   * @param {string} customerId - the customer id
   */
  constructor(token, customerId) {
    this.token = token;
    this.customerId = customerId;
    this.endpoint = path.join('/v2', 'mcc', 'customers', customerId, 'edge', 'purge');

    this.headers = {
      Authorization: `tok: ${token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
  }

  /**
   * purge
   * @param {array} purge list - resources to purge
   */
  purge(toPurge) {
    const purgeList = typeof toPurge === 'string' ? [toPurge] : toPurge;

    return Promise.all(purgeList.map(resourceURL => this.purgeRsource(resourceURL)));
  }

  purgeRsource(resourceURL) {
    return new Promise((resolve, reject) => {
      const postData = {
        MediaPath: resourceURL,
        MediaType: '3',
      };

      const chunk = [];
      const req = https.request(
        {
          method: 'PUT',
          hostname: 'api.edgecast.com',
          port: 443,
          path: this.endpoint,
          headers: this.headers,
        },
        // prettier-ignore
        (res) => {
          res.on('data', (d) => {
            chunk.push(d);
          });
          res.on('end', () => {
            const endData = chunk.join();
            if (res.statusCode >= 200 && res.statusCode < 300) {
              logger.info(`purged: ${resourceURL}`);
              return resolve(endData);
            }
            logger.error(`error purging: ${resourceURL}; err=${endData.Message || endData.toString()}`);
            return reject(endData);
          });
        },
      );
      req.write(JSON.stringify(postData));
      req.end();
    });
  }
}

module.exports = EdgeCastPurge;
