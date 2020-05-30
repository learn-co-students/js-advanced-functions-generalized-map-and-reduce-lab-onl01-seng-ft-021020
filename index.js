// Add your functions here
function map(sarray, cb) {
  let result = []

  for (let i = 0; i < sarray.length; i++) {
    let theElement = sarray[i]
    result.push(cb(theElement))
  }

  return result;
}

function reduce(sarray, cb, starting){
  let result = (!!starting) ? starting : sarray[0]
  let i = (!!starting) ? 0 : 1

  for (; i < sarray.length; i++) {
    result = cb(sarray[i], result)
  }

  return result;
}
