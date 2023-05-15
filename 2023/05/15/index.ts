/**
 * This problem was asked by Apple.
 * 
 * Implement a job scheduler which takes in a function `f` and an integer `n`, and calls `f` after `n` milliseconds.
 */
function jobScheduler(f: Function, n: number = 1000): Promise<void> {
	return new Promise((res, _rej) => {
		setTimeout(() => {
			f();
			res();
		}, n);
	});
}

export { jobScheduler };

// not sure how to write tests for this so let's go turn on copilot!!!!