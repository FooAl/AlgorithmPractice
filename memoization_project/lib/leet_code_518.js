// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.


// memo stores amount of valid arrays for each number
// ex: 2: [[1, 1], [2]]
var change = function (amount, coins, memo = {}) {
    let key = amount + "-" + coins;
    if(key in memo) return memo[key];
    if(amount === 0) return 1;

    let currentCoin = coins[coins.length - 1];
    
    let total = 0;
    
    for(let qty = 0; qty * currentCoin <= amount; qty++){
        total += change(amount - qty * currentCoin, coins.slice(0,-1), memo);
    }
    memo[key] = total;
    return memo[key];
};

var change2 = function (amount, coins){
    let array = Array(amount + 1).fill(0);

    array[0] = 1;

    for(const coin of coins){
        for(let j = coin; j <= amount; j++){
            array[j] += array[j - coin];
            console.log(array);
        }
    }
    // console.log(array);
    return array[amount];
};


console.log(change2(10, [2,3, 5, 10]));

// var change = function (amount, coins, memo = {}) {
//     // if(amount in memo) return memo[amount];
//     // let counter = 0;
//     if (amount in memo) return memo[amount];

//     const paths = [];
//     for (let i = 0; i < coins.length; i++) {
//         const subPath = path;
//         const coin = coins[i];
//         let subAmt = amount - coin;
//         if (subAmt > 0) {
//             subPath.push(coin);
//             // console.log(subPath);
//             pathArrs.push(change(subAmt, coins, memo));
//         } else if (subAmt === 0) {
//             subPath.push(coin);
//             subPath.sort();
//             // console.log(subPath);
//             if (!pathArrs.includes(subPath)) {
//                 pathArrs.push(subPath);
//             }
//             return pathArrs;
//         }
//     }
//     // console.log(memo);
//     return pathArrs.length;
// };