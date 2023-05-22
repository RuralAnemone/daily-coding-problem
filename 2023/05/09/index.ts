/**
 * Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.
 *
 * For example, the input `[3, 4, -1, 1]` should give `2`. The input `[1, 2, 0]` should give `3`.
 *
 * You can modify the input array in-place.
 */
function firstMissing(array: number[]): number | void {
	array = array.sort((a, b) => a - b).filter(e => e >= 0);
	let cache = array[0];
	for (const e of array) {
		if (e === cache) continue;
		if (e - 1 > cache) {
			// a number was skipped
			return cache + 1;
		} else cache = e;
	}

	// if nothing was skipped,
	return cache + 1;
}

export default firstMissing;