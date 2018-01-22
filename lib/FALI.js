'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fali = function fali(props) {
  var border = props.border,
      cssModule = props.cssModule,
      className = props.className,
      fixedWidth = props.fixedWidth,
      flip = props.flip,
      inverse = props.inverse,
      name = props.name,
      pulse = props.pulse,
      rotate = props.rotate,
      size = props.size,
      spin = props.spin,
      stack = props.stack,
      _props$tag = props.tag,
      tag = _props$tag === undefined ? 'span' : _props$tag,
      ariaLabel = props.ariaLabel;


  var classNames = [];

  if (cssModule) {
    classNames.push(cssModule['fa']);
    classNames.push(cssModule['fa-li']);
    classNames.push(cssModule['fa-' + name]);
    size && classNames.push(cssModule['fa-' + size]);
    spin && classNames.push(cssModule['fa-spin']);
    pulse && classNames.push(cssModule['fa-pulse']);
    border && classNames.push(cssModule['fa-border']);
    fixedWidth && classNames.push(cssModule['fa-fw']);
    inverse && classNames.push(cssModule['fa-inverse']);
    flip && classNames.push(cssModule['fa-flip-' + flip]);
    rotate && classNames.push(cssModule['fa-rotate-' + rotate]);
    stack && classNames.push(cssModule['fa-stack-' + stack]);
  } else {
    classNames.push('fa');
    classNames.push('fa-li');
    classNames.push('fa-' + name);
    size && classNames.push('fa-' + size);
    spin && classNames.push('fa-spin');
    pulse && classNames.push('fa-pulse');
    border && classNames.push('fa-border');
    fixedWidth && classNames.push('fa-fw');
    inverse && classNames.push('fa-inverse');
    flip && classNames.push('fa-flip-' + flip);
    rotate && classNames.push('fa-rotate-' + rotate);
    stack && classNames.push('fa-stack-' + stack);
  }

  className && classNames.push(className);

  return _react2.default.createElement(
    'li',
    null,
    _react2.default.createElement('i', { className: classNames.join(' ') }),
    props.children
  );
};

exports.default = fali;
module.exports = exports['default'];