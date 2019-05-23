function split (array) {
    if (array.length === 1) {
        return array;
    }

    let middlePoint = Math.floor(array.length / 2)
    console.log('this is the midpoint', middlePoint)

    let leftArray = array.slice(0,middlePoint)
    let rightArray = array.slice(middlePoint)
    return [leftArray, rightArray]
}