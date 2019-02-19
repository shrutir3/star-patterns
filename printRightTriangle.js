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
// '***'
// '****'

function printRightTriangle(n) {
	for (let i = 0; i < n; i++) {
		let str = '';
		for (let j = 0; j < i + 1; j++) {
			str += '*';
		}
		console.log(str);
	}
}

function printRightTriangle(n, row = 0, str = '') {
	if (row === n) return;
	if (str.length === row + 1) {
		console.log(str);
		return printRightTriangle(n, row + 1);
	}

	printRightTriangle(n, row, str + '*');
}