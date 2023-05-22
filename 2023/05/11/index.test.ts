import 'jest'
import { XORLinkedList } from '.'

describe('XORLinkedList', () => {
    test('XORLinkedList', () => {
        const list = new XORLinkedList(0, 1, 2, 3, 4, 5)
        expect(list.getBoth(2)).toBe(1 ^ 3);
        expect(list.getBoth(3)).toBe(2 ^ 4);
    })
})
