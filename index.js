require('babel-polyfill');
require('babel-register');

var _contexts = require('./src/helpers/contexts');
var _contexts2 = _interopRequireDefault(_contexts);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const sentence = 'birds birds bird staples party frog army of frogs puddle happy'.replace(/[^a-zA-Z0-9]\s/g, '');


(0, _contexts2.default)(sentence);
