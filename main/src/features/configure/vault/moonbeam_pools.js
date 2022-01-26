import { govPoolABI } from '../abi';

export const moonbeamPools = [
  {
    id: 'stella-glmr-stella',
    name: 'Stellaswap Stella Glimmer',
    token: 'STELLA-GLMR sLP',
    tokenDescription: 'Stellaswap',
    tokenAddress: '0x7f5ac0fc127bcf1eaf54e3cd01b00300a0861a62',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'aVAULT-GLMR-STELLA',
    earnedTokenAddress: '0xcB9B7C415ee4e5D05a1abED8e977f26ed2A3B9ea',
    earnContractAddress: '0xcB9B7C415ee4e5D05a1abED8e977f26ed2A3B9ea',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'stella-glmr-stella',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    platform: 'Stellaswap',
    assets: ['STELLA', 'GLMR'],
    risks: ['COMPLEXITY_LOW', 'NEW_STRAT', 'IL_LOW', 'MCAP_LARGE', 'AUDIT', 'CONTRACTS_VERIFIED'],
    stratType: 'StratMultiLP',
    withdrawalFee: '0%',
    addLiquidityUrl:
      'https://app.stellaswap.com/exchange/add/ETH/0x0E358838ce72d5e61E0018a2ffaC4bEC5F4c88d2',
  },
  ];
  
