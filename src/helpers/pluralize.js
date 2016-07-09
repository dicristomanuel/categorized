import pluralize from 'pluralize';

export default (words) => {
  words.forEach((word, idx, arr) => {
    const pluralized = pluralize(word);
    if (!!pluralized && !arr.includes(pluralized)) {
      arr.push(pluralized)
    };
  });
  return words.join('|')
}
