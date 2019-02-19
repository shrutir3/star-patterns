function printSquare(n) {
   for (let i = 0; i < n; i++) {
      let str = '';
      for (let j = 0; j < n; j++) {
         str += '*';
      }
      console.log(str);
   }
}

/***** Recursive solution *****/

function printSquare(n, row = 0, side = '') {
	if (row === n) {
		return;
	}
	if (side.length === n) {
		console.log(side);
		return printSquare(n, row + 1);
	}

	if (side.length < n) {
		side += '*';
	}
	printSquare(n, row, side);
}