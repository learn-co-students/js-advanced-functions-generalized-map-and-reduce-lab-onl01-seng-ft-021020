function map(array, fn){
    const newArray = []
    array.forEach(element => newArray.push(fn(element)))
    return newArray 
}

function reduce(array, fnc, startingPoint){
    let value;
    let index;

    if(!!startingPoint){
        value = startingPoint;
        index = 0;
    } else {
        value = fnc(array[0],array[1]);
        index = 2;
    }

    // debugger
    for(index; index< array.length; index++){
        value = fnc(value, array[index])
    }
    return value;
}