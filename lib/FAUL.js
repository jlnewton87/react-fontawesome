'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var faul = function faul(props) {
  var className = props.className;


  var classNames = ['fa-ul'];

  className && classNames.push(className);

  return _react2.default.createElement(
    'ul',
    { className: classNames.join(' ') },
    props.children
  );
};

exports.default = faul;
module.exports = exports['default'];