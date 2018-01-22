export const formatClassName = (props, base) => {
  let { className, cssModule } = props
  let output = [ base ]
  let propsToFormat = [
    'name',
    'size',
    'spin',
    'pulse',
    'border',
    'fixedWidth',
    'inverse',
    'flip',
    'rotate',
    'stack'
  ]

  let simpleFormatter = (appendValue) => {
    return `fa-${appendValue}`
  }

  let complexFormatter = (appendValue1, appendValue2) => {
    return `fa-${appendValue1}-${appendValue2}`
  }

  let formatterMap = {
    name: (name) => simpleFormatter(name),
    size: (size) => simpleFormatter(size),
    spin: () => simpleFormatter('spin'),
    pulse: () => simpleFormatter('pulse'),
    border: () => simpleFormatter('border'),
    fixedWidth: () => simpleFormatter('fw'),
    inverse: () => simpleFormatter('inverse'),
    flip: (flipVal) => complexFormatter('flip', flipVal),
    rotate: (rotateVal) => complexFormatter('rotate', rotateVal),
    stack: (stackVal) => complexFormatter('stack', stackVal)
  }

  propsToFormat.map(x => {
    return {name: x, val: props[x]}
  }).reduce((accumulator, currentValue) => {
    return output.push(
      cssModule ?
        cssModule[formatterMap[currentValue.name](currentValue.val)] :
        formatterMap[currentValue.name](currentValue.val)
    )
  }, output)

  className && output.push(className)

  return output;
}