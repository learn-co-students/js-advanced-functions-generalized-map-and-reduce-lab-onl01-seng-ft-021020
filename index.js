function map(sourceArray, x) {
  let m = []

  for (let i = 0; i < sourceArray.length; i++) {
    let e = sourceArray[i]
    m.push(x(e))
  }
  return m;
}

function reduce(sourceArray, x, starting) {
  let r = (!!starting) ? starting : sourceArray[0]
  let i = (!!starting) ? 0 : 1

  for (; i < sourceArray.length; i++) {
    r = x(sourceArray[i], r)
  }
  return r;
}