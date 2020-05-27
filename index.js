// Add your functions here

function map(arr, callback){
    let newArr = [] 
    arr.forEach(element => {
       newArr.push(callback(element)) 
    });
    return newArr
}


function reduce(arr, callback, start){
    let s = (!!start) ? start : arr[0]
    let i = (!!start) ? 0 : 1

    for (; i < arr.length; i++) {
      s = callback(arr[i], s)
    }
    return s
}