import 'jest'
import { getRandomElement } from '.'

describe('copilot does testing', () => {
	test('getRandomElement', () => {
		const arr = [1, 2, 3, 4, 5]
		const randomElement = getRandomElement(arr)
		expect(arr).toContain(randomElement)
		// ok
		// I mean I really can't think of any time where I've had to use anything like this
		// or that I've even heard of anything like it
		// idk

		// copilot keeps trying to get me to write the following text:
		// but I guess it's good to know that it exists
		// :)
	})
})