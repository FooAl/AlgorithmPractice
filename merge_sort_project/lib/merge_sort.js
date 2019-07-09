function merge(array1, array2) {
    const sortedArray = [];
    while(array1.length > 0 || array2.length > 0){
        let ele1;
        let ele2;
        if(array1.length === 0){
            ele1 = Infinity;
        }else{
            ele1 = array1[0];
        }
        if (array2.length === 0) {
            ele2 = Infinity;
        } else {
            ele2 = array2[0];
        }

        let next;
        if(ele1 > ele2){
            next = array2.shift();
        }else{
            next = array1.shift();
        }
        sortedArray.push(next);
    }
    return sortedArray;
}

function mergeSort(array) {
    if(array.length <= 1) return array;

    let center = Math.floor(array.length/2);
    let left = array.slice(0, center);
    let right = array.slice(center);

    let sortedLeft = mergeSort(left);
    let sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
}

mergeSort([2, -1, 4, 3, 7, 3])

module.exports = {
    merge,
    mergeSort
};