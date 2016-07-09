require('babel-polyfill');
require('babel-register');

var _amphibian = require('./src/categories/amphibian');

var _amphibian2 = _interopRequireDefault(_amphibian);

var _contexts = require('./src/helpers/contexts');

var _contexts2 = _interopRequireDefault(_contexts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const regex = new RegExp(`\\b(${(0, _amphibian2.default)()})\\b`, 'igm');
const sentence = 'blah blah wolf wolfs birds frogs frog army of frogs bird catssss asdasdcat'.replace(/[^a-zA-Z0-9]\s/g, '');
debugger;
(0, _contexts2.default)(sentence, regex);
