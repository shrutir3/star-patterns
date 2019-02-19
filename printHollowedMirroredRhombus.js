// '*'       --> 1    *                        -> ;;;;;;;;j < 1 || j > 0 && j < 1
// 
// '** '     --> 3    * * 2                    -> j > 1, j < 3
// ' **'              0 * *                    -> j < 1
// 
// '***  '   --> 5    * * * 3 4                -> j < 0, j > 2, j < 5
// ' * * '            0 * 2 * 4                -> j < 1, j > 1, j < 3, j > 3, j < 5
// '  ***'            0 1 * * *                -> j < 2, j > 4, j < 5
// 
// '****   ' --> 7,   
// ' *  *  '          
// '  *  * '          
// '   ****'   

function printHollowedMirroredRhombus(n) {
	for (let i = 0; i < n; i++) {
		let str = '';
		for (let j = 0; j < 2 * n - 1; j++) {
			if (j < i || (j > n - 1 + i && j < 2 * n - 1) || (i > 0 && i < n - 1 && j > i && j < n - 1 + i)) {
				str += ' ';
			} else {
				str += '*';
			}
		}
		console.log(str);
	}
}

function printHollowedMirroredRhombus(n, row = 0, str = '') {
	if (row === n) return;
	if (str.length === 2 * n - 1) {
		console.log(str);
		return printHollowedMirroredRhombus(n, row + 1);
	}
	const add = (str.length < row || (str.length > n - 1 + row && str.length < 2 * n - 1) || (row > 0 && row < n - 1 && str.length > row && str.length < n - 1 + row)) ? ' ' : '*';
	printHollowedMirroredRhombus(n, row, str + add);
}