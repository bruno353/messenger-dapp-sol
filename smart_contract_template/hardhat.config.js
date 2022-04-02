require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'url-id-alchemy',
      accounts: ['private-key'],
    },
  },
};
