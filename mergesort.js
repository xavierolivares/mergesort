// function merge (leftArray, rightArray) {
//     let leftIdx = 0;
//     let rightIdx = 0;
//     let sortedArray = [];
    
//     while(leftIdx < leftArray.length && rightIdx < rightArray.length) {
//         if(leftArray[leftIdx] < rightArray[rightIdx]){
//             sortedArray.push(leftArray[leftIdx]);
//             leftIdx++;
//         } else {
//             sortedArray.push(rightArray[rightIdx]);
//             rightIdx++;
//         }
//     }

//     return sortedArray.concat(rightArray.slice(rightIdx)).concat(leftArray.slice(leftIdx))
// }
function merge (leftArray, rightArray) {
    let leftIdx = 0;
    let rightIdx = 0;
    let sortedArray = [];
    
    while(leftIdx < leftArray.length && rightIdx < rightArray.length) {
        if(leftArray[leftIdx] < rightArray[rightIdx]){
            sortedArray.push(leftArray[leftIdx]);
            leftIdx++;
        } else {
            sortedArray.push(rightArray[rightIdx]);
            rightIdx++;
        }
    }

    return sortedArray
        .concat(rightArray.slice(rightIdx))
        .concat(leftArray.slice(leftIdx))
}

function mergeSort (array) {
    if (array.length <= 1) {
        return array;
    } 
    let middlePoint = Math.floor(array.length / 2)
    let leftArray = array.slice(0,middlePoint)
    let rightArray = array.slice(middlePoint)

    return merge(mergeSort(leftArray), mergeSort(rightArray))
}


// function mergeSort(array) {
//     merge(split(array))
// }


// split is the base case

// if array is one element, it's sorted
// otherwise, split the array and merge sort each half
// merge combined halves into sorted whole
