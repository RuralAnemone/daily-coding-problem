import 'jest'
import { autocomplete } from '.'

describe('given test(s)', () => {
	test('the only given one idk', () => {
		expect(autocomplete('de', ['dog', 'deer', 'deal'])).toEqual(expect.arrayContaining(['deer', 'deal']));
	})
})

describe('my tests', () => {
	test('not found', () => {
		expect(autocomplete('a', ['dog', 'deer', 'deal'])).toEqual(expect.arrayContaining([]));
	})
	test('empty', () => {
		expect(autocomplete('a', [])).toEqual(expect.arrayContaining([]));
	})
	test('exact match', () => {
		expect(autocomplete('dog', ['dog', 'deer', 'deal'])).toEqual(expect.arrayContaining(['dog']));
	})
	test('overtyping', () => {
		expect(autocomplete('dogg', ['dog', 'deer', 'deal'])).toEqual(expect.arrayContaining([]));
	})
	test('empty string', () => {
		expect(autocomplete('', ['dog', 'deer', 'deal'])).toEqual(expect.arrayContaining(['dog', 'deer', 'deal']));
	})
})