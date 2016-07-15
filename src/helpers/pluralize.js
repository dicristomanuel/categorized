'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pluralize = require('pluralize');

var _pluralize2 = _interopRequireDefault(_pluralize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function includes(value, array) {
  return array.indexOf(value) > -1;
}

exports.default = function (words) {
  words.forEach(function (word, idx, arr) {
    var pluralized = (0, _pluralize2.default)(word);
    if (!!pluralized && !includes(pluralized, arr)) {
      arr.push(pluralized);
    };
  });
  return words;
};
