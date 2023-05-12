import 'jest'
import countDecodings from './index.js'


describe('countDecodings()', () => {
	test('should return 3', () => {
		expect(countDecodings('111')).toBe(3);
	});

	test('should return 2', () => {
		expect(countDecodings('12')).toBe(2);
	});

	test('should return 0', () => {
		expect(countDecodings('01')).toBe(0);
	});

	test('should return 1', () => {
		expect(countDecodings('27')).toBe(1);
	});

	test('should return 0', () => {
		expect(countDecodings('0')).toBe(0);
	});

	test('should return 3', () => {
		expect(countDecodings('111')).toBe(3);
	})
});