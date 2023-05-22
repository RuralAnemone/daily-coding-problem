import 'jest'
import kIsSum from '.'

describe('given test(s)', () => {
    test('[10, 15, 3, 7], k=17 => true', () => {
        expect(kIsSum([10, 15, 3, 7], 17)).toBe(true)
    })
})

describe('self tests', () => {
    test('[], k=0 => false', () => {
        expect(kIsSum([], 0)).toBe(false)
    })
    test('[1], k=1 => false', () => {
        expect(kIsSum([1], 1)).toBe(false)
    })
    test('[1, 2], k=3 => true', () => {
        expect(kIsSum([1, 2], 3)).toBe(true)
    })
})