function swap(array, idx1, idx2) {
    [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
    return array;
}

function bubbleSort(array) {

    let swapped = false;
    while(swapped === false){
        swapped = true;
        for(let i = 0; i < array.length - 1; i++){
            if(array[i] > array[i+1]){
                [array[i], array[i+1]] = [array[i+1], array[i]];
                swapped = false;
            }
        }
    }
    return array;
}


module.exports = {
    bubbleSort,
    swap
};