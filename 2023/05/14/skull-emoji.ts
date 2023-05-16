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
/**
 *  Given a list of integers, write a function that returns the
 * largest sum of non-adjacent numbers. Numbers can be 0 or negative.
 *
 * For example, `[2, 4, 6, 2, 5]` should return 13, since we pick `2`, `6`, and `5`.
 * `[5, 1, 1, 5]` should return `10`,since we pick 5 and 5.
 *
 * Follow-up: Can you do this in $O(N)$ time and constant space?
 */
function firstNaïveSolution(array: number[]): number {
	let largestNonAdjacentSum = -Infinity;

	if (array.length <= 2) {
		return Math.max(...array);
	}

	// do it for first and second element in array

	for (let i = 0; i < array.length; i++) {
		// oh god I have no idea
	}

	return largestNonAdjacentSum;
}