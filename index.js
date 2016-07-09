require('babel-polyfill');
require('babel-register');

var _animals = require('./src/categories/animals');

var _animals2 = _interopRequireDefault(_animals);

var _contexts = require('./src/helpers/contexts');

var _contexts2 = _interopRequireDefault(_contexts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var anima lsRegex = (0, _animals2.default)();

const regex = new RegExp(`\\b(${animalsRegex})\\b`, 'igm');
const sentence = 'blah blah wolf wolfs birds bird catssss asdasdcat';
debugger;
(0, _contexts2.default)(sentence, regex);
