import 'jest'
import { countStaircaseClimbs, countStaircaseClimbsGivenX } from '.'

describe('given test(s)', () => {
	test('n=4', () => {
		expect(countStaircaseClimbs(4)).toBe(5);
	})
})

describe('self-testing', () => {
	test('the x test', () => {
		expect(countStaircaseClimbsGivenX(4, [1, 3, 5])).toBe(3);
	})
})