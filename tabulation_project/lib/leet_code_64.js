// Work through this problem on https://leetcode.com/problems/minimum-path-sum/ and use the specs given there.
// Feel free to use this file for scratch work.

var minPathSum = function (grid) {

    const width = grid.length;
    const height = grid[0].length;

    const sumArr = new Array(height);
    for (let i = 0; i < width; i++) {
        sumArr[i] = (new Array(width));
    }
    sumArr[0][0] = grid[0][0];

    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            if (x === width - 1 && y === height - 1) {

                return sumArr[x][y];
            }
            if (x !== width - 1) {
                let sum = sumArr[x][y] + grid[x + 1][y];
                if (sumArr[x + 1][y] === undefined) {
                    sumArr[x + 1][y] = sum;
                } else if (sumArr[x + 1][y] > sum) {
                    sumArr[x + 1][y] = sum;
                }
            }
            if (y !== height - 1) {
                let sum = sumArr[x][y] + grid[x][y + 1];
                if (sumArr[x][y + 1] === undefined) {
                    sumArr[x][y + 1] = sum;
                } else if (sumArr[x][y + 1] > sum) {
                    sumArr[x][y + 1] = sum;
                }
            }
        }
    }
};

grid = [[1,2,3,4,5],
        [6,7,8,9,0],
        [11,23,4,1,2],
        [2,5,7,1,2],
        [1,2,34,5,2]];

console.log(minPathSum(grid));