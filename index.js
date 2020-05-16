function map(arr, func) {
  let newArr = []
  arr.forEach( el => newArr.push(func(el)))
  return newArr
}

function reduce(arr, func, start) {
  let total = (!!start) ? start : arr[0]
  let itarr = (!!start) ? arr.slice(0) : arr.slice(1)   

  itarr.forEach( el => total = func(el, total))
  return total
}
