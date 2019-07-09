function binarySearch(array, target) {
    if(array.length === 0) return false;
    let pivot = Math.floor(array.length / 2);
    let left = array.slice(0, pivot);
    let right = array.slice(pivot + 1);

    if(array[pivot] > target){
        return binarySearch(left, target);
    }else if(array[pivot] < target){
        return binarySearch(right, target);
    }else{
        return true;
    }
}

function binarySearchIndex(array, target) {
    if(array.length === 0) return -1;
    let pivot = Math.floor(array.length / 2);
    let left = array.slice(0, pivot);
    let right = array.slice(pivot + 1);

    if(array[pivot] > target){
        let idx = binarySearchIndex(left, target);
        return idx === -1 ? -1 : idx;
    }else if(array[pivot] < target){
        let idx =  binarySearchIndex(right, target);
        return idx === -1 ? -1 : idx + pivot + 1;
    }else{
        return pivot;
    }
}


module.exports = {
    binarySearch,
    binarySearchIndex
};