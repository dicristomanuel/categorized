let words = [
  'alloy',
  'aluminum',
  'antimony',
  'brass',
  'bronze',
  'chrome',
  'chromium',
  'copper',
  'cupronickel',
  'gold',
  'gunmetal',
  'iron',
  'iridium',
  'lead',
  'magnesium',
  'mercury',
  'metal',
  'pewter',
  'platinum',
  'silver',
  'stainless steel',
  'steel',
  'tin',
  'titanium',
  'tungsten',
  'uranium',
  'yellow gold',
  'zinc'
];

export default (data) => {
  return words.join('|');
}
