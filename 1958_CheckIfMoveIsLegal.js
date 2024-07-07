// 1st soluton
//  O(1) time | O(1) space
/**
 * @param {character[][]} board
 * @param {number} rMove
 * @param {number} cMove
 * @param {character} color
 * @return {boolean}
 */
var checkMove = function(board, rMove, cMove, color) {
    var m = board.length;
    var n = board[0].length;
    console.log(m, n);
    var dirs = [[-1, 0], [1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]]
    for (let i=0; i < dirs.length; i++) {
        var dx = dirs[i][0];
        var dy = dirs[i][1];
        var x = rMove + dx;
        var y = cMove + dy;
        var valid = false;
        var count = 0;
        while (0 <= x && x < m && 0 <= y && y < n) {
            if (board[x][y] == ".") {
                break;
            } else if (board[x][y] == color) {
                valid = count >= 1;
                break;
            } else {
                count += 1;
            }
            x += dx;
            y += dy;
        }
        if (valid) {
            return true;
        }
    }
    return false;
};