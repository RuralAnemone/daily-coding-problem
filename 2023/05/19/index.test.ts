import 'jest'
import { monteCarloPi } from '.'

describe('self-testing', () => {
	test('three decimal places', () => {
		expect(monteCarloPi(10000000)).toBeCloseTo(Math.PI, 3)
	})
})

// idk that should be enough