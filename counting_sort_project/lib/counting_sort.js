function countingSort(arr, max) {
    const newArr = [];
    const counter = new Array(max + 1).fill(0);
    for(i = 0; i < arr.length; i++){
        counter[arr[i]]++;
    }


    for(let i = 0; i < counter.length; i++){
        for(let k = counter[i]; k > 0; k--){
            newArr.push(i);
        }
    }
    return newArr;
}

countingSort([4, 9, 0, 23, 15, 100, 66, 41, 5, 10], 100);

module.exports = {
    countingSort
};