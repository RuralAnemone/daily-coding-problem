import 'jest'
import { largestNonAdjacentSum } from './index'

describe("given tests", () => {
	test("[2, 4, 6, 2, 5] => 13", () => {
		expect(largestNonAdjacentSum([2, 4, 6, 2, 5])).toBe(13);
	});

	test("[5, 1, 1, 5] => 10", () => {
		expect(largestNonAdjacentSum([5, 1, 1, 5])).toBe(10);
	});
});

describe("self testing (known edge cases, etc)", () => {
	test("[1, 1, 1] => 2", () => {
		expect(largestNonAdjacentSum([1, 1, 1])).toBe(2);
	});

	test("[1, 1, 1, 1] => 2", () => {
		expect(largestNonAdjacentSum([1, 1, 1, 1])).toBe(2);
	});

	test("[4, 5] => 5", () => {
		expect(largestNonAdjacentSum([4, 5])).toBe(5);
	});

	test("[5, 4] => 5", () => {
		expect(largestNonAdjacentSum([5, 4])).toBe(5);
	});
});