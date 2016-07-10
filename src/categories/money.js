import pluralize from '../helpers/pluralize';

let words = [
  'afford',
  'ATM',
  'auction',
  'bailout',
  'balance',
  'bank',
  'bankrupt',
  'bankruptcy',
  'bargain',
  'bill',
  'bonds',
  'borrow',
  'bought',
  'budget',
  'business',
  'buy',
  'capital',
  'cash',
  'cent',
  'change',
  'cheap',
  'check',
  'collateral',
  'commodity',
  'compound',
  'coupon',
  'credit',
  'credit card',
  'currency',
  'debt',
  'defecit',
  'deposit',
  'depression',
  'dime',
  'discount',
  'diversify',
  'dividend',
  'dollar',
  'donate',
  'donation',
  'donor',
  'down payment',
  'earn',
  'earnings',
  'economy',
  'economics',
  'economist',
  'equity',
  'estate',
  'Euro',
  'exchange',
  'expense',
  'expensive',
  'finance',
  'financier',
  'fund',
  'income',
  'interest',
  'invest',
  'investment',
  'investor',
  'lend',
  'lender',
  'loan',
  'loss',
  'margin',
  'market',
  'money',
  'mortgage',
  'nickel',
  'note',
  'outgo',
  'overdrawn',
  'pay',
  'payment',
  'pence',
  'penny',
  'percentage',
  'poor',
  'portfolio',
  'Pound',
  'profit',
  'purse',
  'quarter',
  'rate',
  'rebate',
  'receipt',
  'recession',
  'rent',
  'reserve',
  'rich',
  'risk',
  'sale',
  'save',
  'savings',
  'security',
  'sell',
  'seller',
  'sold',
  'spend',
  'stocks',
  'surplus',
  'swap',
  'tax',
  'teller',
  'thrifty',
  'trade',
  'treasury',
  'value',
  'vault',
  'wallet',
  'wealth',
  'withdraw',
  'yield'
];

export default (data) => {
  return pluralize(words);
}