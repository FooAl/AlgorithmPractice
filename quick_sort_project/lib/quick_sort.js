function quickSort(array) {
    if(array.length <= 1) return array;

    let pivot = array.pop();
    let left = [];
    let right = [];
    array.forEach(ele => {
        if(ele > pivot){
            right.push(ele);
        }else{
            left.push(ele);
        }
    });

    return quickSort(left).concat([pivot], quickSort(right));
}

// quickSort([2, -1, 4, 3, 7, 3]);

module.exports = {
    quickSort
};