import 'jest'
import { countUnivalSubtrees, TreeNode } from './index.ts'

describe('test countUnivalSubtrees', () => {
	test('should return 5', () => {
		const root = new TreeNode(0, new TreeNode(1), new TreeNode(0, new TreeNode(1, new TreeNode(1), new TreeNode(1)), new TreeNode(0)));
		expect(countUnivalSubtrees(root)).toBe(5);
	});
});