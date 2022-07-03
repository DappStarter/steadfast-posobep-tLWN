require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict permit flame silver gravity rifle spawn puppy hunt opinion sudden slogan'; 
let testAccounts = [
"0xfd7ff7d07f74a0ba36c137b96c74a53d563aa103e75eb0fb5d8cac2b31e64b3d",
"0xd24c8a86878dba8a161b7b351430fe0e2e8916f1ca97318e3dfca02df1eaa945",
"0x5d32f5d040d5aa0b525cf22582ce9dd3d6baa5609de4c273e8458e14061c0ac2",
"0xf2f61b9e6de6a58c6a76305130e876321e4fa1403e852c3678384dcdcd6a50c2",
"0x35f45655b00eb0daf8b3ea08ee9e9dd655a6b1df84bbc4c11cff70bd1dde6aca",
"0x2b2bb133856e64fe0cc588dd412f0e778c2fbf0a2af03f55d15f858ab851ae1b",
"0x54c5b27902dda593d4d682f1cb0e10041f3d4d0d2f5c36fe3ba366e962b50ff7",
"0xd5c1feb3303abe1d01b7db0c930b4cbc5b3b86a9c5cfe28d5d324b89191c505e",
"0x6f7eaf202442d1cf0b73bf9e3da96ce4b0887c3e450f47690264bed8a6b020e9",
"0xe82e59e8d1234fcf1bd2669cb06389e32e87cb1b87e47ae106921b1823fe100a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

