// '*'       --> 1
// 
// ' **'     --> 3
// '** '
// 
// '  ***'   --> 5    0 1 * * *      -> j < 2, j > 4, j < 5
// ' * * '            0 * 2 * 4      -> j < 1, (j > 1, j < 3), (j > 3, j < 5);;;;;;; j < 1, (i > 0, i < 2, j > 1, j < 3), (j > 3, j < 5)
// '***  '            * * * 3 4      -> j < 0, j > 2, j < 5
// 
// '   ****' --> 7,   0 1 2 * * * *  -> j < 3, j > 6, j < 7
// '  *  * '          0 1 * 3 4 * 6  -> j < 2, j > 2, j < 5, j > 5, j < 7
// ' *  *  '          0 * 2 3 * 5 6
// '****   '          * * * * 4 5 6

function printHollowRhombus(n) {
	for (let i = 0; i < n; i++) {
		let str = '';
		for (let j = 0; j < 2 * n - 1; j++) {
			if (j < n - 1 - i || (j > (2 * n) - 2 - i && j < 2 * n - 1) || (i > 0 && i < n - 1 && (j > n - 1 - i && j < (2 * n) - 2 - i))) {
				str += ' ';
			} else {
				str += '*';
			}
		}
		console.log(str);
	}
}

function printHollowRhombus(n, row = 0, str = '') {
	if (row === n) return;
	if (str.length === 2 * n - 1) {
		console.log(str);
		return printHollowRhombus(n, row + 1);
	}
	const add = (str.length < n - 1 - row || (str.length > (2 * n) - 2 - row && str.length < 2 * n - 1) || (row > 0 && row < n - 1 && (str.length > n - 1 - row && str.length < (2 * n) - 2 - row))) ? ' ' : '*';
	printHollowRhombus(n, row, str + add);
}