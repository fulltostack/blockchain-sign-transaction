const networks = {
  BTC: {
    testnet: {
      coin: 'Bitcoin',
      messagePrefix: '\x18Bitcoin Signed Message:\n',
      bech32: 'tb',
      bip32: {
        public: 0x043587cf,
        private: 0x04358394,
      },
      pubKeyHash: 0x6f,
      scriptHash: 0xc4,
      wif: 0xef,
    },

    mainnet: {
      coin: 'Bitcoin',
      messagePrefix: '\x18Bitcoin Signed Message:\n',
      bech32: 'bc',
      bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
      },
      pubKeyHash: 0x00,
      scriptHash: 0x05,
      wif: 0x80,
    },
  },
  BCH: {
    testnet: {
      coin: 'Bitcoin',
      messagePrefix: '\x18Bitcoin Signed Message:\n',
      bech32: 'tb',
      bip32: {
        public: 0x043587cf,
        private: 0x04358394,
      },
      pubKeyHash: 0x6f,
      scriptHash: 0xc4,
      wif: 0xef,
    },

    mainnet: {
      coin: 'Bitcoin',
      messagePrefix: '\x18Bitcoin Signed Message:\n',
      bech32: 'bc',
      bip32: {
        public: 0x0488b21e,
        private: 0x0488ade4,
      },
      pubKeyHash: 0x00,
      scriptHash: 0x05,
      wif: 0x80,
    },
  },
  LTC: {
    testnet: {
      coin: 'Litecoin',
      messagePrefix: '\x19Litecoin Signed Message:\n',
      bech32: 'tb',
      bip32: {
        public: 0x043587cf,
        private: 0x04358394,
      },
      pubKeyHash: 0x6f,
      scriptHash: 0xc4,
      wif: 0xef,
    },

    mainnet: {
      coin: 'Litecoin',
      messagePrefix: '\x19Litecoin Signed Message:\n',
      bip32: {
        public: 0x019da462,
        private: 0x019d9cfe,
      },
      pubKeyHash: 0x30,
      scriptHash: 0x32,
      wif: 0xb0,
    },
  },
  DOGE: {
    testnet: {
      coin: 'Dogecoin',
      messagePrefix: '\x19Dogecoin Signed Message:\n',
      bip32: {
        public: 0x0432a9a8,
        private: 0x0432a243,
      },
      pubKeyHash: 0x71,
      scriptHash: 0xc4,
      wif: 0x9e,
    },

    mainnet: {
      coin: 'Dogecoin',
      messagePrefix: '\x19Dogecoin Signed Message:\n',
      bip32: {
        public: 0x02facafd,
        private: 0x02fac398,
      },
      pubKeyHash: 0x1e,
      scriptHash: 0x16,
      wif: 0x9e,
    },
  },
  DASH: {
    testnet: {
      coin: 'Dash',
      messagePrefix: '\x19Dash Signed Message:\n',
      bip32: {
        public: 0x43587cf,
        private: 0x04358394,
      },
      pubKeyHash: 0x8c,
      scriptHash: 0x13,
      wif: 0xef,
    },
    mainnet: {
      coin: 'Dash',
      messagePrefix: '\x19Dash Signed Message:\n',
      bip32: {
        public: 0x488b21e,
        private: 0x488ade4,
      },
      pubKeyHash: 0x4c,
      scriptHash: 0x10,
      wif: 0xcc,
    },
  },
};

module.exports = networks;