let naïveArray: number[] = [];

/**
 * first naïve solution
 * very innefficient lol
 * from what I can tell it's O(n²) time and O(n²) space
 * 
 * 1. start from index 0
 * 2. if length <= 2
 *    a. add (both) element(s) to array
 * 3. for every element in array (save for element 0 and 1),
 *    a. firstNaïveSolution(array.slice(2))
 *    b. firstNaïveSolution(array.slice(3))
 *    c. etc
 */
function firstNaïveSolutionPush(array: number[], initialSum: number = 0): void {
	if (array.length <= 2) {
		for (const e of array) naïveArray.push(e);
	}

	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length - i; j++) firstNaïveSolutionPush(array.slice(i));
	}
}

function firstNaïveSolution(): number {
	return Math.max(...naïveArray);
}