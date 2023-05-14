/**
 * A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.
 *
 * Given the root to a binary tree, count the number of unival subtrees.
 *
 * For example, the following tree has 5 unival subtrees:
 *
 * ```
 *   0
 *  / \
 * 1   0
 *    / \
 *   1   0
 *  / \
 * 1   1
 * ```
 */
function countUnivalSubtrees(root: TreeNode | null): number {
	if (root === null) {
		return 0;
	}
	let count = 0;
	if (isUnival(root, root.value)) {
		count++;
	}
	count += countUnivalSubtrees(root.left);
	count += countUnivalSubtrees(root.right);
	return count;
}

function isUnival(root: TreeNode | null, value: number): boolean {
	if (root === null) {
		return true;
	}
	if (root.value === value) {
		return isUnival(root.left, value) && isUnival(root.right, value);
	}
	return false;
}

class TreeNode {
	value: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(value: number, left: TreeNode | null = null, right: TreeNode | null = null) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}

export { countUnivalSubtrees, TreeNode };