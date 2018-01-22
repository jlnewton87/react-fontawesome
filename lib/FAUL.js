'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var faul = function faul(props) {
  return _react2.default.createElement(
    'ul',
    null,
    props.children
  );
};

exports.default = faul;
module.exports = exports['default'];