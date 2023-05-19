import 'jest'
import { longestSubstring } from '.'

describe('given test(s)', () => {
	test('"abcba" => "bcb"', () => {
		expect(longestSubstring(2, 'abcba')).toBe('bcb');
	})
})