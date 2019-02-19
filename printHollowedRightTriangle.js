// '*'
// 
// '*'
// '**'
// 
// '*'
// '**'
// '***'
// 
// '*'
// '**'
// '* *'
// '****'
// 
// '*'
// '**'
// '* *'
// '*  *'
// '*****'

function printHollowedRightTriangle(n) {
	for (let i = 0; i < n; i++) {
		let str = '';
		for (let j = 0; j < i + 1; j++) {
			if ((i < n - 1 && (j === 0 || j === i)) || (i === n - 1)) {
				str += '*';
			} else {
				str += ' ';
			}
		}
		console.log(str);
	}
}

function printHollowedRightTriangle(n, row = 0, str = '') {
	if (row === n) return;
	if (str.length === row + 1) {
		console.log(str);
		return printHollowedRightTriangle(n, row + 1);
	}

	const add = ((row < n - 1 && (str.length === 0 || str.length === row)) || (row === n - 1)) ? '*' : ' ';
	printHollowedRightTriangle(n, row, str + add);
}