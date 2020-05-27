// Add your functions here
function map(array, operation) {
    const newArray = [];
    for (let i=0; i<array.length; i++) {
        newArray.push(operation(array[i]))
    }
    return newArray;
}

function reduce(array, operation, start){
    let total = (!!start) ? starting : array[0]
    let i = (!!start) ? 0 : 1

    for (i; i < array.length; i++) {
        total = operation(array[i], total)
    }

    return total
}