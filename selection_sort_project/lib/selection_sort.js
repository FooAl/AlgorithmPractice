function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr;

}

function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++){
        let smallest = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                smallest = j;
            }
        }
        if(smallest !== i){
            [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
        }
    }
    return arr;
}

module.exports = {
    selectionSort,
    swap
};