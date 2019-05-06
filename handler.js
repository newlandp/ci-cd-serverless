const moment = require('moment');

module.exports.logger = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Serverless CI/CD demo',
      version: '1.2.0',
      timestamp: moment().unix()
    }, null, 2),
  };
};
