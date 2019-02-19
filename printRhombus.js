// '*'       --> 1
// 
// ' **'     --> 3
// '** '
// 
// '  ***'   --> 5
// ' *** '
// '***  '
// 
// '   ****' --> 7,   0 1 2 * * * *  -> j < 3, j > 6, j < 7
// '  **** '          0 1 * * * * 6  -> j < 2, j > 5, j < 7
// ' ****  '          0 * * * * 5 6
// '****   '          * * * * 4 5 6


function printRhombus(n) {
	for (let i = 0; i < n; i++) {
		let str = '';
		for (let j = 0; j < 2 * n - 1; j++) {
			if (j < n - 1 - i || (j > (2 * n) - 2 - i && j < 2 * n - 1)) {
				str += ' ';
			} else {
				str += '*';
			}
		}
		console.log(str);
	}
}

function printRhombus(n, row = 0, str = '') {
	if (row === n) {
		return;
	}
	if (str.length === (2 * n) - 1) {
		console.log(str);
		return printRhombus(n, row + 1);
	}

	const add = (str.length < n - 1 - row || (str.length > 2 * n - 2 - row && str.length < 2 * n - 1)) ? ' ' : '*';
	printRhombus(n, row, str + add);
}