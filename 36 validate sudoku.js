let board1 = [
	["5", "3", ".", ".", "7", ".", ".", ".", "."],
	["6", ".", ".", "1", "9", "5", ".", ".", "."],
	[".", "9", "8", ".", ".", ".", ".", "6", "."],
	["8", ".", ".", ".", "6", ".", ".", ".", "3"],
	["4", ".", ".", "8", ".", "3", ".", ".", "1"],
	["7", ".", ".", ".", "2", "3", ".", ".", "6"],
	[".", "6", ".", ".", ".", ".", "2", "8", "."],
	[".", ".", ".", "4", "1", "9", ".", ".", "5"],
	[".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
let board2 = [
	["8", "3", ".", ".", "7", ".", ".", ".", "2"],
	["6", ".", ".", "1", "9", "5", ".", ".", "."],
	[".", "9", "8", ".", ".", ".", ".", "6", "."],
	["8", ".", ".", ".", "6", ".", ".", ".", "3"],
	["4", ".", ".", "8", ".", "3", ".", ".", "1"],
	["7", ".", ".", ".", "2", ".", ".", ".", "6"],
	[".", "6", ".", ".", ".", ".", "2", "8", "."],
	[".", ".", ".", "4", "1", "9", ".", ".", "5"],
	[".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
function validateBoard(board) {
	//validate all rows
	let a = validateRows(board);
	console.log(`Rows Validity is : ${a}`);

	//validate all cols
	let b = validateColumns(board);
	console.log(`Column  Validity is : ${b}`);
	// valid all subBoxes
	// let c = validateBoxes(board);
}
function validateRows(board) {
	//prep a single row for validation
	let selectedRow = [];
	let isValid = true;
	// console.log(board);
	let validityResult = true;

	for (let i = 0; i < board.length; i++) {
		selectedRow = board[i];
		selectedRow = selectedRow.filter((item) => item !== ".");
		validityResult = validityResult && validateSelectedRow(selectedRow);
	}
	return validityResult;
}

function validateSelectedRow(row) {
	let testSet = new Set();
	row.forEach((element) => {
		testSet.add(element);
	});
	if (testSet.size != row.length) {
		return false;
	} else return true;
}
function validateSelectedCol(col) {
	//todo  modify for cols
	let testSet = new Set();
	col.forEach((element) => {
		testSet.add(element);
	});
	if (testSet.size != col.length) {
		return false;
	} else return true;
}

function validateBoxes(board) {
	let boxes = Boxify(board);
}
function Boxify(board) {
	let k = 0; // index for imaginary rows of boxes
	let boxes = [];
	let boxRowIndex = 0;
	let box = [];
	let i = 0;
	for (k = 0; k < 3; k++) {
		for (i = k * i; i < (k + 1) * 3; i++) {
			for (j = k * 1; j < (k + 1) * 3; j++) {
				box[(k + 1) * i] = board[(i, j)];
			}
			boxes.push(box);
		}
	}
	console.log(box);
}
function _validateBox(box) {}
function validateColumns(board) {
	//prep a single column for validation
	let selectedCol = [];
	// console.log(board);
	let validityResult = true;

	for (let i = 0; i < board.length; i++) {
for (let j = 0; j < board.length; j++) {
   	selectedCol[j] = board[j][i];
    
}
		selectedCol = selectedCol.filter((item) => item !== ".");
		validityResult = validityResult && validateSelectedCol(selectedCol);
	}
	return validityResult;
}

validateBoard(board1);
