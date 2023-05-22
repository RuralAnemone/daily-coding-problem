import 'jest'
import { NodeTest, serialize, deserialize } from '.'

describe('self testing', () => {
    test(' the copilot test idk ', () => {
        const node = new NodeTest('root', new NodeTest('left', new NodeTest('left.left', null, null), null), new NodeTest('right', null, null));
        expect(deserialize(serialize(node)).left.left.val).toBe('left.left')
    })
})