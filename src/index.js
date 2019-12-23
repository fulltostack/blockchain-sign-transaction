const envConfig = require('../config');
const networks = require('./networks');
const adapterMap = require('./adapters');

const signRawTx = (rawTx, privateKey, _blockchain, _environment) => {
  const environment = _environment || envConfig.get('blockchain_environment');
  const blockchain = _blockchain || envConfig.get('blockchain');

  const adapter = adapterMap[blockchain];

  if (!adapter) {
    throw Error(`Blockchain not supported: ${blockchain}`);
  }
  
  const network = networks[blockchain];

  if (!network) {
    return adapter(rawTx, privateKey);
  }
  return adapter(rawTx, blockchain, environment, privateKey);
}

module.exports = signRawTx