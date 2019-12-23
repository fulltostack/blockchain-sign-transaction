const ethUtils = require('ethereumjs-util');
const Tx = require('ethereumjs-tx');

const ethTxSigner = (rawTransaction, privateKey) => {
  const privKey = Buffer.from(
    ethUtils.stripHexPrefix(privateKey),
    'hex',
  );
  const tx = new Tx(rawTransaction);
  tx.sign(privKey);
  const serializedTx = tx.serialize();
  return `0x${serializedTx.toString('hex')}`;
}

module.exports = ethTxSigner;
