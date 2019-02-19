function printHollowSquareWithDiagonal(n) {
	for (let i = 0; i < n; i++) {
		let str = '';
		for (let j = 0; j < n; j++) {
			if (i === 0 || i === n - 1 || (i > 0 && i < n - 1 && (j === 0 || j === n - 1)) || i === j || i === n - 1 - j) {
				str += '*';
			} else {
				str += ' ';
			}
		}
		console.log(str);
	}
}

function printHollowSquareWithDiagonal(n, row = 0, str = '') {
	if (row === n) {
		return;
	}
	if (str.length === n) {
		console.log(str);
		return printHollowSquareWithDiagonal(n, row + 1);
	}

	const add = (row === 0 || row === n - 1 || (row > 0 && row < n - 1 && (str.length === 0 || str.length === n - 1)) || row === str.length || row === n - 1 - str.length) ? '*' : ' ';
	printHollowSquareWithDiagonal(n, row, str + add);
}