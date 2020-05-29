// Add your functions here
function map(ray, cb) {
    let result = []

    for (let i = 0; i < ray.length; i++) {
        let item = ray[i]
        result.push(cb(item))
    }

    return result
}

function reduce(ray, cb, starting) {
    let total = (!!starting) ? starting : ray[0]
    let i = (!!starting) ? 0 : 1

    for (; i < ray.length; i++) {
        total = cb(ray[i], total)
    }

    return total

}