'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var formatClassName = exports.formatClassName = function formatClassName(props, base) {
  var className = props.className,
      cssModule = props.cssModule;

  var output = [base];
  var propsToFormat = ['name', 'size', 'spin', 'pulse', 'border', 'fixedWidth', 'inverse', 'flip', 'rotate', 'stack'];

  var simpleFormatter = function simpleFormatter(appendValue) {
    return 'fa-' + appendValue;
  };

  var complexFormatter = function complexFormatter(appendValue1, appendValue2) {
    return 'fa-' + appendValue1 + '-' + appendValue2;
  };

  var formatterMap = {
    name: function name(_name) {
      return simpleFormatter(_name);
    },
    size: function size(_size) {
      return simpleFormatter(_size);
    },
    spin: function spin() {
      return simpleFormatter('spin');
    },
    pulse: function pulse() {
      return simpleFormatter('pulse');
    },
    border: function border() {
      return simpleFormatter('border');
    },
    fixedWidth: function fixedWidth() {
      return simpleFormatter('fw');
    },
    inverse: function inverse() {
      return simpleFormatter('inverse');
    },
    flip: function flip(flipVal) {
      return complexFormatter('flip', flipVal);
    },
    rotate: function rotate(rotateVal) {
      return complexFormatter('rotate', rotateVal);
    },
    stack: function stack(stackVal) {
      return complexFormatter('stack', stackVal);
    }
  };

  propsToFormat.map(function (x) {
    return { name: x, val: props[x] };
  }).reduce(function (accumulator, currentValue) {
    return output.push(cssModule ? cssModule[formatterMap[currentValue.name](currentValue.val)] : formatterMap[currentValue.name](currentValue.val));
  }, output);

  className && output.push(className);

  return output;
};