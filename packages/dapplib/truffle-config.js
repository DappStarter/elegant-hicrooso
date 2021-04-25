require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'grace glimpse flush security trap birth payment cluster include kiwi system text'; 
let testAccounts = [
"0xcb318e7f0db3c787f4cf11d095585998b14a27f3dadd3d55768de11f55524dd4",
"0xbdad1c52adb6b360cb7c267d082c66d4e6660ab30eb621e9851069bfb560c988",
"0x406f764c8f9d4103859e5627dad94380d7d21d484ad5b3f9267798f11c9ba077",
"0x75023100839e298b05ff3c26d895f3d2ff196e18a81fbe1eba2712e0ddd57da4",
"0xd7b93af3ede2bde63b49e878b838797beb2d08a04975486a6bcf58748e2484db",
"0x38d979eff0154ae0cd6273d61932a2d4cf9d3dd331e6f63ac54fa943c2404c0f",
"0x2caf186d7c15fff987f230e38f8cf2b3de50e75623ff929b33936d61cd66e2ed",
"0x1c1252b392e7402ea07fe63d83b21c24de9206cd1b9da6ef36ff7de1801aa056",
"0x03ae8f4a55d45421bfd5acf6660bbb946e03f45d7c05e5c8d9b930b6e468c0e3",
"0x6aca01f4a73f036dc517b352f507159ec0dd95bc4a1674d352faf733f388a64c"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

