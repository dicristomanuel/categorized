const tryPluralize = (word) => {
  const constants = {
    endsWithIes: /y$/,
    endsWithEs: /(h|s)$/,
    endsWithVes: /f$/
  }

  const replacements = {
    endsWithIes: 'ies',
    endsWithEs: 'es',
    endsWithVes: 'ves',
  }

  if (!!word.match(/[^s]s$/))
    return false;
  else
    for (let key in constants) {
      let constant = constants[key];
      if (!!word.match(constant))
      return word.replace(constant, replacements[constant]);
    }
  return word + 's';
} 

export default (words) => {
  words.forEach((word, idx, arr) => {
    const pluralized = tryPluralize(word);
    if (!!pluralized && !arr.includes(word)) arr.push(pluralized);
  });
  return words.join('|')
}
