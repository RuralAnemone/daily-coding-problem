/**
 *  Given a list of integers, write a function that returns the
 * largest sum of non-adjacent numbers. Numbers can be 0 or negative.
 *
 * For example, `[2, 4, 6, 2, 5]` should return 13, since we pick `2`, `6`, and `5`.
 * `[5, 1, 1, 5]` should return `10`,since we pick 5 and 5.
 *
 * Follow-up: Can you do this in $O(N)$ time and constant space?
 */
function largestNonAdjacentSum(array: number[]): number {
	// adapted from https://github.com/ruppysuppy/Daily-Coding-Problem-Solutions/blob/master/Solutions/009.py
	let included = 0;
	let excluded = 0;

	for (const number of array) {
		[included, excluded] = [Math.max(excluded + number, number), Math.max(included, excluded)];
	}

	return Math.max(included, excluded);

	// I have a vague idea of how this works
	// if I can figure out a way to explain it, I'll come back and add it
	// maybe use manim (:
}

export { largestNonAdjacentSum };