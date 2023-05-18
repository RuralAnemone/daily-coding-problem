import 'jest'
import { countStaircaseClimbs, countStaircaseClimbsGivenX } from '.'

describe('given test(s)', () => {
	test('n=4', () => {
		expect(countStaircaseClimbs(4)).toBe(5);
	})
})