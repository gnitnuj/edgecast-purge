const https = require(`https`);
const path = require(`path`);

// logging
const winston = require(`winston`);
const tsFormat = () => new Date().toLocaleTimeString();
const logger = new winston.Logger({
  transports: [
    // colorize the output to the console
    new winston.transports.Console({
      timestamp: tsFormat,
      colorize: true
    })
  ]
});

class EdgeCastPurge {
  /**
   * constructor
   * @param {string} token - the api token
   * @param {string} customerId - the customer id
   */
  constructor(token, customerId) {
    this._token = token;
    this._customerId = customerId;
    this._endpoint = path.join(`/v2`, `mcc`, `customers`, customerId, `edge`, `purge`);

    this._headers = {
      Authorization: `tok: ${token}`,
      Accept: `application/json`,
      'Content-Type': `application/json`
    };
  }

  /**
   * purge
   * @param {array} purge list - resources to purge
   */
  purge(toPurge) {
    if (typeof toPurge === `string`) {
      toPurge = [toPurge];
    }

    return Promise.all(
      toPurge.map(resourceURL => {
        return this._purge(resourceURL);
      })
    );
  }

  _purge(resourceURL) {
    return new Promise((resolve, reject) => {
      const postData = {
        MediaPath: resourceURL,
        MediaType: `3`
      };

      const chunk = [];
      const req = https.request(
        {
          method: `PUT`,
          hostname: `api.edgecast.com`,
          port: 443,
          path: this._endpoint,
          headers: this._headers
        },
        res => {
          res.on(`data`, d => {
            chunk.push(d);
          });
          res.on(`end`, () => {
            const endData = chunk.join();
            if (res.statusCode >= 200 && res.statusCode < 300) {
              logger.info(`purged: ${resourceURL}`);
              return resolve(endData);
            }
            logger.error(`error purging: ${resourceURL}; err=${endData.Message || endData.toString()}`);
            reject(endData);
          });
        }
      );
      req.write(JSON.stringify(postData));
      req.end();
    });
  }
}

module.exports = EdgeCastPurge;
