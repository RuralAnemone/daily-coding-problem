import 'jest'
import { jobScheduler } from '.'

describe('test jobScheduler', () => {
	test('should call f after n milliseconds', async () => {
		const f = jest.fn();
		const n = 1000;
		await jobScheduler(f, n);
		expect(f).toHaveBeenCalled();
	});
	// ohh this is what mocking is for
});