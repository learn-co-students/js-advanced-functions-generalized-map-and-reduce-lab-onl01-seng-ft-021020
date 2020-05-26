// Add your functions here
function map(values, fun){
    return values.map(fun)
}

function reduce(values, fun, startingPoint = 0){
   
    let result = values.reduce(fun)

    if(startingPoint != 0){
        result += startingPoint

    }

    return result

}