const { TransactionBuilder, ECPair, Transaction } = require('bitcoinjs-lib');
const networks = require('../networks');
const wif = require('wif');

const signTx = (tx, totalUTXOEntered, ECKeyPair) => {
  for (let i = 0; i <= totalUTXOEntered; i += 1) {
    tx.sign(i, ECKeyPair);
  }
}

const btcTxSigner = (rawTransaction, coin, environment, privateKey) => {
  const privateKeyBuff = new Buffer(privateKey, 'hex');
  const WIFPrivateKey = wif.encode(networks[coin][environment].wif, privateKeyBuff, true);
  const ECKeyPair = ECPair.fromWIF(WIFPrivateKey, networks[coin][environment]);
  const { raw, totalUTXOEntered } = JSON.parse(Buffer.from(rawTransaction, 'hex').toString());
  const tx = TransactionBuilder.fromTransaction(
    Transaction.fromHex(raw),
    networks[coin][environment],
  );

  signTx(tx, totalUTXOEntered, ECKeyPair);
  return tx.build().toHex();
}

module.exports = btcTxSigner;
