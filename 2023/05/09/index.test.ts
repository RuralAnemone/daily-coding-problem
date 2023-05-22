import 'jest'
import firstMissing from '.'

describe('given test(s)', () => {
    test('[3, 4, -1, 1] => 2', () => {
        expect(firstMissing([3, 4, -1, 1])).toBe(2)
    })
    test('[1, 2, 0] => 3', () => {
        expect(firstMissing([1, 2, 0])).toBe(3)
    })
})

describe('edge cases idk', () => {
    test('[] => NaN', () => {
        expect(firstMissing([])).toBeNaN()
    })
    test('[0] => 1', () => {
        expect(firstMissing([0])).toBe(1)
    })
    test('[1] => 2', () => {
        expect(firstMissing([1])).toBe(2)
    })
    test('[-1] => NaN', () => {
        expect(firstMissing([-1])).toBeNaN()
    })
})