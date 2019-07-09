function radixSort(arr) {
    if(!Array.isArray(arr)) return null;
    if(arr.length <= 1) return arr;
    let newArr = arr.slice(); 
    const maxLength = getMaxDigits(arr);
    for(let i = 0; i <= maxLength; i++){
        const buckets = Array.from({length: 10}, () => []);
        for(let k = 0; k < newArr.length; k++){
            let val = getDigitFrom(newArr[k], i);
            buckets[val].push(newArr[k]);
        }
        newArr = [].concat(...buckets);
    }
    return newArr;
}

console.log(radixSort([100, 66, 41, 23, 15, 10, 9, 5, 4, 0]));

function getDigitFrom(num, place){
    return Math.floor((Math.abs(num)) / Math.pow(10, place) % 10);
}

function getIntLength(num){
    return num === 0 ? 0 :  Math.floor(Math.log10(num)) + 1;
}

function getMaxDigits(nums){
    let longestValue = 0;
    for(let i = 0; i < nums.length; i++){
        console.log(longestValue);

        longestValue = Math.max(getIntLength(nums[i]), longestValue);
    }
    return longestValue;
}

module.exports = {
    radixSort
};