// node test.js projects/pairex/index.js
const { sumTokensExport } = require('../helper/unwrapLPs');
const ARBITRUM_USDT = '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9';
const VAULT_CONTRACT = '0x2Ca07638acDa0B2bEa7B6a06F135476BDdd7101B';

module.exports = {
    methodology: 'counts the number of USDT tokens in the PairEX Vault contract.',
    arbitrum: {
        tvl: sumTokensExport({ owner: VAULT_CONTRACT, tokens: [ARBITRUM_USDT] }),
    }
}; 
