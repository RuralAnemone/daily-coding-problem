import 'jest'
import { autocomplete } from '.'

describe('given test(s)', () => {
	test('the only given one idk', () => {
		expect(autocomplete('de', ['dog', 'deer', 'deal'])).toEqual(expect.arrayContaining(['deer', 'deal']));
	})
})