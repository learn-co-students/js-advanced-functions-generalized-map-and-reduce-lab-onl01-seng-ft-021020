// Add your functions here

// my own map-like methods
//     map returns an array with all values made negative
//       1) transforms correctly
//       map returns an array with the original values
//         2) transforms correctly
//       map returns an array with the original values multiplied by 2
//         3) transforms correctly
//       map returns an array with the original values squared
//         4) transforms correctly
function map(arr, callback){
    let newArr = [] 
    arr.forEach(element => {
       newArr.push(callback(element)) 
    });
    return newArr
}
//   my own reduce-like methods
//     reduce returns a running total when not given a starting point
//       5) reduces correctly
//     reduce returns a running total when given a starting point
//       6) reduces correctly
//     reduce returns true when all values are true
//       7) reduces correctly
//     reduce returns false when any value is false
//       8) reduces correctly
//     reduce returns true when a true value is present
//       9) reduces correctly
//     reduce returns false when no true value is present
//       10) reduces correctly

function reduce(arr, callback, start){
    let s = (!!start) ? start : arr[0]
    let i = (!!start) ? 0 : 1

    for (; i < arr.length; i++) {
      s = callback(arr[i], s)
    }
    return s
}
