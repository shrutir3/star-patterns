function printHollowSquare(n) {
	for (let i = 0; i < n; i++) {
		let str = '';
		for(let j = 0; j < n; j++) {
			if (i === 0 || i === n - 1 || (i > 0 && i < n - 1 && (j === 0 || j === n - 1))) {
				str += '*';
			} else {
				str += ' ';
			}
		}
		console.log(str);
	}
}

/****** Recursive solution ******/

function printHollowSquare(n, row = 0, str = '') {
	if ( row === n ) {
		return;
	}
	if ( str.length === n ) {
		console.log(str);
		return printHollowSquare(n, row + 1);
	}

	if (row === 0 || row === n - 1 || (row > 0 && row < n -1 && (str.length === 0 || str.length === n - 1))) {
		str += '*';
	} else {
		str += ' ';
	}
	printHollowSquare(n, row, str);
}