const ethTxSigner = require('./ethTxSigner');
const btcTxSigner = require('./btcTxSigner');

const adapterMap = {
  'ETH': ethTxSigner,
  'ETC': ethTxSigner,
  'BTC': btcTxSigner, 
  'LTC': btcTxSigner, 
  'DASH': btcTxSigner, 
  'DOGE': btcTxSigner, 
  'BCH': btcTxSigner,
}

module.exports = adapterMap;
