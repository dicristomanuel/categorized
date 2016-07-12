import Categorized from './src/categorized';

const sentence = 'Give me a discount to buy groceries in chicago'.replace(/[^a-zA-Z0-9]\s/g, '');

let instance = new Categorized()
instance.teach()
debugger;
