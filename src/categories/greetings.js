export default (data) => {
  [
    'hello',
    'hi',
    'hey',
    'hola',
    'howdy',
    'good morning',
    'good evening',
    'good afternoon',
    'what[^ ]* up',
    'sup',
    'how are you',
    'ciao'
  ].join('|');
};
