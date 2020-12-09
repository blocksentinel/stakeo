export default {
  stakeo: 'Stakeo',
  calculator: {
    heading: 'Staking Calculator',
    headingTooltip:
      'Calculate your staking returns based on projected Switcheo TradeHub volume. Block subsidies are not included in the calculation at this time.',
    advancedMode: 'Moon Mode',
    volumeControlLabel: 'TradeHub Volume (USD)',
    volumeMessage: 'Monthly volume of {amount}',
    feeControlLabel: 'Trading Fees',
    feeMessage: 'Average fee of {amount}',
    bondControlLabel: 'Bonded',
    bondMessage: 'Total bonded @:vendor.swthTicker is {amount} ({value})',
    stakeControlLabel: 'Stake',
    stakeMessage: 'Your total @:vendor.swthTicker stake is {amount} ({value})',
    button: 'Calculate',
    volumeCompactMillion: '{value} million',
    volumeCompactBillion: '{value} billion',
  },
  estimate: {
    daily: 'Daily',
    weekly: 'Weekly',
    monthly: 'Monthly',
    yearly: 'Yearly',
    potentialPriceHeading: 'Potential SWTH Price',
    potentialPriceHeadingTooltip:
      'This table depicts the potential price of a single SWTH token if the annual return rate were to reflect the percentage in each column.',
    rateMessage: 'Estimated based on annual return rates.',
  },
  exchange: {
    decentralizedHeading: 'Decentralized',
    decentralizedHeadingTooltip:
      'A decentralized exchange (DEX) is a cryptocurrency exchange which operates in a decentralized way, i.e., without a central authority. Decentralized exchanges allow peer-to-peer trading of cryptocurrencies.',
    derivativesHeading: 'Derivatives',
    derivativesHeadingTooltip:
      'Derivatives are tradable securities or contracts that derive their value from an underlying asset. In the case of cryptocurrency derivatives, the underlying asset is, in most cases, Bitcoin (BTC), or other top cryptocurrencies.',
    centralizedHeading: 'Centralized',
    centralizedHeadingTooltip:
      'A centralized exchange (CEX) is a cryptocurrency exchange which operates more like a traditional bank, acting as custodian of your funds. Centralized exchanges generally follow know your customer (KYC) and Anti-Money Laundering (AML) regulations.',
    volume30DayLabel: '30 Day Volume (USD)',
  },
  network: {
    priceHeading: '@:vendor.swthTicker Price',
    bondHeading: 'Bonded',
    volume24Hour: '24 Hour Volume',
    proposalMessage:
      'A TradeHub Improvement Proposal (TIP) is currently being voted on. <a href="https://switcheo.org/governance?net=main" target="_blank" rel="noopener">Place your vote now!</a>',
  },
  vendor: {
    blockSentinel: 'Block Sentinel',
    demex: 'Demex',
    gitHub: 'GitHub',
    switcheo: 'Switcheo',
    switcheoEcosystem: '@:vendor.switcheo Ecosystem',
    switcheoExchange: '@:vendor.switcheo Exchange',
    switcheoFoundation: '@:vendor.switcheo Foundation',
    switcheoTradescan: '@:vendor.switcheo Tradescan',
    swthTicker: 'SWTH',
    zilSwap: 'ZilSwap',
  },
  madeByStatement: 'Made for the @:vendor.switcheo Community by {company}',
  priceStatement: 'Price data provided by CoinGecko',
  disclaimer: 'Disclaimer',
}
