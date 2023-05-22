import 'jest'
import { monteCarloPi } from '.'

describe('self-testing', () => {
	test('three decimal places', () => {
		expect(monteCarloPi(10000000)).toBeCloseTo(Math.PI, 3)
		// hello! if you see this it probably means the test failed :)
		// due to the nature of monte carlo methods, it's bound to happen sometime
		// should be pretty rare so consider yourself lucky hehe
	})
})

// idk that should be enough