function map(array, fn){
    let newArray = [];
    array.forEach(index => {
        newArray.push(fn(index))
    });
    return newArray;
}

function reduce(array, fn, startingPoint){
    let accumulator;
    let index;

    if(!!startingPoint){
        accumulator = startingPoint;
        index = 0;
    } else {
        accumulator = fn(array[0],array[1]);
        index = 2;
    }
    for(index; index< array.length; index++){
        accumulator = fn(accumulator, array[index])
    }
    return accumulator;
}