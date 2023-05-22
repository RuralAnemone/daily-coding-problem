import 'jest'
import { OrderLog } from '.'

describe('self-testing', () => {
	test('random numbers idk', () => {
		let obj = new OrderLog();
		obj.record(1);
		obj.record(2);
		obj.record(3);
		obj.record(4);
		obj.record(5);

		expect(obj.get_last(1)).toBe(5);
	})
})