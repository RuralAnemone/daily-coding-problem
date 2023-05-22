/**
 * This problem was asked by Twitter.
 * 
 * You run an e-commerce website and want to record the last `N` `order` ids in a log.
 * Implement a data structure to accomplish this, with the following API:
 * 
 * - `record(order_id)`: adds the order_id to the log
 * - `get_last(i)`: gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.
 * 
 * You should be as efficient with time and space as possible.
 */
class OrderLog {
	private log: number[];

	constructor () {
		this.log = [];
	}

	record(oder_id: number) {
		// ew snake case
		// U+1F92E
		this.log.push(oder_id);
	}

	get_last(i: number) {
		return this.log[this.log.length - i];
	}

	// bruh how do I be less efficient with time and space
	// besides using a different language
}