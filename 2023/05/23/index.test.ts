import 'jest'
import { maximumValuesOfArrayGivenK } from '.'

describe('given test(s)', () => {
	test('[10, 5, 2, 7, 8, 7], 3 => [10, 7, 8, 8]', () => {
		expect(maximumValuesOfArrayGivenK([10, 5, 2, 7, 8, 7], 3)).toEqual([10, 7, 8, 8])
	})
})